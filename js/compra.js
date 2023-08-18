const tabla = document.querySelector("tbody")
const botonComprar = document.querySelector("button#botonComprar")


function agruparCarrito(prod) {
    return `<tr>
                <th>${prod.cod}</th>
                <td>${prod.nombre}</td>
                <td>$ ${prod.precio.toLocaleString()}</td>
                <td id="${prod.cod}" class="btonX">❌</td>
            </tr>`
}


function agregarBotonQuitar() {
    const crucesQuitar = document.querySelectorAll("td.btonX")
    crucesQuitar.forEach((quitarCruz) => {
        quitarCruz.addEventListener("click", () => {
            let cod = parseInt(quitarCruz.id)
            let index = carritoDeProductos.findIndex((prod) => prod.cod === cod)
            carritoDeProductos.splice(index, 1)
            guardarEnCarrito()
            armarCarrito()
            
        })
    })
}

function calcularTotalCarrito() {
    let total = 0
    for (const prod of carritoDeProductos) {
        total += prod.precio
    }
    return total
}

function armarCarrito() {
    tabla.innerHTML = ""
    if (carritoDeProductos.length > 0) {
        carritoDeProductos.forEach((prod) => {
            tabla.innerHTML += agruparCarrito(prod)
        })
        tabla.innerHTML += `<tr>
            <th colspan="3" class="text-end">Total:</th>
            <td>$ ${calcularTotalCarrito().toLocaleString()}</td>
        </tr>`

        agregarBotonQuitar()
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
            tabla.innerHTML = ""
        }
    })
})