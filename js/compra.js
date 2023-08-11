const tabla = document.querySelector("tbody")
const botonComprar = document.querySelector("button#botonComprar")

function agruparCarrito(prod) {
    return `<tr>
                <th scope="row">${prod.cod}</th>
                <td>${prod.nombre}</td>
                <td>$ ${prod.precio.toLocaleString()}</td>
                <td>❌</td>
            </tr>`
}

function mostrarCarVacio() {
    return `<div class="row align-center">
                <div class="col-lg-12 col-12 text-center">
                    <h2>CARRITO VACIO</h2>
                    <h3>🛒</h3>
                </div>
            </div>`

}

function armarCarrito() {
    tabla.innerHTML = ""
    if (carritoDeProductos.length > 0) {
        carritoDeProductos.forEach((prod) => {
            tabla.innerHTML += agruparCarrito(prod)
        })
    } else {
        tabla.innerHTML = mostrarCarVacio()
    }
}

armarCarrito()

botonComprar.addEventListener("click", () => {
    Swal.fire({
        title: '¿Confirmar productos?',
        icon: "question",
        showDenyButton: true,
        confirmButtonText: 'CONFIRMAR',
        denyButtonText: "CANCELAR"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("CarritoDeProductos")
            carritoDeProductos.length = 0
            Swal.fire("Muchas gracias por su compra", "", "success")
            tabla.innerHTML = mostrarCarVacio()
        }
    })
})