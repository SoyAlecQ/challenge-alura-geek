import { conexionAPI } from "./conexionAPI.js";
import { eliminarProducto } from "./eliminarProducto.js";

const lista = document.querySelector("[data-productos]");

/* Función para crear una tarjeta de los productos */

export function crearCard(id, nombre, precio, imagen) {
    const card = document.createElement("div");
    card.className = "productos__tarjeta";
    card.innerHTML = `
        <div class="productos__tarjeta__top">
            <li class="productos__tarjeta__img"><img src="${imagen}" /></li>
            <li class="productos__tarjeta__nombre">${nombre}</li>
        </div>
        <div class="productos__tarjeta__bottom">
            <li class="productos__tarjeta__precio">$${precio}</li>
            <li><button class="productos__tarjeta__eliminar" id="${id}" data-eliminar-producto><i
                        class="bi bi-trash-fill"></i></button></li>
        </div>
    `;

    return card;
}

/* Función para mostrar todos los productos */

export async function mostrarProductos() {
    try {
        const listaAPI = await conexionAPI.listarProductos();
        lista.innerHTML = "";

        if (listaAPI.length === 0) {
            lista.innerHTML = `<h2 class="productos__vacio">No se han agregado productos...</h2>`;
        } else {
            listaAPI.forEach(producto => {
                const card = crearCard(producto.id, producto.nombre, producto.precio, producto.imagen);
                lista.appendChild(card);

                const botonEliminar = card.querySelector("[data-eliminar-producto]");
                botonEliminar.addEventListener("click", () => eliminarProducto(producto.id));
            });
        }
    } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
        lista.innerHTML = `<h2 class="productos__vacio">No se han agregado productos...</h2>`;
    }
}

mostrarProductos();