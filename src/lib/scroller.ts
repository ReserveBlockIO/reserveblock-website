function getOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

export const scrollToElement = (id: string) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const position = getOffset(el);
      const offset = document.getElementById("tipContainer")?.clientHeight || 0;
      const total = position.top - offset - 32;

      console.log({ total });
      window.scrollTo(0, total);
    }
  }, 250);
};
