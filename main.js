import {adicionar, getItens, popItens} from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);

form.remover.addEventListener('click',remove);


atualiza();

function envia(event){
    event.preventDefault();
    console.log("Form enviado");
    const n=form.valor.value;
    adicionar(n);
    form.valor.value="";
    form.valor.focus();
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML="";
    const itens=getItens();
    for(let i = 0 ;i<itens.length;i++){
        const li = document.createElement('li');
        li.textContent=itens[i];
        ol.appendChild(li);
        
    }
}

function remove(){
    popItens();
    atualiza();
    
}
