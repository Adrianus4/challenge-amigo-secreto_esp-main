// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre ingresado por el usuario
    const amigoInput = document.getElementById("amigo");
    const amigoNombre = amigoInput.value.trim();  // Eliminar espacios al inicio y final
    
    // Validar que el campo no esté vacío
    if (amigoNombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;  // Salir de la función si el nombre está vacío
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(amigoNombre);
    
    // Limpiar el campo de texto
    amigoInput.value = "";

    // Actualizar la lista visible de amigos
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento de la lista en el DOM
    const listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de agregar los nuevos elementos
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista en HTML
    amigos.forEach(amigo => {
        const li = document.createElement("li");  // Crear un nuevo elemento de lista
        li.textContent = amigo;  // Asignar el nombre del amigo como contenido del elemento
        listaAmigos.appendChild(li);  // Añadir el elemento a la lista
    });
}

// Función para sortear un amigo secreto de manera aleatoria
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Por favor, ingrese al menos un amigo antes de sortear.");
        return;  // Salir de la función si no hay amigos en la lista
    }

    // Seleccionar un amigo de manera aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el amigo secreto en el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}
