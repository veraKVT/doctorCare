function myFunction() {
    var x = document.getElementById("burger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function showModal(){
  if (call.style.display === 'none'){
    call.style.display = 'block';
  } else {
    call.style.display = 'none';
  }
}

let userName = document.getElementById('name-call');
let userPhone = document.getElementById('phone-call');

function reCall(){
  alert(`${userName}, we'd call you in a few minutes!`); 
  showModal();
};