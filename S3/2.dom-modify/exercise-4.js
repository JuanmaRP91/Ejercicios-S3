var newDiv = document.createElement('div');
var newP = document.createElement('p');// Creo un nuevo elemento p y le digo contenido utilizando createTextNode
var newText = document.createTextNode('Soy dinámico!');
newP.appendChild(newText); //inserto el text dentro de p
newDiv.appendChild(newP);// Inserto el  p dentro de div
document.body.appendChild(newDiv);// Inserto el div en documento