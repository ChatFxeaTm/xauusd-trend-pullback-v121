const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const chartData = {
  '2y': {
    src: 'assets/equity-2y.gif',
    alt: '两年 MT4 策略测试器资金曲线',
    subtitle: '两年主样本 · 点差 35',
    caption: '建模质量 89.95%，图表错误 26；测试点差固定为 35。'
  },
  '2026': {
    src: 'assets/equity-2026.gif',
    alt: '2026 年 MT4 策略测试器资金曲线',
    subtitle: '2026 年样本 · 点差 35',
    caption: '2026-01-01 至 2026-09-26：净利润 $8,533.31，PF 1.24，相对回撤 24.09%。'
  }
};

const chart = document.querySelector('#equity-chart');
const subtitle = document.querySelector('#chart-subtitle');
const caption = document.querySelector('#chart-caption');

document.querySelectorAll('[data-chart]').forEach((button) => {
  button.addEventListener('click', () => {
    const next = chartData[button.dataset.chart];
    if (!next || !chart) return;

    document.querySelectorAll('[data-chart]').forEach((item) => {
      item.setAttribute('aria-selected', String(item === button));
    });

    chart.src = next.src;
    chart.alt = next.alt;
    subtitle.textContent = next.subtitle;
    caption.textContent = next.caption;
  });
});
