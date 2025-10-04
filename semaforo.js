const btnRed = document.getElementById("btn-red");
const btnYellow = document.getElementById("btn-yellow");
const btnGreen = document.getElementById("btn-green");
const btnAuto = document.getElementById("btn-auto");
const imagem = document.getElementById("inimagem");

function vermelho() {
    inimage.src = "imagens/vermelho.png"
}

function amarelo() {
    inimage.src = "imagens/amarelo.png"
}

function verde() {
    inimage.src = "imagens/verde.png"
}

// function amarelo() {
//     inimage.src = "imagens/amarelo.png"
// }

btnRed.addEventListener("click", vermelho)
btnYellow.addEventListener("click", amarelo)
btnGreen.addEventListener("click", verde)
