// No network telemetry. An optional future consent-aware adapter may subscribe
// to this local event. No user data, query strings or arbitrary URLs included.
document.querySelectorAll('.store-cta').forEach(link => {
  link.addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('app-store-cta', {
      detail: { app: link.dataset.app, placement: link.closest('.download') ? 'footer' : 'hero' }
    }));
  });
});
