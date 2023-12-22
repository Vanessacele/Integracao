
import { createPeixe, deletePeixe, updatePeixe } from "./service.js";

document.getElementById('btnCreate').addEventListener('click', async () => {
    const peixe = {
        nome: "Robalo",
        tamanho: 30,
        tipo: "Carnívoro"
    };
    try {
        await createPeixe(peixe);
    } catch (error) {
        console.error("Erro ao criar peixe:", error);
    }
});

document.getElementById('btnDelete').addEventListener('click', async () => {
    const peixe = {
        nome: "Robalo",
        tamanho: 30,
        tipo: "Carnívoro",
        id: 1
    };
    try {
        await deletePeixe(peixe);
    } catch (error) {
        console.error("Erro ao excluir peixe:", error);
    }
});

document.getElementById('btnUpdate').addEventListener('click', async () => {
    const peixe = {
        id: 2,
        nome: "Dourado",
        tamanho: 35,
        tipo: "Herbívoro"
    };

    try {
        await updatePeixe(peixe);
    } catch (error) {
        console.error("Erro ao atualizar peixe:", error);
    }
});
