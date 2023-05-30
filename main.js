const form = document.forms.entrada;

form.addEventListener('submit', envia);

function envia(event){
    event.preventDefault();
    console.log("Form enviado");
    estado++
    atualiza();
}

let estado=0;

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML=`<li> ${estado} </li>`;
}
