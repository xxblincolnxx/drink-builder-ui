export default function setTheme(theme: string) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}
