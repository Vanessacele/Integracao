
const pesca = "http://fishbase.ropensci.org/species/id"

export const createPeixe = async (peixe) => {
    fetch ( pesca, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(peixe),
    })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

export const deletePeixe = async (peixe) => {
    fetch(pesca + `/${peixe.id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

export const updatePeixe = async (peixe) => {
    fetch(pesca + `/${peixe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(peixe),
    })
      .then((response) => response.json())
      .then((data) => console.log("sucesso: ", data))
      .catch((error) => console.log("Erro: ", error));
  };