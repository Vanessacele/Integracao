
import { handlError } from "./exception.js";

const pescasub = "https://fishbase.ropensci.org/";

export const pegarTodaInformacao = async () => {
    try {
        const response = await fetch(pescasub);
        handlError(response);
        return response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};

export const create = async (novoDado) => {
    try {
        const response = await fetch(pescasub, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoDado),
        });

        handlError(response);

        return response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};

export const update = async (id, dadosAtualizados) => {
    try {
        const response = await fetch(`${pescasub}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosAtualizados),
        });

        handlError(response);

        return response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};

export const deletar = async (id) => {
    try {
        const response = await fetch(`${pescasub}/${id}`, {
            method: 'DELETE',
        });

        handlError(response);

        return response.json(); 
    } catch (error) {
        console.log('Error >>>', error);
    }
};
