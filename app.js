function agregarTarea() {
    const tareaInput = document.getElementById("nueva-tarea");
    const listaTareas = document.getElementById("lista-tareas");

    if (tareaInput.value.trim() === "") {
        alert("Por favor, escribe una tarea");
        return;
    }

    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tarea");
    nuevaTarea.innerHTML = `
        <span>${tareaInput.value}</span>
        <button onclick="eliminarTarea(this)">Eliminar</button>
    `;

    listaTareas.appendChild(nuevaTarea);
    tareaInput.value = "";
}

function eliminarTarea(boton) {
    const tarea = boton.parentElement;
    tarea.remove();
}
