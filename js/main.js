// importar do arquivo "service.js" a funcao para pegar os dados 
import { getAllBlog } from "./service.js";

window.onload = ()=>{
    loadBlog();
};

const loadBlog = () => {
    getAllBlog().then(response =>{
        const pergunta = document.getElementById('pergunta');
        pergunta.innerText = response.pergunta;

        const dicas = document.getElementById('dicas');
        dicas.innerText = response.dicas;

        const equipamentos = document.getElementById('equipamentos');
        equipamentos.innerText = response.equipamentos;
        
        
        let ul = document.getElementById('lista-especies'); 
        response.especies_de_peixe.forEach(element => {
            let li = document.createElement('li');
            li.innerText= element;
            ul.appendChild(li);
        });
    });
}