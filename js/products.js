const listaDeProductos = [{ cod: 1, nombre: "Vela de soja -modelo pecera-", imagen: "images/velaDeSojaPecera.jpg", precio: 2500, categoria: "Decoración" },
{ cod: 2, nombre: "Vela de soja -modelo v. conico-", imagen: "images/velaSojaFloreroVidrioConico.png", precio: 9800, categoria: "Decoración" },
{ cod: 3, nombre: "Vela de soja -modelo vaso-", imagen: "images/velaVaso.jpeg", precio: 4600, categoria: "Decoración" },
{ cod: 4, nombre: "Sahumo -romero-", imagen: "images/sahumoSmadre.jpg", precio: 670, categoria: "Limpieza-aromaterapia" },
{ cod: 5, nombre: "Sahumerios -Sagrada Madre-", imagen: "images/sahumerioSmadreElementos.jpg", precio: 790, categoria: "Limpieza-aromaterapia" },
{ cod: 6, nombre: "Piedras para defumación", imagen: "images/defumacionSmadre.png", precio: 670, categoria: "Limpieza-aromaterapia" }]

function traerCarrito (){
    return JSON.parse(localStorage.getItem("CarritoDeProductos")) || []
}


const carritoDeProductos = traerCarrito()