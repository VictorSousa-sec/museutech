function Procurar() {
    const texto = document.querySelector("header input").value.toLowerCase();

    // lista das marcas válidas
    const marcas = ["apple", "samsung"];

    if (marcas.includes(texto)) {
        document.getElementById(texto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        alert("Marca não encontrada.");
    }
}

// Preenche o datalist automaticamente
function carregarSugestoes() {
    const cards = document.querySelectorAll(".card h2"); // pega todos os <h2>
    const datalist = document.getElementById("marcas");

    datalist.innerHTML = ""; // limpa antes de preencher

    cards.forEach(card => {
        const nome = card.textContent.trim();
        const option = document.createElement("option");
        option.value = nome;
        datalist.appendChild(option);
    });
}

function Procurar() {
    const texto = document.querySelector("#campo-busca").value.toLowerCase();

    // pega todos os articles (cards)
    const cards = document.querySelectorAll("article.card");

    let encontrado = false;

    cards.forEach(card => {
        const nome = card.querySelector("h2").textContent.toLowerCase();

        if (nome.includes(texto)) {
            card.scrollIntoView({ behavior: "smooth", block: "start" });
            encontrado = true;
        }
    });

    if (!encontrado) {
        alert("Marca não encontrada.");
    }
}

// Chama ao iniciar a página
window.onload = carregarSugestoes;

function search() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const target = document.getElementById(searchValue);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Nada encontrado!");
    }
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
    }
});

