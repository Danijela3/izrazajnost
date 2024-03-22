const hamburgerBtn = document.getElementById("hamburger-button");

let html = document.getElementsByTagName('html')[0];

hamburgerBtn.addEventListener("click", () => {
  console.log('click');
  document.getElementById("navigation").classList.add("change");
  document.getElementById("mobile-navigation").classList.add("change");
  html.classList.add("no-scroll");
} );


const closeBtn = document.getElementById("close-button");

closeBtn.addEventListener("click", () => {
  
  document.getElementById("navigation").classList.remove("change");
  document.getElementById("mobile-navigation").classList.remove("change");
  html.classList.remove("no-scroll");
} );






// Get the modal
var modal = document.getElementById("modal-content");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// btn.addEventListener("click", () => {
//     modal.classList.add('active');
// })

// span.addEventListener("click", () => {
//     modal.classList.remove('active');
// })



// // // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }