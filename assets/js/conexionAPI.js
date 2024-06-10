/* Función para Conexión a la API */

async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3000/productos");

        if (!conexion.ok) {
            throw new Error("No se pudo obtener la lista de productos");
        }

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error en la solicitud de listado de productos:", error);
        throw error;
    }
}

/* Función para Agregar Producto */

async function agregarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al agregar el producto");
    };

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

/* Función para Eliminar Producto */

async function eliminarProducto(idProducto) {
    try {
        const conexion = await fetch(`http://localhost:3000/productos/${idProducto}`, {
            method: "DELETE",
            // headers: { "Content-type": "application/json" }
        });

        if (!conexion.ok) {
            throw new Error("No se pudo eliminar el producto. Intente nuevamente.");
        }

        return await conexion.json();
    } catch (error) {
        console.error("Error en la solicitud de eliminación:", error);
        throw error;
    }
}

/* Exportar Funciones */

export const conexionAPI = {
    listarProductos, agregarProducto, eliminarProducto
}