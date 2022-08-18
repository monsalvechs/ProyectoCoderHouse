//////////////////////////////////////ASPECTOS A MEJORAR////////////////////////////////

/*//////Primero trata de hacer que te pida elegir si el cliente quiere comprar otra burger a pesar 
de que elija la hamburguesa default, porque sino le deja la opcion al usuario que cuando compra la comun,
solo permite una por orden.

////////Si te dice NaN es que no es un numero, asi que tendrias que ver si queres de declarar la 
variable como default en el valor usando algo como (division = 1) entonces manipularias esa 
variable dependiendo lo que vos uses.

////arreglar  el promt de "cantidad de hamburguesas" que solo admita numeros y mayores a 0, tira un NaN
*/
////////////////////////////////////////////////////////////////////////////////////////////////////

let entrada = ""; //variable que guarda el string de la respuesta para inciar el programa
let hamburguesa = "";//varibale que guarda la respuesta en la linea 35 
let relleno = [];//
let costoBase = 90;//costo base de cualquier objeto hamburgesa.
let respuesta;
let crear;
let finalizar = "";


const botonDarkMode = document.getElementById('botonDarkMode')
const botonLightMode = document.getElementById('botonLightMode')

let mode;
if(localStorage.getItem('darkMode')){
    mode = localStorage.getItem('darkMode')
}else {
    localStorage.setItem('darkMode', 'light')
}

if(mode == 'dark'){
    document.body.classList.add('darkMode')
}

//boton dark
botonDarkMode.addEventListener('click', () =>{
document.body.classList.add('darkMode')
localStorage.setItem('darkMode', 'dark')
})

//boton light
botonLightMode.addEventListener('click', () =>{

    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
})
console.log(mode)

entrada = prompt("Hola! deseas seleccionar los ingredientes de tu Hamburgesa? responde si/no").toLowerCase()



if (entrada === "no") {
    //Funcion que permite seleccionar "automaticamente" la hamburguesa al usuario.
    function getDataBurger() {
        //bucle do while 
        do {
            hamburguesa = prompt("Pedí tu hamburguesa de Carne, Pollo o Cerdo").toLowerCase()
            //condicional if para saber que dato ingresa el usuario
            if (hamburguesa === "carne" || hamburguesa === "pollo" || hamburguesa === "cerdo") {

                let conTodo = prompt("¿Con todo?").toLowerCase()

                //if anidado para saber si quiere relleno

                if (conTodo === "si") {
                    relleno = `${hamburguesa}, lechuga, tomate, queso, cebolla, pepinillos`;
                    console.log(`Hamburguesa de ${relleno}: ${costoBase}$ pesos`)


                } else if (conTodo === "no") {
                    alert(`Hamburguesa de ${hamburguesa}, $ ${costoBase} pesos`)
                    break;
                } else {
                    alert("ingresa sí o no")
                    continue;
                }
                break;

            } else if (hamburguesa != "carne" || hamburguesa != "pollo" || hamburguesa != "cerdo") {
                alert(`La ${hamburguesa} no esta en el menú`);
                
            }

        } while (hamburguesa == undefined || hamburguesa != "string")
        
        return alert("Compraste una burger")
    }
    getDataBurger();


} else {
    //funcion para seleccionar "manualmente" los ingredientes de una hamburguesa
    const burger = []//array en donde se guardan los objetos Hamburguesa
    function crearBurger() {
        
        alert("Responde si o no")//alert que le indica al user que respuesta dar

        //si la respuesta fue sí, se crea un objeto
        class Hamburguesa {
            constructor(tipo, Lechuga, Tomate, Cebolla, Queso, cantidad) {
                this.tipo = tipo;
                this.Lechuga = Lechuga
                this.Tomate = Tomate
                this.Cebolla = Cebolla
                this.Queso = Queso
                this.cantidad = cantidad
                this.costoBase = costoBase
            }
            /* mostrarInfo() {
                return `${this.tipo} ${this.Lechuga} ${this.Tomate}${this.Cebolla}${this.Queso}${this.cantidad} $${this.costoBase}`;
            }
            /obtenerPrecio(emoji) {
                return `${this.tipo} $${this.costoBase}${emoji}`;
            }*/
        }
        
        
        const pedido = new Hamburguesa(prompt("Carne, Pollo o Cerdo?"), prompt("Lechuga?"), prompt("tomate?"), prompt("Cebolla")
        , prompt("Queso"), parseInt(prompt("cantidad de hamburgesas"))
        )
        /* funciones */
        burger.push(pedido)//con el push agregamos ese objetos a los pedidos


        let total = burger.length * costoBase
        let indice = burger.length
        let clientes = 0;
        let precioDividido = 0;
        if (indice >= 1) {
            let dividir = prompt("quieres dividir la cuenta?").toLowerCase()
            if (dividir === "si") {

                clientes = parseFloat(prompt("cuantos pagan"))

                if (clientes >= 2) {
                    precioDividido = total / clientes
                }
            }
        }
        alert("Tu pedido esta en camino")
       document.getElementById("pedido").innerHTML =  `Cada cliente va a pagar $${precioDividido}`//muestro el precio dividido 
       
    }
    crearBurger()
    document.getElementById("pedido2").innerHTML = JSON.stringify(burger)//muestro el pedido del cliente
}


