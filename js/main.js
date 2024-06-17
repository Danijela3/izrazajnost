

document.addEventListener('DOMContentLoaded', function () {
  function checkHeader() {
    let header = document.querySelector('.header');

    if (!header)
      return;

    let windowSize = window.innerWidth;
    if (windowSize > 991) {

      let headerHeight = header.offsetHeight;
      let windowScroll = window.scrollY;
      let main = document.querySelector('main');

      if (windowScroll > headerHeight) {
        header.classList.add('change-header');
        // main.style.marginTop = `${headerHeight}px`;
      } else {
        header.classList.remove('change-header');
        // main.style.marginTop = `0`;
      }
    } else {
      // Ensure to reset any styles when window size is <= 991
      let header = document.querySelector('.header');
      let main = document.querySelector('main');
      header.classList.remove('change-header');
      main.style.marginTop = `0`;
    }
  }

  // Run checkHeader initially
  checkHeader();

  // Attach event listeners
  window.addEventListener('scroll', checkHeader);
  window.addEventListener('resize', checkHeader);

  //mobile lan picker dropdown
  let windowSize = window.innerWidth;
  if (windowSize < 992) {

    let lanPicker = document.querySelector('.lan-picker > a');

    lanPicker.addEventListener('click', function () {
      let dropdown = this.nextElementSibling;
      console.log(dropdown);
      dropdown.classList.toggle("open");
    });
  }


  // opening video modal 

  let playImages = document.querySelectorAll('.play-js');
  let closeBtns = document.querySelectorAll('.modal .close');

  if (playImages && playImages.length) {

    playImages.forEach(function (item) {

      item.addEventListener("click", function () {
        let modal = this.nextElementSibling;
        modal.classList.add("open");
        const iframe = modal.getElementsByTagName('iframe')[0];
        html.classList.add("no-scroll");
        iframe.src += '&autoplay=1'; // Autoplay the video
      })
    });

  }

  // closing modal on close buttons

  if (closeBtns && closeBtns.length) {

    closeBtns.forEach(function (item) {

      item.addEventListener("click", function () {
        let modal = this.closest('.modal');
        stopVideo(modal);
        modal.classList.remove("open");
        html.classList.remove("no-scroll");

      })
    });

  }

  // closing modal on window click

  window.onclick = function (event) {
    let modalOpened = document.querySelector('.modal.open');

    if (event.target == modalOpened) {
      stopVideo(modalOpened);
      modalOpened.classList.remove("open");
      html.classList.remove("no-scroll");

    }
  }


  function stopVideo(modal) {
    const iframe = modal.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      iframe.src = ''; // Clear the src to stop the video
      // iframe.src = src; // Reset the src back to the original value
    }
  }




    let playButton = document.getElementById('playButton');
    let youtubeVideo = document.getElementById('youtubeVideo');
    let playIcon = document.getElementById('playIcon');

    playButton.addEventListener('click', function() {
      // Append autoplay parameter to the video URL
      let videoSrc = youtubeVideo.src;
      if (videoSrc.indexOf('autoplay=1') === -1) {
          youtubeVideo.src = videoSrc + "&autoplay=1";
      }
        playButton.style.display = 'none';
        playIcon.style.display = 'none';

    });

    playIcon.addEventListener('click', function() {
      // Append autoplay parameter to the video URL
      let videoSrc = youtubeVideo.src;
      if (videoSrc.indexOf('autoplay=1') === -1) {
          youtubeVideo.src = videoSrc + "&autoplay=1";
      }
        playButton.style.display = 'none';
        playIcon.style.display = 'none';

    });




});




// header moves up on scroll
var prevScrollpos = window.scrollY;
var stickyEle = document.querySelector(".header-sticky");

if (stickyEle) {
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header-sticky").style.top = "0";
    } else {
      document.querySelector(".header-sticky").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
}


// hamburger menu open and close
const hamburgerBtn = document.getElementById("hamburger-button");

let html = document.getElementsByTagName('html')[0];

hamburgerBtn.addEventListener("click", () => {
  console.log('click');
  document.getElementById("navigation").classList.add("change");
  document.getElementById("mobile-navigation").classList.add("change");
  document.getElementById("header").classList.add("change");
  html.classList.add("no-scroll");
});


const closeBtn = document.getElementById("close-button");

closeBtn.addEventListener("click", () => {

  document.getElementById("navigation").classList.remove("change");
  document.getElementById("mobile-navigation").classList.remove("change");
  document.getElementById("header").classList.remove("change");
  html.classList.remove("no-scroll");

});



//play video on click

// const modals = document.querySelectorAll('.modal');
// const playButtons = document.querySelectorAll('.play-btn');

// // Function to open modal and play video
// function openModal(modalId) {
//   const modal = document.getElementById(modalId);
//   modal.style.display = 'block';
//   const iframe = modal.querySelector('iframe');
//   html.classList.add("no-scroll");
//   iframe.src += '&autoplay=1'; // Autoplay the video
// }

// // Function to close modal
// function closeModal(modalId) {
//   const modal = document.getElementById(modalId);
//   modal.style.display = 'none';
//   const iframe = modal.querySelector('iframe');
//   iframe.src = iframe.src.replace('&autoplay=1', '');
//   html.classList.remove("no-scroll"); // Stop autoplay
// }

// // Add event listeners to play buttons
// playButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modalId = button.getAttribute('data-modal');
//     // Close all modals except the one being opened
//     modals.forEach(modal => {
//       if (modal.id !== modalId) {
//         closeModal(modal.id);
//       }
//     });
//     openModal(modalId);
//   });
// });

// Add event listener to close modal when close button is clicked
// modals.forEach(modal => {
//   const closeButton = modal.querySelector('.close');
//   closeButton.addEventListener('click', () => {
//     closeModal(modal.id);
//   });
// });





/*
 *  javascript
 */
(function () {

  // map scroll container - moving right inital scroll position
  const scrollContainer = document.getElementById('map-wrap');

  if (scrollContainer) {
    scrollContainer.scrollLeft = 250;
  }

})();





