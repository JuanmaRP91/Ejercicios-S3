const h2 = document.querySelector('.fn-insert-here');
const textNode = document.createTextNode('Wubba Lubba dub dub');

h2.insertBefore(textNode, h2.childNodes[0]);