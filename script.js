const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');
const icon = menuIcon.querySelector('i');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Toggle between Font Awesome icons
  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

const texts = ["Dream", "Develop", "Deploy"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const el = document.getElementById('typing-text');
  const current = texts[wordIndex];

  // Move one step
  charIndex += isDeleting ? -1 : 1;

  // Render substring
  el.textContent = current.slice(0, charIndex);

  // Switch modes at the ends
  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;                // start deleting
    setTimeout(type, 2000);           // hold full word
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;               // start typing next word
    wordIndex = (wordIndex + 1) % texts.length;
    setTimeout(type, 300);            // small pause before next word
    return;
  }

  // Speed: slower typing, faster deleting
  const speed = isDeleting ? 60 : 120;
  setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', type);



function animateCounter(element) {
  let target = +element.getAttribute("data-to");
  let speed = +element.getAttribute("data-speed");
  let count = 0;
  let stepTime = Math.abs(Math.floor(speed / target));

  let timer = setInterval(() => {
    count++;
    element.textContent = count;
    if (count >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

document.querySelectorAll(".timer").forEach(timer => {
  animateCounter(timer);
});


function openTab(tabId) {
  let contents = document.querySelectorAll('.tab-content');
  let tabs = document.querySelectorAll('.tab');

  contents.forEach(content => content.classList.remove('active'));
  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}



document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-2");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-to");     // final number
    const duration = +counter.getAttribute("data-speed"); // total time in ms
    const strong = counter.querySelector("strong");       // keep the +

    let count = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const updateCount = () => {
      if (count < target) {
        count++;
        counter.innerHTML = count + (strong ? strong.outerHTML : "");
        setTimeout(updateCount, stepTime);
      } else {
        counter.innerHTML = target + (strong ? strong.outerHTML : "");
      }
    };

    updateCount();
  });
});



// Select all tabs and contents
const tabs = document.querySelectorAll('.service-tab');
const contents = document.querySelectorAll('.service-content');

// Activate first tab & content on page load
tabs[0].classList.add('active');
contents[0].classList.add('active');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active class from all
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked tab & corresponding content
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});





particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 1,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      }
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.6
        }
      }
    }
  }
});




const container = document.querySelector('.testimonial-container');
const items = document.querySelectorAll('.testimonial-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const visibleItems = 3;
const totalItems = items.length;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  container.style.transform = `translateX(-${index * itemWidth}px)`;
}

next.addEventListener('click', () => {
  if (index < totalItems - visibleItems) {
    index++;
    updateCarousel();
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Auto-slide every 5 seconds
setInterval(() => {
  if (index < totalItems - visibleItems) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
}, 5000);