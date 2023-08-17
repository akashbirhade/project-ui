document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.header-area');
  
    navbarToggler.addEventListener('click', function () {
      navbar.classList.toggle('open');
    });
  });