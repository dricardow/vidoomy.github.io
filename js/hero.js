document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('configureBtn');
  btn.addEventListener('click', function(){
    // Placeholder action: open a modal or navigate. For now we'll give visual feedback.
    btn.style.transform = 'scale(0.98)';
    setTimeout(()=> btn.style.transform = '', 120);
    // In a real flow this would navigate to a configuration page.
    alert('Ir a configuración de Mazda (placeholder)');
  });
});
