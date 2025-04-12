//stckey header
const header = document.querySelector("header");

window.onscroll = function () {
  handleScrollAnimation();
  // let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;
  if (pos > 100) {
    header.classList.add("active");
  } else {
    header.classList.add("active");
  }
};

// toggle button
const menu_toggle_btn = document.querySelector(".menu-toggle-btn");
const tgl_menu = document.querySelector("menu ul");
menu_toggle_btn.onclick = () => {
  tgl_menu.classList.toggle("show");
  menu_toggle_btn.classList.toggle("active");
  // menu_toggle_btn.classList.add("hide_btn");
};
// toggle button
// const offcanvas_close_btn = document.querySelector(".offcanvas_close_btn");
// offcanvas_close_btn.onclick = () => {
//   tgl_menu.classList.toggle("show");
//   menu_toggle_btn.classList.add("hide_btn");
// };

//
var listArray = ["BRING THE PARTY ANYWHERE", "AN ICON MEETS AN ICON"];
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1,
  autoHeight: true,
  autoplay: {
    delay: 30000, //animation과 시간 맞춰줘야함
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        "<em>" +
        listArray[index] +
        "</em>" +
        "<i></i>" +
        "<b></b>" +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// onscroll animation
// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};


// our Pack page JS Start

// const alpha_read_more = document.querySelectorAll(".alpha_read_btn");
// const alpha_less_more = document.querySelectorAll(".alpha_less_btn");
// const alpha_read_text = document.querySelectorAll(".alpha_read_text");

// alpha_read_more.forEach((item, index)=>{
// item.addEventListener("click", ()=>{
//   alpha_read_text[index].style.display= "block"
//   alpha_read_more[index].style.display= "none"
// })
// })
// alpha_less_more.forEach((item, index)=>{
// item.addEventListener("click", ()=>{
//   alpha_read_text[index].style.display= "none"
//   alpha_read_more[index].style.display= "inline-block"
// })
// })



// popUp Function Start
// function openPopup() {
//   document.getElementById("popup").style.display = "block";
// }

// PopUP close Btn style
// function closePopup() {
//   document.getElementById("popup").style.display = "none";
// }

// Read More Btn added
// document.querySelectorAll(".alpha_read_btn").forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     openPopup();
//   });
// });

// popup Image section start


// Age Verification Popup
// document.addEventListener('DOMContentLoaded', function() {
//   const ageModal = document.getElementById('ageVerificationModal');
//   const enterButton = document.getElementById('enterButton');
//   const dobInput = document.getElementById('dob');
//   const countrySelect = document.getElementById('country');

//   // Check if user has already verified age (via cookie)
//   if (!getCookie('ageVerified')) {
//       ageModal.style.display = 'flex';
//   } else {
//       ageModal.style.display = 'none';
//   }

//   enterButton.addEventListener('click', function() {
//       const dob = new Date(dobInput.value);
//       const country = countrySelect.value;
//       const legalAge = getLegalDrinkingAge(country);

//       if (isOfLegalAge(dob, legalAge)) {
//           // Set cookie to remember verification for 1 year
//           setCookie('ageVerified', 'true', 365);
//           ageModal.style.display = 'none';
//       } else {
//           alert('You must be of legal drinking age to enter this site.');
//       }
//   });

//   // Function to check if user is of legal drinking age
//   function isOfLegalAge(dob, legalAge) {
//       const today = new Date();
//       const age = today.getFullYear() - dob.getFullYear();
//       const monthDiff = today.getMonth() - dob.getMonth();
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//           return age - 1 >= legalAge;
//       }
//       return age >= legalAge;
//   }

//   // Function to get legal drinking age by country
//   function getLegalDrinkingAge(country) {
//       switch (country.toLowerCase()) {
//           case 'usa':
//               return 21;
//           case 'sweden':
//               return 18;
//           case 'uk':
//               return 18;
//           case 'other':
//               return 21; // Default to 21 if not specified
//           default:
//               return 21;
//       }
//   }

//   // Cookie functions
//   function setCookie(name, value, days) {
//       const d = new Date();
//       d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
//       const expires = "expires=" + d.toUTCString();
//       document.cookie = name + "=" + value + ";" + expires + ";path=/";
//   }

//   function getCookie(name) {
//       const nameEQ = name + "=";
//       const ca = document.cookie.split(';');
//       for (let i = 0; i < ca.length; i++) {
//           let c = ca[i];
//           while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//           if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//       }
//       return null;
//   }
// });

// popup Image section End




// Cocktail Filtering
document.addEventListener('DOMContentLoaded', function() {
  const categorySelect = document.getElementById('category');
  const browseBySelect = document.getElementById('browseBy');
  const filterForm = document.getElementById('cocktailFilterForm');
  const cocktailCards = document.querySelectorAll('.work');

  // Categories and their options
  const categories = {
      taste: {
          label: 'Taste',
          options: [
              { value: 'citrus', label: 'Citrus' },
              { value: 'fruity', label: 'Fruity' },
              { value: 'light-refreshing', label: 'Light & Refreshing' },
              { value: 'sour', label: 'Sour' },
              { value: 'sweet', label: 'Sweet' },
              { value: 'exotic', label: 'Exotic' }
          ]
      },
      difficulty: {
          label: 'Difficulty',
          options: [
              { value: 'easy', label: 'Easy' },
              { value: 'intermediate', label: 'Intermediate' },
              { value: 'advanced', label: 'Advanced' }
          ]
      },
      glassware: {
          label: 'Glassware',
          options: [
              { value: 'martini', label: 'Martini' },
              { value: 'highball', label: 'Highball' },
              { value: 'rocks', label: 'Rocks' },
              { value: 'shot', label: 'Shot' }
          ]
      }
  };

  // Map drinks to their categories
  const drinkCategories = {
      'North Spirit Pornstar Martini': {
          taste: ['sweet', 'fruity', 'exotic'],
          difficulty: ['intermediate'],
          glassware: ['martini']
      },
      'North Spirit Vodka Fizz': {
          taste: ['sour', 'citrus', 'light-refreshing', 'fruity'],
          difficulty: ['easy'],
          glassware: ['highball']
      },
      'North Spirit Caipiroska': {
          taste: ['sour', 'citrus', 'light-refreshing'],
          difficulty: ['intermediate'],
          glassware: ['highball']
      },
      'North Spirit Vodka On The Rocks': {
          taste: ['light-refreshing'],
          difficulty: ['easy'],
          glassware: ['rocks']
      },
      'North Spirit Vodka Tonic': {
          taste: ['citrus', 'light-refreshing'],
          difficulty: ['easy'],
          glassware: ['highball']
      },
      'North Spirit Screwdriver': {
          taste: ['citrus', 'fruity'],
          difficulty: ['easy'],
          glassware: ['highball']
      },
      'North Spirit Cosmopolitan': {
          taste: ['sour', 'sweet', 'fruity'],
          difficulty: ['easy'],
          glassware: ['martini']
      },
      'North Spirit Vodka Sour': {
          taste: ['sour', 'light-refreshing'],
          difficulty: ['intermediate'],
          glassware: ['rocks']
      },
      'North Spirit The Shot': {
          taste: ['light-refreshing'],
          difficulty: ['easy'],
          glassware: ['shot']
      },
      'North Spirit Grogg': {
          taste: ['sweet', 'light-refreshing'],
          difficulty: ['easy'],
          glassware: ['rocks', 'highball']
      },
      'North Spirit Orange Martini': {
          taste: ['citrus', 'light-refreshing', 'fruity'],
          difficulty: ['easy'],
          glassware: ['martini']
      },
      'North Spirit Sex on the Beach': {
          taste: ['sweet', 'fruity', 'exotic'],
          difficulty: ['easy'],
          glassware: ['highball']
      }
  };

  // Populate Browse by options based on category selection
  categorySelect.addEventListener('change', function() {
      const category = this.value;
      browseBySelect.disabled = false;
      browseBySelect.innerHTML = '<option value="" disabled selected>Browse by</option>';

      if (category) {
          categories[category].options.forEach(option => {
              const opt = document.createElement('option');
              opt.value = option.value;
              opt.textContent = option.label;
              browseBySelect.appendChild(opt);
          });
      }
  });

  // Filter cocktails based on selection
  // filterForm.addEventListener('submit', function(e) {
  //     e.preventDefault();
  //     const category = categorySelect.value;
  //     const filterValue = browseBySelect.value;

  //     if (!category || !filterValue) {
  //         alert('Please select both a category and a filter option.');
  //         return;
  //     }

  //     cocktailCards.forEach(card => {
  //         const cocktailName = card.querySelector('.work_item p').textContent;
  //         const categoriesForDrink = drinkCategories[cocktailName] || {};
  //         const matches = categoriesForDrink[category]?.includes(filterValue) || false;

  //         if (matches) {
  //             card.style.display = 'block';
  //         } else {
  //             card.style.display = 'none';
  //         }
  //     });
  // });

  // Reset filter (optional: add a reset button if needed)
  const resetFilter = () => {
      cocktailCards.forEach(card => {
          card.style.display = 'block';
      });
      categorySelect.selectedIndex = 0;
      browseBySelect.innerHTML = '<option value="" disabled selected>Browse by</option>';
      browseBySelect.disabled = true;
  };

  // Add reset functionality (optional)
  // You can add a reset button in HTML and trigger this function
  // <button type="button" id="resetFilter" class="cta-btn cta-btn-light">Reset Filter</button>
  // document.getElementById('resetFilter').addEventListener('click', resetFilter);
});



// JavaScript for 3-Second Delay
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("whatsappChat").classList.add("show");
        // Optional: You could trigger a subtle animation or alert here if desired
    }, 3000); // 3 seconds delay
   });



// side display JS 
function openPopup() {
  document.getElementById("myPopup").style.display = "flex";
}


function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}