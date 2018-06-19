// Get open modal button
var modalBtn = document.getElementById('loginBtn');
// Get close button
var closeBtn = document.getElementById('closelogin');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  var modal = document.getElementById('login-Modal');
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
 
  var modal = document.getElementById('login-Modal');
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  var modal = document.getElementById('login-Modal');
  if(e.target == modal){
    modal.style.display = 'none';
  }
}