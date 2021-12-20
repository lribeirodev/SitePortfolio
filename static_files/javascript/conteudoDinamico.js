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

function inserirConteudo(){

var conteudo = document.getElementsByClassName("conteudo")[0];

var xml = new XMLHttpRequest();
xml.onload = function(){

    items = xml.responseXML.getElementsByTagName("item");
    for(let i = 0 ; i < items.length ; i++){
        item = items[i];
        var div = document.createElement('div');
        var img = document.createElement('img');
        var ul = document.createElement('ul');
        var li_titulo = document.createElement('li');
        var li_descricao = document.createElement('li');
        var li_link = document.createElement('li');
        var a_link = document.createElement('a');
        var li_tecnologias = document.createElement('li');

        div.className = "conteudo_item";
        img.src = item.getElementsByTagName('imagem')[0].childNodes[0].nodeValue;
        li_titulo.innerText = item.getElementsByTagName('titulo')[0].childNodes[0].nodeValue;
        li_descricao.innerText = item.getElementsByTagName('descricao')[0].childNodes[0].nodeValue;
        a_link.href = item.getElementsByTagName('link')[0].childNodes[0].nodeValue;
        a_link.text = "Link do Projeto";
        li_link.appendChild(a_link);
        li_tecnologias.innerText = item.getElementsByTagName('tecnologias')[0].childNodes[0].nodeValue;

        if(item.getElementsByTagName('altura').length > 0 ){
            img.style.height = item.getElementsByTagName('altura')[0].childNodes[0].nodeValue;
        } else if(item.getElementsByTagName('largura').length > 0){
            img.style.width = item.getElementsByTagName('largura')[0].childNodes[0].nodeValue;
        }

        div.appendChild(img);
        ul.appendChild(li_titulo);
        ul.appendChild(li_descricao);
        ul.appendChild(li_tecnologias);
        ul.appendChild(li_link);
        div.appendChild(ul);

        conteudo.appendChild(div);
    }
}
xml.open("GET","static_files/xml/repo.xml",true);
xml.send();

}


inserirTecnologias();
inserirConteudo();