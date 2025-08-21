const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.querySelector('.card-header').addEventListener('click', () => {
    // Fecha todos os outros cards
    cards.forEach(c => {
      if(c !== card) {
        c.classList.remove('active');
        c.querySelector('.card-content').style.display = 'none';
      }
    });

    // Alterna o card clicado
    card.classList.toggle('active');
    const content = card.querySelector('.card-content');
    if(card.classList.contains('active')){
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
