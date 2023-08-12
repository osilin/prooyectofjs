const listaDeProductos = []

function traerCarrito (){
    return JSON.parse(localStorage.getItem("CarritoDeProductos")) || []
}


const carritoDeProductos = traerCarrito()