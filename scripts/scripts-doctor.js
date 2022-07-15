window.onscroll = function changeHeader(){
  let headColor = document.getElementById('head-bar');  
  if (document.body.scrollTop > 30){
    headColor.classList.toggle('header-light')
    headColor.classList.toggle('header-dark');
    changeImages();
  }
}

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

function showBurgerMenu(){
    let showMenu = document.getElementById('hide');
    let headColor = document.getElementById('head-bar');
    headColor.classList.toggle('header-light')
    headColor.classList.toggle('header-dark');
    showMenu.classList.toggle('show-list');
    showMenu.classList.toggle('hide-list')
    
    changeImages();
    swapMenuButton();    
  }

function swapMenuButton(){
  let image = document.getElementById('burger-but');
    if (image.src.match('images/lines-dark.png')){
      image.src = 'images/close-button.png';
    } else {
      image.src = 'images/lines-light.png';
    }
  }  

function showModal(){  
  let call = document.getElementById('call');
  let displayForCall = getComputedStyle(call).getPropertyValue('display');
  if (displayForCall === 'none'){
    call.style.display = 'block';
  } else {
    call.style.display = 'none';
  }
}

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


