var div = document.createElement("div"); 

for (var i = 0; i < 6; i++) {
  var p = document.createElement("p");
  p.innerHTML = "Parrafo " + (i +1);
  div.appendChild(p);
}
document.body.appendChild(div);