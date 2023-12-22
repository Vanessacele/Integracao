const pesca = "http://fishbase.ropensci.org/species/id";

export const createPeixe = async (peixe) => {
    try {
        const response = await fetch(pesca, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(peixe),
        });
        const data = await response.json();
        console.log("sucesso:", data);
    } catch (error) {
        console.log("Erro:", error);
    }
};

export const deletePeixe = async (peixe) => {
    try {
        const response = await fetch(`${pesca}/${peixe.id}`, { method: "DELETE" });
        const data = await response.json();
        console.log("sucesso:", data);
    } catch (error) {
        console.log("Erro:", error);
    }
};

export const updatePeixe = async (peixe) => {
    try {
        const response = await fetch(`${pesca}/${peixe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(peixe),
        });
        const data = await response.json();
        console.log("sucesso:", data);
    } catch (error) {
        console.log("Erro:", error);
    }
};
