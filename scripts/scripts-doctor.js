// to fix header

window.onscroll = function changeHeader(){
  let headColor = document.getElementById('head-bar');  
    if (document.documentElement.scrollTop > 30 && headColor.classList.contains('header-light') === true){    
      headColor.classList.remove('header-light');
      headColor.classList.add('header-dark');       
    } else if (document.documentElement.scrollTop < 30 && headColor.classList.contains('header-dark') === true){
      headColor.classList.remove('header-dark');
      headColor.classList.add('header-light'); 
    }
    changeImages();
  }

// change images for dark/light header

function changeImages(){
  let logo = document.getElementById('logo');
  let burgerLines = document.getElementById('burger-but');  
  let headColor = document.getElementById('head-bar');
  if (headColor.className === 'header-dark'){
    logo.src = 'images/logo-dark.png';
    burgerLines.src = 'images/lines-dark.png';
  } else {
    logo.src = 'images/logo-light.png';
    burgerLines.src = 'images/lines-light.png';
  }
}

// open burger menu

function showBurgerMenu(){
    let showMenu = document.getElementById('hide');
    let headColor = document.getElementById('head-bar');
    headColor.classList.toggle('header-light');
    headColor.classList.toggle('header-dark');
    showMenu.classList.toggle('show-list');
    showMenu.classList.toggle('hide-list')
    
    changeImages();
    swapMenuButton();    
  }

// change burger/close button

function swapMenuButton(){
  let image = document.getElementById('burger-but');
    if (image.src.match('images/lines-dark.png')){
      image.src = 'images/close-button.png';
    } else {
      image.src = 'images/lines-light.png';
    }
  }
  
// show modal window for call click

function showModal(){  
  let call = document.getElementById('call');
  let displayForCall = getComputedStyle(call).getPropertyValue('display');
  if (displayForCall === 'none'){
    call.style.display = 'block';
  } else {
    call.style.display = 'none';
  }
}

// show modal message

function reCall(){
  
  let userName = document.getElementById('name-call').value;
  
  const lastMessage = document.createElement('p');
  const mesText = document.createTextNode(`${userName}, we'd call you in a few minutes!`);
  const parent = document.getElementsByClassName('modal-body')[0];
  const child = document.getElementById('textLine');
  lastMessage.appendChild(mesText);  
  parent.replaceChild(lastMessage, child);
  const recicleForm = document.getElementsByTagName('form')[0];
  parent.removeChild(recicleForm);
};


