const form = document.querySelector("#form-vaga");
const inputEmpresa = document.querySelector("#input-empresa");
const inputCargo = document.querySelector("#input-cargo");

const colunas = document.querySelectorAll(".coluna");

let arrasteAtual = JSON.parse(localStorage.getItem("Atual")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const empresa = inputEmpresa.value;
  const cargo = inputCargo.value;

  if (empresa === "" || cargo === "") {
    return;
  }

  const novaVaga = {
    id: Date.now(),
    empresa: empresa,
    cargo: cargo,
    status: "coluna-aplicar",
  };

  arrasteAtual.push(novaVaga);
  localStorage.setItem("Atual", JSON.stringify(arrasteAtual));

  criarCard(novaVaga);

  inputCargo.value = "";
  inputEmpresa.value = "";
});

function criarCard(vaga) {
  const novaDiv = document.createElement("div");
  novaDiv.setAttribute("draggable", "true");
  novaDiv.classList.add("card");

  // Carimbamos o ID no HTML para acharmos ele depois na hora de arrastar
  novaDiv.dataset.id = vaga.id;

  novaDiv.innerHTML = `
    <h3>${vaga.empresa}</h3>
    <p>${vaga.cargo}</p>
  `;

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "❌";
  btnDelete.classList.add("btn-del");

  btnDelete.addEventListener("click", () => {
    novaDiv.remove();

    arrasteAtual = arrasteAtual.filter((item) => item.id !== vaga.id);

    localStorage.setItem("Atual", JSON.stringify(arrasteAtual));
  });

  novaDiv.appendChild(btnDelete);

  const colunaCerta = document.querySelector(`#${vaga.status} .area-cards`);
  colunaCerta.appendChild(novaDiv);

  aplicarEventosDeArraste(novaDiv);
}

function aplicarEventosDeArraste(cardRecebido) {
  cardRecebido.addEventListener("dragstart", () => {
    cardRecebido.classList.add("arrastando");
  });

  cardRecebido.addEventListener("dragend", () => {
    cardRecebido.classList.remove("arrastando");
  });
}

colunas.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    item.classList.add("hover-ativo");
  });

  item.addEventListener("dragleave", () => {
    item.classList.remove("hover-ativo");
  });

  item.addEventListener("drop", () => {
    item.classList.remove("hover-ativo");

    const cardArrastado = document.querySelector(".arrastando");

    item.querySelector(".area-cards").appendChild(cardArrastado);

    const idDoCard = Number(cardArrastado.dataset.id);
    const novoStatus = item.id;

    const vagaMovida = arrasteAtual.find((vaga) => vaga.id === idDoCard);

    if (vagaMovida) {
      vagaMovida.status = novoStatus;
      localStorage.setItem("Atual", JSON.stringify(arrasteAtual));
    }
  });
});

arrasteAtual.forEach((item) => {
  criarCard(item);
});
