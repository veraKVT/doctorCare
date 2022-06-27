function myFunction() {
    var x = document.getElementById("burger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function showModal(){  
  let call = document.getElementById('call');
  let displyForCall = getComputedStyle(call).getPropertyValue("display");
  if (displyForCall === 'none'){
    call.style.display = 'block';
  } else {
    call.style.display = 'none';
  }
}

function reCall(){
  debugger;
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

