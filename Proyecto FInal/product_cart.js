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
const botonToast = document.getElementsByClassName("botonToast")
//for each de cada poducto pra mostrar en el las card 
stock.forEach((producto) => {
    const div = document.createElement("div")
    
    div.innerHTML = `
    
    <div class="card" style="width: 18rem;">
                      <img src=${producto.img} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <button id="agregar${producto.id}" href="#" class="btn btn-primary botonToast">$${producto.precio}</button>
                      </div>
                      
`

    contenedorProductos.appendChild(div)
    const boton = document.getElementById("agregar" + producto.id)
    
    
    boton.addEventListener('click', () => {
        agregarCarrito(producto.id)
    })
    
    
    
})

const botonAlerta = document.getElementById("carrito")

//mostrar carrito usa la libreria de swetalert2 
function mostrarCarrito (){
    Swal.fire({
        title: 'Carrito',
        showDenyButton: true,
        
        showCancelButton: true,
        html: '<p>Productos Carrito',
        confirmButtonText: 'Finalizar compra',
        denyButtonText: `Cancelar Compra`,
        cancelButtonText: 'Seguir comprando'
    }).then((result) => {
        
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}
//boton onclick del carito
botonAlerta.addEventListener('click', () => {
    
  mostrarCarrito();

})
//toastify
for(let i = 0; i < botonToast.length; i++){
    botonToast[i].addEventListener('click', (producto) => {
        Toastify({
            text: "se agrego al carrito",
            duration: 3000,
            
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
             
              background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);to right, #00b09b, #96c93d)",
            },
            onClick: function(){
                mostrarCarrito();
            } // Callback after click
          }).showToast();
    })
}

const agregarCarrito = (prodId) => {
    const item = stock.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}