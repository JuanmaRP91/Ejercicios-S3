const elements = document.querySelectorAll('.fn-insert-here'); // Obtengo todos los divs con la clase .fn-insert-here
elements.forEach((element) => {// Itero sobre cada uno de ellos
  
  const p = document.createElement('p');// Creo un nuevo elemento p con el texto "Voy dentro!"
  const text = document.createTextNode('Voy dentro!');
  p.appendChild(text);

  
  element.insertBefore(p, element.firstChild);// Inserto el elemento p al principio del div
});
