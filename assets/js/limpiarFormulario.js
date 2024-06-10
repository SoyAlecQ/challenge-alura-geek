const limpiar = document.querySelector("[data-form-limpiar]");

/* Evento para limpiar el formulario */

limpiar.addEventListener("click", () => {
    const nombre = document.querySelector("[data-form-nombre]");
    const precio = document.querySelector("[data-form-precio]");
    const imagen = document.querySelector("[data-form-imagen]");
    let mensaje = document.querySelector(".mensaje__error");

    nombre.value = "";
    precio.value = "";
    imagen.value = "";
    mensaje.textContent = "";
})