function myFunction() {
    var x = document.getElementById("burger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const call = document.getElementById('call');

  if (call.style.display === 'none'){
    call.style.display = 'block';
  } else {
    call.style.display = 'none';
  }
});

let userName = '';
let userPhone = '';

const recall = document.getElementById('recall');
recall.addEventListener('click', () => {
  alert(`${userName}, we'd call you in a few minutes!`)

});