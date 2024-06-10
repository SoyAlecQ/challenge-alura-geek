import { conexionAPI } from "./conexionAPI.js";
import { mostrarProductos } from "./mostrarProductos.js";

async function eliminarProducto(idProducto) {
    const confirmacionUsuario = confirm("¿Desea eliminar este producto?");

    if (!confirmacionUsuario) {
        return;
    }

    try {
        await conexionAPI.eliminarProducto(idProducto);
        alert("Producto eliminado correctamente.");

        await mostrarProductos();
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        alert("Hubo un problema al eliminar el producto. Por favor, inténtelo de nuevo.");
    }
}

export { eliminarProducto }