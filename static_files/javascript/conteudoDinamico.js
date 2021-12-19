// Conteúdo Dinamico

function inserirTecnologias(){
// Tecnologia Utilizadas
var tech_imgs = ["https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg","https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"];

var tecnologias = document.getElementsByClassName('tecnologias')[0];

for(let i = 0 ; i < tech_imgs.length ; i++){
    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = tech_imgs[i];
    div.appendChild(img);

    tecnologias.appendChild(div);
    
    div = null; img = null;
}

}

inserirTecnologias();