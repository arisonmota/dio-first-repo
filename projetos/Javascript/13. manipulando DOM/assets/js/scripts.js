
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");
const title = document.getElementById("page-title");

const botao = document.getElementById("mode-selector");
botao.addEventListener("click", alteraModo);

function alteraModo() {
    body[0].classList.toggle("dark-mode");
    footer[0].classList.toggle("dark-mode");
    botao.classList.toggle("dark-mode");

    if(botao.innerHTML == "Dark Mode") {
        botao.innerHTML = "Light Mode";
        title.innerHTML = "Dark Mode ON"
    }
    else {
        botao.innerHTML = "Dark Mode";
        title.innerHTML = "Light Mode ON"
    }
}