function particles_init(particles_color='#A020F0') {
  particlesJS(
    "particles-js",

    {
      particles: {
        number: {
          value: 40,
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
            color: "#ffffff",
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
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#A020F0",
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
        detect_on: "NULL",
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
            particles_nb: 4,
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
console.log(theme.value);
if(theme.value==='light')
particles_init();
else
particles_init('#ffffff');

const themeToggle = document.querySelector("#theme-toggle");
const html = document.getElementsByTagName("html")[0];
function toggleTheme() {
  if ("dark" === themeToggle.getAttribute("aria-label")) {
    themeToggle.setAttribute("aria-label", "light");
    document.documentElement.style.setProperty("--primary_bg", "#fff");
    document.documentElement.style.setProperty("--primary_text", "#000");
    document
      .getElementById("connect")
      .classList.replace("btn-outline-light", "btn-outline-dark");
    particles_init("#A020F0");
  } else {
    themeToggle.setAttribute("aria-label", "dark");
    document.documentElement.style.setProperty("--primary_bg", "#202124");
    document.documentElement.style.setProperty("--primary_text", "#fff");
    document
      .getElementById("connect")
      .classList.replace("btn-outline-dark", "btn-outline-light");
    particles_init("#ffffff");
  }

  setTimeout(() => {
    html.classList.remove("flash-effect");
  }, 1000);
}

themeToggle.addEventListener("click", toggleTheme);
