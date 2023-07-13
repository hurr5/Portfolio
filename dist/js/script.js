const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeEl = document.querySelectorAll('.menu__close, .menu__overlay');
    

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

closeEl.forEach(function(element) {
    element.addEventListener('click', function() {
      menu.classList.remove('active');
    });
  });
  