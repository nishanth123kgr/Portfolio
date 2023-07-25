const storageKey = "theme-preference";

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
};

const getColorPreference = () => {
  return localStorage.getItem(storageKey) || "dark";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);
  document.querySelector("#theme-toggle")?.setAttribute("aria-label", theme.value);
};

const theme = {
  value: localStorage.getItem(storageKey) || "dark",
};

reflectPreference();

window.onload = () => {
  reflectPreference();
  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

// Remove the event listener for system theme change
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: e }) => {
//   (theme.value = e ? "dark" : "light"), setPreference();
// });

let particles_color;
if(theme.value==='dark'){
    document.documentElement.style.setProperty("--primary_bg", "#202124");
    document.documentElement.style.setProperty("--primary_text", "#fff");
    particles_color = '#ffffff';
}
else{
    document.documentElement.style.setProperty("--primary_bg", "#fff");
    document.documentElement.style.setProperty("--primary_text", "#000");
    particles_color = '#202124';
}
