

import { pegarTodaInformacao, create, update, deletar } from "./service.js";

const carregarData = async () => {
    try {
        const informacao = await pegarTodaInformacao();
        
    } catch (error) {
        console.log('Error ao carregar dados >>>', error);
    }
};

document.addEventListener('DOMContentLoaded', carregarData);

document.getElementById('btnCreate')
    .addEventListener('click', async () => {
        const novoDado = {
            
        };
        try {
            const resultado = await create(novoDado);
            console.log('Dado criado com sucesso:', resultado);
        } catch (error) {
            console.log('Erro ao criar dado >>>', error);
        }
    });

document.getElementById('btnDelete')
    .addEventListener('click', async () => {
        const idParaDeletar = "ID_DO_ITEM_A_SER_DELETADO";
        try {
            const resultado = await deletar(idParaDeletar);
            console.log('Dado deletado com sucesso:', resultado);
        } catch (error) {
            console.log('Erro ao deletar dado >>>', error);
        }
    });

document.getElementById('btnUpdate')
    .addEventListener('click', async () => {
        const idParaAtualizar = "ID_DO_ITEM_A_SER_ATUALIZADO";
        const dadosAtualizados = {
           
        };
        try {
            const resultado = await update(idParaAtualizar, dadosAtualizados);
            console.log('Dado atualizado com sucesso:', resultado);
        } catch (error) {
            console.log('Erro ao atualizar dado >>>', error);
        }
    });
