export default function addProps(htmlEl, classes = [], attr = {}) {
  if (classes.length) {
    if (typeof classes === 'string') htmlEl.classList.add(classes);
    else htmlEl.classList.add(...classes);
  }
  Object.entries(attr).forEach(([key, value]) => {
    htmlEl.setAttribute(key, value);
  });

  return htmlEl;
}
