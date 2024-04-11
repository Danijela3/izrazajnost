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


/*VIDEO MODAL*/


// const openModalBtn = document.getElementById("openModalBtn");
// const modal = document.getElementById("videoModal1");
// const closeModalBtn = modal.querySelector(".close");

// openModalBtn.addEventListener("click", function() {
//   modal.style.display = "block";
// });

// closeModalBtn.addEventListener("click", function() {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });



const modals = document.querySelectorAll('.modal');
const playButtons = document.querySelectorAll('.play-btn');

// Function to open modal and play video
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  const iframe = modal.querySelector('iframe');
  html.classList.add("no-scroll");
  iframe.src += '&autoplay=1'; // Autoplay the video
}

// Function to close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  const iframe = modal.querySelector('iframe');
  iframe.src = iframe.src.replace('&autoplay=1', '');
  html.classList.remove("no-scroll"); // Stop autoplay
}

// Add event listeners to play buttons
playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    // Close all modals except the one being opened
    modals.forEach(modal => {
      if (modal.id !== modalId) {
        closeModal(modal.id);
      }
    });
    openModal(modalId);
  });
});

// Add event listener to close modal when close button is clicked
modals.forEach(modal => {
  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', () => {
    closeModal(modal.id);
  });
});



// // Get the modal
// var modal = document.getElementById("modal-content");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");



// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];



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

/*
 *  javascript
 */
(function () {

// map scroll container - moving right inital scroll position
const scrollContainer = document.getElementById('map-wrap');
scrollContainer.scrollLeft = 250;

})();
