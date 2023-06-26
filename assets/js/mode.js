const storageKey = "theme-preference",
  onClick = () => {
    (theme.value = "light" === theme.value ? "dark" : "light"), setPreference();
  },
  getColorPreference = () =>
    localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  setPreference = () => {
    localStorage.setItem(storageKey, theme.value), reflectPreference();
  },
  reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value),
      document
        .querySelector("#theme-toggle")
        ?.setAttribute("aria-label", theme.value);
  },
  theme = {
    value: localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  };
reflectPreference(),
  (window.onload = () => {
    reflectPreference(),
      document
        .querySelector("#theme-toggle")
        .addEventListener("click", onClick);
  }),
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: e }) => {
      (theme.value = e ? "dark" : "light"), setPreference();
    });

if(theme.value==='dark'){
    document.documentElement.style.setProperty("--primary_bg", "#000");
    document.documentElement.style.setProperty("--primary_text", "#fff");
}
else{
    document.documentElement.style.setProperty("--primary_bg", "#fff");
    document.documentElement.style.setProperty("--primary_text", "#000");
}
