export function preserveScrollPosition(page: HTMLElement) {
  const scrollY = window.scrollY;
  page.style.maxHeight = "100vh";
  page.style.overflow = "hidden";
  page.scrollTop = scrollY;
}
