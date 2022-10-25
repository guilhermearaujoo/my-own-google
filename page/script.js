const showSuspendMenu = () => {
  const menu = document.getElementsByClassName('itens-header')[0];

  (menu.style.display === 'none') ? menu.style.display = 'grid' : menu.style.display = 'none';
}

const button = document.getElementById('mini-header');
button.addEventListener('click', showSuspendMenu);