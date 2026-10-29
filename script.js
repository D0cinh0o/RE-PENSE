
const botaoAbrirMateriais =
  document.getElementById("abrir-materiais");

const fundoMateriais =
  document.getElementById("fundo-materiais");

const botaoFecharMateriais =
  document.getElementById("fechar-materiais");

// Abre o painel
botaoAbrirMateriais.addEventListener("click", function() {
  fundoMateriais.hidden = false;
});

// Fecha pelo botão X
botaoFecharMateriais.addEventListener("click", function() {
  fundoMateriais.hidden = true;
});

// Fecha ao clicar fora da janela
fundoMateriais.addEventListener("click", function(evento) {
  if (evento.target === fundoMateriais) {
    fundoMateriais.hidden = true;
  }
});

// Fecha ao apertar Esc
document.addEventListener("keydown", function(evento) {
  if (evento.key === "Escape") {
    fundoMateriais.hidden = true;
  }
});

const botaoAbrir = document.getElementById("abrir-redes");
const fundoPainel = document.getElementById("fundo-painel");
const botaoFechar = document.getElementById("fechar-redes");

botaoAbrir.addEventListener("click", function() {
    fundoPainel.hidden = false;
});

botaoFechar.addEventListener("click", function() {
    fundoPainel.hidden = true;
});

fundoPainel.addEventListener("click", function(evento) {
    if (evento.target === fundoPainel) {
        fundoPainel.hidden = true;
    }
});

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape") {
        fundoPainel.hidden = true;
    }
});
