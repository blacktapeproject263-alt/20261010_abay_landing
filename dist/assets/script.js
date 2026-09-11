
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
      });
    }

    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('This is a demo form. Connect it to your preferred backend or form service.');
      });
    });

    // Theme Switcher
    const themeBtns = document.querySelectorAll('[data-set-theme]');
    const savedTheme = localStorage.getItem('site_theme') || 'emerald';

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('site_theme', theme);
      themeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-set-theme') === theme);
      });
    }

    applyTheme(savedTheme);

    themeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-set-theme');
        applyTheme(theme);
      });
    });
  