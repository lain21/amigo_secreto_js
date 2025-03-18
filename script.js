// Lista donde se guardarán los nombres
let nombres = [];

// Evento para agregar nombres a la lista
// Se activa cuando se presiona el botón "Adicionar"
document.getElementById("adicionar").addEventListener("click", function() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim(); // Eliminar espacios en blanco
    
    // Validación: No permitir nombres vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Validación: No permitir nombres duplicados
    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    // Agregar el nombre a la lista y actualizar la interfaz
    nombres.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
});

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
    // Recorrer la lista de nombres y agregarlos al HTML
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}