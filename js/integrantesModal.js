// Get modal element

// Get open modal button
var modalBtn = document.getElementById('BtnIntegrante1');
// Get close button
var closeBtn = document.getElementById('closeinteg1');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  var modal = document.getElementById('integrantes-Modal');
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  
  console.log('cerrandoel modal integrantes');
  var modal = document.getElementById('integrantes-Modal');
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  var modal = document.getElementById('integrantes-Modal');
  
  if(e.target == modal){
    modal.style.display = 'none';
  }
}