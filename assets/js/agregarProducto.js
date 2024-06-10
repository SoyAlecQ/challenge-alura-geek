import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

/* Función para Agregar un Producto */

async function agregarProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-form-nombre]").value;
    const precio = document.querySelector("[data-form-precio]").value;
    const imagen = document.querySelector("[data-form-imagen]").value;

    try {
        await conexionAPI.agregarProducto(nombre, precio, imagen);
    } catch (error) {
        alert("Error al agregar el producto: " + error.message);
    }

    window.location.reload();
}

formulario.addEventListener("submit", evento => agregarProducto(evento));