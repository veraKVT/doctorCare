let userName;
let userPhone;

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
  let displyForCall = getComputedStyle(call).getPropertyValue("display")
  if (displyForCall === 'none'){
    displyForCall = 'block';
  } else {
    displyForCall = 'none';
  }
}

function reCall(){
  userName = document.getElementById('name-call').value;
  userPhone = document.getElementById('number-call').value;
  alert(`${userName}, we'd call you in a few minutes!`); 
  showModal();
};