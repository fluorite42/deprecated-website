const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
