const removeMeElements = document.querySelectorAll('p.fn-remove-me');
const body = document.querySelector('body');

for (const p of removeMeElements) {
  body.removeChild(p);
}