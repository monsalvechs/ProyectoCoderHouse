/*class Producto {
    constructor(nombre, descripcion, precio ) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}

let productos = []

if (localStorage.getItem("productos")){
productos = JSON.parse(localStorage.getItem("productos"))
}else{
    localStorage.setItem("productos", JSON.stringify(productos))
}*/


const contenedorProductos = document.getElementById("contendor-productos");
let carrito = []

stock.forEach((producto) => {
    const div = document.createElement("div")
    
    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                      <img src=${producto.img} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <button id="agregar${producto.id}" href="#" class="btn btn-primary">$${producto.precio}</button>
                      </div>
`

    contenedorProductos.appendChild(div)

const boton = document.getElementById("agregar${producto.id}")

boton.addEventListener('click', () => {
    agregarCarrito(producto.id)
})


})

const agregarCarrito = (prodId) => {
    const item = stock.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log (carrito)
}