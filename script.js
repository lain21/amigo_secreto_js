let nombres = [];

document.getElementById("adicionar").addEventListener("click", function() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
});

function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
