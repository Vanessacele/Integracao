// atualiza a importação
import { pegarTodaInformacao, createPeixe, deletePeixe, UpdatePeixe } from "./service.js";

//adiciona as execuções das funções criadas no service !!Lembra de criar botões com as ids: btnCreate,  btnDelete e  btnUpdate
document.getElementById('btnCreate').addEventListener('click', () => {
  const peixe = {
    //informações do peixe
  }
  createPeixe(peixe)
});

document.getElementById('btnDelete').addEventListener('click', () => {
  const peixe = {
    // as mesmas informações do que foi criado
 }
 deletePeixe(Peixe)
});

document.getElementById('btnUpdate').addEventListener('click', () => {
  const peixe = {
    //novas informações para o peixe criado em createPeixe pode ser apenas substituição das informações usadas no createPeixe
  }
  updatePeixe(peixe);
});