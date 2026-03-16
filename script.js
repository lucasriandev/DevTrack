const form = document.querySelector("#form-vaga");
const inputEmpresa = document.querySelector("#input-empresa");
const inputCargo = document.querySelector("#input-cargo");

const areaAplicar = document.querySelector("#coluna-aplicar .area-cards");
const colunas = document.querySelectorAll(".coluna");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const empresa = inputEmpresa.value;
  const cargo = inputCargo.value;

  if (empresa === "" || cargo === "") {
    return;
  }
  criarCard(empresa, cargo);

  inputCargo.value = "";
  inputEmpresa.value = "";
});

function criarCard(empresa, cargo) {
  const novaDiv = document.createElement("div");
  novaDiv.setAttribute("draggable", "true");
  novaDiv.classList.add("card");

  novaDiv.innerHTML = `
    <h3>${empresa}</h3>
    <p>${cargo}</p>
    `;

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "❌";
  btnDelete.classList.add("btn-del");

  btnDelete.addEventListener("click", () => {
    novaDiv.remove();
  });

  novaDiv.appendChild(btnDelete);
  areaAplicar.appendChild(novaDiv);

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
  });
});
