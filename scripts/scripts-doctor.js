function swapMenuButton(){
  let image = document.getElementById('burger-but');
    if (image.src.match('images/lines-w.png')){
      image.src = 'images/close-button.png';
    } else {
      image.src = 'images/lines-w.png';
    }
  }

function removeClassInLi(){
  let list = document.getElementsByClassName('menu-child');
  for (let i = list.length - 1; i >= 0; i--) {
    let inactiveClass = list[i];
    inactiveClass.classList.remove('menu-child');
  } 
}

function createBurgerMenu(){ 
  let burgerBody = document.createElement('div'); 

  let burgerMenu = document.getElementById('menu-list');
  burgerMenu.classList.remove('menu');  

  let liActiv = document.getElementById('activ')
  liActiv.removeAttribute('id');

  removeClassInLi();
  
  let contactButton = document.createElement('div');
  contactButton.innerHTML = 'Agendar consulta';
  contactButton.classList.add('button');

  let socialButtons = document.getElementById('social');
  socialButtons.classList.replace('social', 'social1');  

  burgerBody.appendChild(burgerMenu); 
  burgerBody.appendChild(contactButton);
  burgerBody.appendChild(socialButtons);

  let placeForBurger = document.getElementById('burger');
  placeForBurger.appendChild(burgerBody); 
}

function showBurgerMenu(){
  let show = document.getElementById('burger');
  let displayForshow = getComputedStyle(show).getPropertyValue('display');
  if (displayForshow === 'none'){
    show.style.display = 'block';
  } else {
    show.style.display = 'none';
  }
}

function removeBurgerMenu(){  
  document.getElementById('burger-but').addEventListener("click", function(){
    swapMenuButton();
    showBurgerMenu();
    if (document.getElementById('burger').hasChildNodes() === false){
      createBurgerMenu();
    } else {
      document.getElementById('burger').removeChild(document.getElementById('burger').firstChild);
    }
  });
}
removeBurgerMenu();



  

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

