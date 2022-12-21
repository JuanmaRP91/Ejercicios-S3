var div = document.createElement("div"); //creo el div
var p = document.createElement("p");// Creo el p
p.innerHTML = "Este es el contenido de p";// creo el contenido de p
div.appendChild(p);// Inserto p dentro div
document.body.appendChild(div);// Inserto div en el documento HTML