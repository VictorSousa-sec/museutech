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
