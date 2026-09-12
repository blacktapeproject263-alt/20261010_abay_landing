// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

export const prerender = false;

// HTML entity escape helper to avoid Telegram HTML injection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const POST: APIRoute = async (context) => {
  const { request } = context;

  // Retrieve Cloudflare environment variables or fallbacks
  const runtime = (context.locals as any)?.runtime;
  const env = runtime?.env || {};

  const TURNSTILE_SECRET_KEY = env.TURNSTILE_SECRET_KEY || import.meta.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
  const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN || import.meta.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID || import.meta.env.TELEGRAM_CHAT_ID;
  const RESEND_API_KEY = env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
  const NOTIFICATION_EMAIL = env.NOTIFICATION_EMAIL || import.meta.env.NOTIFICATION_EMAIL || 'abay.syzdykov@example.com';

  // Extract client metadata from Cloudflare Edge headers
  const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || '127.0.0.1';
  const clientCountry = request.headers.get('CF-IPCountry') || 'Local';
  const userAgent = request.headers.get('user-agent') || 'Unknown';

  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid Content-Type. Expected application/json' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { name, email, message, company_hp, 'cf-turnstile-response': turnstileToken } = body;

    // 1. HONEYPOT TRAP: If hidden field company_hp is filled, silently succeed without delivery
    if (company_hp && company_hp.trim().length > 0) {
      console.warn(`[Security] Honeypot triggered from IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ success: true, message: 'Inquiry processed.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid name (at least 2 characters).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid work email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return new Response(
        JSON.stringify({ success: false, error: 'Message must be at least 5 characters long.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Cloudflare Turnstile Verification
    const isTestKey = TURNSTILE_SECRET_KEY.startsWith('1x0000000000000000000000000000000AA') || TURNSTILE_SECRET_KEY.startsWith('2x0000000000000000000000000000000AA');

    if (turnstileToken && !isTestKey) {
      const verifyFormData = new URLSearchParams();
      verifyFormData.append('secret', TURNSTILE_SECRET_KEY);
      verifyFormData.append('response', turnstileToken);
      verifyFormData.append('remoteip', clientIp);

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: verifyFormData,
      });

      const turnstileData: any = await turnstileRes.json();
      if (!turnstileData.success) {
        console.error('[Security] Turnstile verification failed:', turnstileData);
        return new Response(
          JSON.stringify({ success: false, error: 'Bot verification failed. Please refresh and try again.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 4. Parallel Dispatch: Telegram Bot API & Resend Email API
    const dispatchPromises: Promise<any>[] = [];

    // Telegram Notification
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const telegramText = [
        `<b>🎯 New Portfolio Lead!</b>`,
        ``,
        `<b>Name:</b> ${escapeHtml(name.trim())}`,
        `<b>Email:</b> ${escapeHtml(email.trim())}`,
        `<b>Message:</b>\n${escapeHtml(message.trim())}`,
        ``,
        `<b>Origin:</b> <code>${escapeHtml(clientIp)}</code> (${escapeHtml(clientCountry)})`,
        `<b>Time:</b> <code>${new Date().toISOString()}</code>`
      ].join('\n');

      const telegramPromise = fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      }).then(async (res) => {
        if (!res.ok) {
          const err = await res.text();
          console.error('[Telegram] Failed to dispatch:', err);
        }
      }).catch(err => console.error('[Telegram] Network error:', err));

      dispatchPromises.push(telegramPromise);
    } else {
      console.log('[Telegram] Skipping notification (TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured)');
    }

    // Resend Email Notification
    if (RESEND_API_KEY && NOTIFICATION_EMAIL) {
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0;">🎯 New Portfolio Lead Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
          <p><strong>Country:</strong> ${escapeHtml(clientCountry)} (${escapeHtml(clientIp)})</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <h3 style="color: #0f172a;">Project Scope / Message:</h3>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 6px; color: #334155;">${escapeHtml(message.trim())}</p>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 30px;">Received via Abay Syzdykov Data Analyst Portfolio on Cloudflare Pages</p>
        </div>
      `;

      const resendPromise = fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Inquiries <onboarding@resend.dev>',
          to: [NOTIFICATION_EMAIL],
          subject: `🎯 New Lead from Portfolio: ${name.trim()}`,
          html: emailHtml,
        }),
      }).then(async (res) => {
        if (!res.ok) {
          const err = await res.text();
          console.error('[Resend] Failed to dispatch email:', err);
        }
      }).catch(err => console.error('[Resend] Network error:', err));

      dispatchPromises.push(resendPromise);
    } else {
      console.log('[Resend] Skipping email dispatch (RESEND_API_KEY not configured)');
    }

    // Wait for all dispatch handlers to complete
    await Promise.allSettled(dispatchPromises);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your inquiry has been successfully transmitted. Thank you!'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('[Serverless Contact] Uncaught error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error processing inquiry.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
