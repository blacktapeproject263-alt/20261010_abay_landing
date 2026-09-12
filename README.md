# Abay Syzdykov — Data Analyst & BI Portfolio

Production-grade, zero-cost (100% Free Tier) portfolio and analytics showcase built for **Abay Syzdykov** (Data Analyst & BI Specialist). Deployed on the **Cloudflare Global Edge Network** using **Cloudflare Pages + Workers** and **Astro SSR/Hybrid**.

---

## ⚡ Tech Stack

- **Framework**: [Astro 5+](https://astro.build/) (Static Site Generation + Serverless Edge Functions via `@astrojs/cloudflare`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Data Visualization**: [Apache ECharts](https://echarts.apache.org/) with responsive charts, dark/light theme awareness, and multi-cohort telemetry
- **Anti-Bot & Security**: [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) + Server-side Honeypot
- **Serverless Lead Generation**: `/api/contact` on Cloudflare Workers with parallel dispatch to:
  - **Telegram Bot API** (instant mobile notifications with IP & country telemetry)
  - **Resend Email API** (transactional email notification)
- **Scheduling**: [Cal.com](https://cal.com/) embed integration for 15-min discovery calls
- **Enterprise Headers**: Strict CSP, HSTS, X-Frame-Options, X-Content-Type-Options in `public/_headers`

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js `20.x` or later (tested on `v24.x`)
- npm `10.x` or later

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Emulate Cloudflare Pages Locally (with Miniflare)
```bash
npm run pages:dev
```
Runs at `http://localhost:8788`, simulating real Cloudflare Worker bindings and security headers.

---

## 🔐 Environment Variables

Create a `.env` file locally based on `.env.example`:

| Variable | Description | Where to get |
|---|---|---|
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile Public Site Key | [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile) |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile Secret Key | [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile) |
| `TELEGRAM_BOT_TOKEN` | Telegram Bot Token for Lead Alerts | Create bot with [@BotFather](https://t.me/botfather) |
| `TELEGRAM_CHAT_ID` | Telegram Chat ID to receive alerts | Send message to [@userinfobot](https://t.me/userinfobot) |
| `RESEND_API_KEY` | Resend API Key | [Resend Dashboard](https://resend.com/api-keys) |
| `NOTIFICATION_EMAIL` | Email address to receive notifications | Your personal or company inbox |

> **Note**: For local development, dummy test keys are provided by default in `wrangler.toml`.

---

## 🌐 Deploying to Cloudflare Pages (GitHub Integration)

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Migrate to Astro + Cloudflare Pages"
   git push origin main
   ```
2. Open the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select the `blacktapeproject263-alt/abay_landing` repository.
4. Configure the Build settings:
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
5. Under **Environment variables**, add:
   - `TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
6. Click **Save and Deploy**. Your portfolio is now live on `*.pages.dev` with automatic edge deployments on every git push!
