const listaDeProductos = []

function traerCarrito() {
    return JSON.parse(localStorage.getItem("CarritoDeProductos")) || []
}

function guardarEnCarrito() {
    localStorage.setItem("CarritoDeProductos", JSON.stringify(carritoDeProductos))
}

const carritoDeProductos = traerCarrito()