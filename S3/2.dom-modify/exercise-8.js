const textNode = document.createTextNode('Voy en medio!');// Creo un nodo de texto con el texto
const p = document.createElement('p');// Creo un elemento p
p.appendChild(textNode);// Añado el nodo de texto al elemento p
const div1 = document.querySelector('div:nth-of-type(1)');// le doy una referencia a los dos div del documento
const div2 = document.querySelector('div:nth-of-type(2)');
div1.parentNode.insertBefore(p, div2);// Inserto  p antes del segundo div