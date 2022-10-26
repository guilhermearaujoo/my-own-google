const menu = document.getElementsByClassName('itens-header')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByClassName('footer')[0];

const showSuspendMenu = () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'grid';
    if(screen.width < 1100) {
      main.style.filter = 'brightness(20%)';
      footer.style.filter = 'brightness(20%)';
      }; 
  } else {
    menu.style.display = 'none';
    main.style.filter = 'none';
    footer.style.filter = 'none';
  }
}

const button = document.getElementById('mini-header');
button.addEventListener('click', showSuspendMenu);
