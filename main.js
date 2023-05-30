import store from "./store.js";

const form = document.forms.entrada;

form.addEventListener('submit', envia);

function envia(event){
    event.preventDefault();
    console.log("Form enviado");
    store.estado++
    atualiza();
}

atualiza();

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML=`<li> ${store.estado} </li>`;
}
