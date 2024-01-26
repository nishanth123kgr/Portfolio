// Particle JS //

function particles_init(
  particles_color = ["#8400ff", "#ff00cf"]
) {
  particlesJS(
    "particles-js",

    {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: particles_color,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#8400FF",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.7,
          random: false,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 7,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 5,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    }
  );
}

// var body = document.body,
//     html = document.documentElement;

// var height = Math.max( body.scrollHeight, body.offsetHeight, 
//                        html.clientHeight, html.scrollHeight, html.offsetHeight );
// document.getElementById("particles-js").style.height = height + "px";

particles_init();

// Particle JS Ends //

// Theme Toggle Functionality //

const themeToggle = document.querySelector("#theme-toggle"); // Theme Toggle Button

if (theme.value === "light") {
  // If theme is light, then change the theme toggle button to dark
  changeTheme("light", "dark", "1.2");
} else {
  // If theme is dark, then change the theme toggle button to light
  changeTheme("dark", "light", "1");
}

function changeTheme(from, to, brightness) {
  document
    .getElementById("connect")
    .classList.replace("btn-outline-" + from, "btn-outline-" + to);
  document.getElementById('profile').style.filter = 'brightness(' + brightness + ')';
}


function toggleTheme() {
  // Toggle the theme
  console.log(themeToggle.getAttribute("aria-label"));
  if ("dark" === themeToggle.getAttribute("aria-label")) {
    themeToggle.setAttribute("aria-label", "light");
    changeTheme("light", "dark", "1.2");
  } else {
    themeToggle.setAttribute("aria-label", "dark");
    changeTheme("dark", "light", "1");
  }
}

themeToggle.addEventListener("click", toggleTheme);

const typed = new Typed("#typed", {
  strings: [
    "Full Stack Developer.",
    "Python Aficionado.",
    "Data Science Student.",
  ],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});

// Typewriter Effect Ends //


// Navbar Blur //

// Get the navbar element
const navbar = document.getElementById('navv');

// Function to check if the navbar is at the top of the page
function isNavbarAtTop() {
  return window.scrollY === 0;
}

// Function to toggle the class based on the navbar position
function toggleNavbarBackground() {
  if (isNavbarAtTop()) {
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.add('scrolled');
  }
}

// Listen for scroll events and toggle the navbar background class
window.addEventListener('scroll', toggleNavbarBackground);

// Navbar Blur Ends //



// Navbar Active Link //

// Get all the links in the navbar
const navLinks = document.querySelectorAll('.navbar-brand');
// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to the clicked link
    link.classList.add('active');
  });
});
// Navbar Active Link Ends //
themeToggle.getAttribute('aria-label') == 'dark' && changeTheme('dark', 'light', 1)
// console.log(getComputedStyle(document.querySelector('nav')).height);
// document.querySelector('.main').style.height = 'calc(100vh - ' + getComputedStyle(document.querySelector('nav')).height+')'

// Scroll event on window
// window.addEventListener('wheel', () => {
//   // Get the scroll position of the window
//   let scrollPosition = window.scrollY;
//   // Get scroll percentage
//   let scrollPercentage = (scrollPosition / window.innerHeight) * 100;
//   // Get the progress bar element

//   // Set the width of the progress bar based on the scroll percentage
//   progressBar.style.width = scrollPercentage + '%';
//   console.log(scrollPercentage);
// });

let progressBar = document.getElementById('cutter');

var MOUSE_OVER = false;
var body = document.querySelector('body');
var myDiv = document.getElementById('screen');

body.addEventListener('mousewheel', function (e) {
  if (MOUSE_OVER) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    return false;
  }
}, { passive: false });

myDiv.addEventListener('mouseenter', function () {
  MOUSE_OVER = true;
});

myDiv.addEventListener('mouseleave', function () {
  MOUSE_OVER = false;
});

myDiv.addEventListener('mousewheel', function (e) {
  var delta = e.wheelDelta;
  if (delta > 0) {
    // Scroll up
    console.log('Scroll up');
    let width = parseInt(getComputedStyle(progressBar).width.replace('px', '')) + 10;

    if (width > 100) {
      progressBar.style.width = '300%';
      console.log('Theme Toggle');
      onClick('light');
      document.querySelector('.skills').classList.remove('invisible')
    } else {
      progressBar.style.width = width + 'px';
    }
    console.log(parseFloat(getComputedStyle(progressBar).borderWidth) + 1);
    let borderWidth = parseFloat(getComputedStyle(progressBar).borderWidth.replace('px', '')) + 1;
    progressBar.style.borderWidth = borderWidth > 2 ? borderWidth + 'px' : '2px';
  } else {
    // Scroll down
    console.log('Scroll down');
    let width = parseInt(getComputedStyle(progressBar).width.replace('px', '')) - 10;
    progressBar.style.width = width < 0 ? '20px' : width + 'px';
    let borderWidth = parseFloat(getComputedStyle(progressBar).borderWidth.replace('px', '')) - 1;
    progressBar.style.borderWidth = borderWidth > 2 ? borderWidth + 'px' : '2px';


  }
});

