const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const div = document.createElement('div');// Creo un div y establezco su contenido como una lista ul > li con los textos de apps
div.innerHTML = `<ul>
                    <li>${apps.join('</li><li>')}</li>
                  </ul>`;


document.body.appendChild(div);// Agrego el div al documento HTML