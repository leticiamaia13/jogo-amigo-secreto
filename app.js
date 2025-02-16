// Declara variáveis
let listaAmigos = [];
let input = document.getElementById("amigo");
let botaoAdicionar = document.querySelector(".button-add");
let botaoSortear = document.querySelector(".button-draw");
let botaoReiniciar = document.createElement("button");
let listaExibida = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

// Cria botão de reiniciar
botaoReiniciar.textContent = "Limpar Lista";
botaoReiniciar.classList.add("button-clear");
document.querySelector(".input-section").appendChild(botaoReiniciar);
botaoReiniciar.setAttribute("hidden", "hidden");

// Permite adicionar nomes pressionando Enter
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});

// Adiciona um nome à lista
function adicionarAmigo() {
    let nomeDoAmigo = input.value.trim();
    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    const nomeLower = nomeDoAmigo.toLowerCase();
    const nomeExiste = listaAmigos.some(n => n.toLowerCase() === nomeLower);
    if (nomeExiste) {
        alert("Este nome já foi adicionado! Se for outra pessoa, diferencie com uma inicial, por exemplo: Mario T.");
        return;
    }

    listaAmigos.push(nomeDoAmigo);
    atualizarLista();
    limparCampo();
    botaoReiniciar.removeAttribute("hidden");
}

// Atualiza a lista exibida
function atualizarLista() {
    limparLista();
    listaAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.innerText = nome;
        listaExibida.appendChild(li);
    });
}

// Sorteia um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.innerHTML = `<li>O seu amigo secreto é: <strong>${amigoSecreto}</strong></li>`;
}

// Limpa a lista e o resultado
function novoJogo() {
    listaAmigos = [];
    limparLista();
    resultado.innerHTML = "";
    limparCampo();
    botaoReiniciar.setAttribute("hidden", "hidden");
}

// Limpa o campo de entrada
function limparCampo() {
    input.value = "";
}

// Limpa a exibição da lista
function limparLista() {
    listaExibida.innerHTML = "";
}

// Adiciona eventos aos botões
botaoAdicionar.addEventListener("click", adicionarAmigo);
botaoSortear.addEventListener("click", sortearAmigo);
botaoReiniciar.addEventListener("click", novoJogo);
