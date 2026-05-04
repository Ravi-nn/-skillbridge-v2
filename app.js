// SkillBridge v2 — Shared App Logic
'use strict';

// ── Active nav highlight ──────────────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
  if (item.href && item.href.includes(location.pathname.split('/').pop())) {
    item.classList.add('active');
  }
});

// ── Smooth card hover shadows ─────────────────────────────
document.querySelectorAll('.card-hover').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

// ── Keyboard shortcut: Ctrl+K → focus search ─────────────
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const search = document.querySelector('.search-bar input');
    if (search) search.focus();
  }
});

console.log('🚀 SkillBridge v2 loaded');
