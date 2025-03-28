const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.offers-slider-next-btn',
    prevEl: '.offers-slider-prev-btn',
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'horizontal`' : 'horizontal';

  return direction;
}
const prodSwiperr = new Swiper('.prod-swiper', {
  slidesPerView: 4,
  // direction: 'horizontal',
  // direction: getDirection(),
  navigation: {
    nextEl: '.prod-slider-next-btn',
    prevEl: '.prod-slider-prev-btn',
  },
  on: {
    resize: function () {
      prodSwiperr.changeDirection(getDirection());
    },
  },
});


const customerSlider = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: '.customer-slider-next-btn',
    prevEl: '.customer-slider-prev-btn',
  },
  pagination: {
    el: '.customer-swiper-pagination',
    type: 'bullets',
    // bulletActiveClass: 'customer-swiper-pagination-active',
  },
  // slidesPerView: 2.5,
  slidesPerView: 2.5,
  // centeredSlides: true,
  spaceBetween: 4,

  //   breakpoints: {
  //    1920: {
  //        slidesPerView: 3,
  //        spaceBetween: 30
  //    },
  //    1028: {
  //        slidesPerView: 2,
  //        spaceBetween: 30
  //    },
  //    990: {
  //        slidesPerView: 1,
  //        spaceBetween: 0
  //    }
  //  }
});



// partner slider

const partnerSwiper = new Swiper(".partnerSwiper", {
  slidesPerView: 7, // Shows 7 slides at a time
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.partner-slider-next-btn',
    prevEl: '.partner-slider-prev-btn',
  },
  autoplay: {
    delay: 500,

    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2 }, // On small screens, show 2 slides
    768: { slidesPerView: 4 }, // On tablets, show 4 slides
    1024: { slidesPerView: 5 }, // On medium screens, show 5 slides
    1280: { slidesPerView: 7 } // On large screens, show 7 slides
  }
});

function setupDropdown(toggleId, menuId) {
  const toggleElement = document.getElementById(toggleId);
  const menuElement = document.getElementById(menuId);
console.log('clicked');

  // Toggle dropdown visibility
  const isHidden = menuElement.classList.contains("hidden");
  if (isHidden) {
    console.log(isHidden);
    console.log(menuElement);
    
    menuElement.classList.remove("hidden");
    menuElement.classList.add("flex");
  } else {
    menuElement.classList.add("hidden");
    menuElement.classList.remove("flex");
  }
}

// Global Event Listener to Close Dropdown on Outside Click
document.addEventListener("click", function (event) {
  const toggleElement = document.getElementById("anotherToggle");
  const menuElement = document.getElementById("lang-dropdown");
  if (!toggleElement || !menuElement) return;
  if (!toggleElement.contains(event.target) && !menuElement.contains(event.target)) {
    menuElement.classList.remove("flex");
    menuElement.classList.add("hidden");
  }
})

function handleNotificationPopup(toggleId, menuId) {
  const toggleElement = document.getElementById(toggleId);
  const menuElement = document.getElementById(menuId);

  // Toggle dropdown visibility
  const isHidden = menuElement.classList.contains("hidden");
  if (isHidden) {
    menuElement.classList.remove("hidden");
    menuElement.classList.add("flex");
  } else {
    menuElement.classList.add("hidden");
    menuElement.classList.remove("flex");
  }
}

// Global Event Listener to Close Dropdown on Outside Click
document.addEventListener("click", function (event) {
  const toggleElement = document.getElementById("notification-toggle");
  const menuElement = document.getElementById("empty-notification-popup");
  if (!toggleElement || !menuElement) return;
  if (!toggleElement.contains(event.target) && !menuElement.contains(event.target)) {
    menuElement.classList.remove("flex");
    menuElement.classList.add("hidden");
  }
})



// login-popup


function openPopup(popupid, overlayid) {
  const popup = document.getElementById(popupid);
  const overlay = document.getElementById(overlayid);
  

  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  popup.classList.add("flex");
  overlay.classList.add("flex");
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Close popup when clicking on overlay
  overlay.addEventListener("click", function () {
    closePopup(popupid, overlayid);
  });
}

function closePopup(popupid, overlayid) {
  const popup = document.getElementById(popupid);
  const overlay = document.getElementById(overlayid);

  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = ""; // Restore scrolling
}

// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("[data-collapse-toggle='navbar-cta']");
  const menu = document.getElementById("navbar-cta");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});


const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (e.target.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && input.value === "") {
            inputs[index - 1].focus();
        }
    });

    input.addEventListener("paste", (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").trim().slice(0, 4);
        if (/^\d{4}$/.test(pasteData)) {
            inputs.forEach((inp, i) => {
                inp.value = pasteData[i] || "";
            });
            inputs[inputs.length - 1].focus();
        }
    });
});

function setErrorState() {
    inputs.forEach(input => input.classList.add("otp-error"));
}

function clearErrorState() {
    inputs.forEach(input => input.classList.remove("otp-error"));
}

function openOtpPopup(popupid, overlayid) {
  const otpPopup = document.getElementById('otpPopup');
  const loginPopup = document.getElementById('loginPopup');
  const overlay = document.getElementById(overlayid);
  

  otpPopup.classList.remove("hidden");
  otpPopup.classList.add("flex");
  loginPopup.classList.add("hidden");
  loginPopup.classList.remove("flex");
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Close popup when clicking on overlay
  overlay.addEventListener("click", function () {
    closePopup(popupid, overlayid);
  });
}

function closeOtpPopup(){
  const otpPopup = document.getElementById('otpPopup');
  const loginPopup = document.getElementById('loginPopup');
  const overlay = document.getElementById('loginOverlay');

  otpPopup.classList.remove("flex");
  otpPopup.classList.add("hidden");

  overlay.classList.add("hidden");
  overlay.classList.remove("flex");

  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const decrementBtn = document.getElementById("decrement");
  const incrementBtn = document.getElementById("increment");
  const counterValue = document.getElementById("counter");

  let count = 1; // Initial count value

  decrementBtn.addEventListener("click", function () {
    if (count > 1) {
      count--;
      counterValue.textContent = count;
    }
  });

  incrementBtn.addEventListener("click", function () {
    count++;
    counterValue.textContent = count;
  });
});
