var desligado = window.document.getElementById("desligada");

function estaquebrada() {
  return desligado.src.indexOf("quebrada") > -1;
}

function acender() {
  if (!estaquebrada()) {
    desligado.src = "imagens/ligada.svg";
  }
}

function desligar() {
  if (!estaquebrada()) {
    desligado.src = "imagens/desligada.svg";
  }
}

desligado.addEventListener("click", quebrada);
function quebrada() {
  desligado.src = "imagens/quebrada.svg";
}
