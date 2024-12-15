function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-buttons button');
    
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterProjects('${category}')"]`).classList.add('active');
    
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }