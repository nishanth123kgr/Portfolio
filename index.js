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
          speed: 2,
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
      .classList.replace("btn-outline-"+from, "btn-outline-"+to);
    document.getElementById('profile').style.filter = 'brightness('+brightness+')';
}


function toggleTheme() {
  // Toggle the theme
  if ("dark" === themeToggle.getAttribute("aria-label")) {
    themeToggle.setAttribute("aria-label", "light");
    document.documentElement.style.setProperty("--primary_bg", "#fff");
    document.documentElement.style.setProperty("--primary_text", "#000");
    changeTheme("light", "dark", "1.2");
  } else {
    themeToggle.setAttribute("aria-label", "dark");
    document.documentElement.style.setProperty("--primary_bg", "#202124");
    document.documentElement.style.setProperty("--primary_text", "#fff");
    changeTheme("dark", "light", "1");
  }
}

themeToggle.addEventListener("click", toggleTheme);

// Theme Toggle Functionality Ends //

// Typewriter Effect //

const typed = new Typed("#typed", {
  strings: [
    "Web Developer.",
    "Python Expert.",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Typewriter Effect Ends //
