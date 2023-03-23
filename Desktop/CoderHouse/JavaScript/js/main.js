let listaDeProductos = [
    {id: 01, nombre: "JABÓN DE AVENA", descripcion: "Cremoso y delicado, indicado para piel sensible, propensa a irritaciones y enrojecimiento, sin aroma. Jabón saponificado en frío.Elaborado con aceites y mantecas vegetales, enriquecido con avena. Sin químicos, ni crueldad animal.", size: "Corte artesanal 110gr. aproximadamente", precio: 490, img: "../assets/img/jabon-avena.jpeg", alt:"jabon de avena" },
    {id: 02, nombre: "JABÓN DE CAFÉ DETOX", descripcion: "Exfoliante detox, desintoxica, elimina células muertas e impurezas, reactiva la circulación, previene la aparición de las arañitas y previene celulitis. Enriquecido con café y con avena, Sin químicos, ni crueldad animal.", size: "Corte artesanal 110gr. aproximadamente", precio: 490, img: "../assets/img/jabon-cafe.jpeg", alt:"jabon de cafe" },
    {id: 03, nombre: "SHAMPOO SÓLIDO NORMAL", descripcion: "Ésta variedad es ideal para todo tipo de pelo, es nutritivo, evita la anticaspa y la caída. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", precio: 490, img: "../assets/img/galeria5.jpeg", alt:"shampoo normal" },
    {id: 04, nombre: "SHAMPOO SÓLIDO SECO", descripcion: "Ésta variedad es indicada para los cabellos dañados, maltratados y resecos, nutre, hidrata y devuelve el brillo natural. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", precio: 490, img:"../assets/img/galeria6.jpeg", alt:"Shampoo Seco"},
    {id: 05, nombre: "SHAMPOO SÓLIDO GRASO", descripcion: "Ésta variedad es perfecta para quienes tienen exceso de oleosidad en el cuero cabelludo, ya que la equilibra. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", precio: 490, img:"../assets/img/shampoo-graso.jpeg", alt:"shampoo-graso"},
    {id: 06, nombre: "SHAMPOO SÓLIDO ANTÍCAIDA", descripcion: "Está variedad es indicada para quienes quieran evitar y reducir la caída del cabello, es fortalecedor, nutritrivo e hidratante. Realizado con materia prima 100% natural⁣, con tensioactivo SCI, arcillas hierbas y aceites vegetales. Sin químicos, ni crueldad animal.", size: "80gr rinde 60/70 lavados aproximadamente", precio: 490, img:"../assets/img/shampoo-anticaida.jpeg", alt:"shampoo-aticaida"},
    {id: 07, nombre: "ACONDICIONADOR SÓLIDO", descripcion: "Ligero, suave y delicado, para todo tipo de pelo. Hidratante y nutritivo. Realizado con materia prima 100% natural, cera vegetal, esencias, aceites y mantecas vegetales. Sin químicos, ni crueldad animal.", size: "70gr rinde 60/70 lavados", precio: 490, img:"../assets/img/acondicionador.jpg", alt:"Acondicionador Solido"},
    {id: 08, nombre: "ÓLEO REPARADOR", descripcion: "Hidrata, nutre, repara las fibras capilares. Ayuda a sellar puntas resecas y abiertas. Controla el frizz, aporta brillo y define cabellos ondulados. Sin químicos, ni crueldad animal.", size: "Envase 30 ml.", precio: 490, img:"../assets/img/oleo-capilar.jpeg", alt:"Oleo Reparador"},
    {id: 09, nombre: "BÁLSAMO", descripcion: "Nutre, humecta e hidrata.⁣ Combate los radicales libres, con gran poder antioxidante y vitamina E.⁣ Previene los signos de envejecimiento, reactiva el colágeno natural y brinda luminosidad a tu piel.", size: "Envase 45gr.", precio: 490, img:"../assets/img/balsamo.jpeg", alt:"balsamo"}
]

const listadejson = JSON.stringify (listaDeProductos)

localStorage.setItem("listaDeProductos",listadejson)

class ProdController {
    constructor(){
        this.listaDeProductos = []
    }

    levantar(){
        let traerJson = localStorage.getItem("listaDeProductos")

        if (traerJson){
            this.listaDeProductos = JSON.parse(traerJson)
        }
    }

    mandarAlDom(contenedorProductos){
        
        contenedorProductos.innerHTML = ""
        

        this.listaDeProductos.forEach(producto => {
            contenedorProductos.innerHTML += `
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card mb-3 mx-auto" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src=${producto.img} class="img-fluid rounded-start"
                                            alt="jabon de avena">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body wow animate__animated animate__bounceIn">
                                            <h5 class="card-title">${producto.nombre}</h5>
                                            <p class="card-text">${producto.descripcion}</p>
                                            <small class="text-muted">${producto.size}</small>
                                            <small class="fs-4">$${producto.precio}</small>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2">
                                            <button class="btn btn-success" id="btnProd${producto.id}" type="button">Agregar al Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
        })
    }
}

class CartController {
    constructor(){
        this.listaDeCarrito = []
    }
    levantar(){
        let traerJson = localStorage.getItem("listaDeCarrito")

        if (traerJson){
            this.listaDeCarrito = JSON.parse(traerJson)
        }
    }

    cargarCarrito(producto){
        this.listaDeCarrito.push(producto)

        let listadejson = JSON.stringify(this.listaDeCarrito)
        localStorage.setItem("listaDeCarrito", listadejson)
    }

    mandarAlDom(contenedorCarrito){

        contenedorCarrito.innerHTML = ""

        this.listaDeCarrito.forEach(producto =>{

        contenedorCarrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text"><small class="fs-5">Precio :$${producto.precio}</small></p>
                        <button type="button" id="btnBorrar" class="btn btn-danger">Borrar Producto</button>
                    </div>
                </div>
            </div>
        </div>`
        })
    }
}

const controladorProductos = new ProdController()
const controladorCarrito = new CartController()

controladorProductos.levantar()
controladorCarrito.levantar()

const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("contenedor-carrito")

controladorProductos.mandarAlDom(contenedorProductos)
controladorCarrito.mandarAlDom(contenedorCarrito)


controladorProductos.listaDeProductos.forEach( producto => {
    const subirAlCarrito = document.getElementById(`btnProd${producto.id}`)
    subirAlCarrito.addEventListener("click",()=>{
        
        controladorCarrito.cargarCarrito(producto)
        controladorCarrito.levantar()
        controladorCarrito.mandarAlDom(contenedorCarrito)

    })
    
})


/* PARTE DE PROYECTO PARA MODIFICAR Y AGREGAR AL FINAL
FALTA HACER LOGIN 
FALTA HACER CALCULOS DEL CARRITO (PRECIO TOTAL + PRECIO CON IVA + PRECIO CON ENVIO)
FALTA PEDIR DIRECCION PARA ENVIO
FALTA AGREGAR SUMAR MAS CANTIDAD DEL MISMO PRODUCTO AL CARRITO Y QUE NO SE REPITAN LOS PRODUCTOS EN EL CARRITO
FALTA ACOMODAR LAS CARDS EN EL DOM DENTRO DEL CONTENEDOR

class Productos {
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    descripcion() {
        return "Numero de producto: " + this.id
            + "\nNombre: " + this.nombre
            + "\nPrecio: " + this.precio
            + "\nCantidad: " + this.cantidad
    }
}

class TotalProductos {
    constructor() {
        this.listadeproductos = []
    }

    agregarProductos(producto) {
        this.listadeproductos.push(producto)
    }

    mostrarProductos() {
        this.listadeproductos.forEach((el) => {
            console.log(el.descripcion())
            alert(el.descripcion())
        }
        )
    }
}
class Carrito {
    constructor(listaDeCompra) {
        this.precioTotal = 0
        this.listaDeCompra = listaDeCompra
    }

    calcularPrecioTotal() {
        for (const objeto_dentro of this.listaDeCompra) {
            this.precioTotal = this.precioTotal + objeto_dentro.precio * objeto_dentro.cantidad
        }
        return this.precioTotal
    }
}

const totalProductos = new TotalProductos()


totalProductos.agregarProductos(new Productos(1, "Shampoo", 700, 10))
totalProductos.agregarProductos(new Productos(2, "Jabones", 800, 10))
totalProductos.agregarProductos(new Productos(3, "Acondicionadores", 700, 10))

alert("Bienvenido, este es un simulador de un carrito de compras, usted podra ingresar como usuario de carga de productos o usuario de compra, Muchas Gracias")
alert("Para ingresar como usuario de carga ingrese 'usucarga', para ingresar como usuario de compra ingrese 'usucompra'")

const listaCompraUsuario = []


let usuario = prompt("Porfavor ingrese Usuario")

if (usuario == "usucarga") {

    alert("Usted ingreso como usuario de Carga")

    let cargar = ''

    while (cargar != "fin") {


        let id = Number(prompt("Porfavor ingrese un numero de id de producto"))
        let nombre = prompt("Porfavor ingrese el nombre del producto")
        let precio = Number(prompt("Porfavor ingrese el precio del producto"))
        let cantidad = Number(prompt("Porfavor ingrese la cantidad de stock"))
        let producto = new Productos(id, nombre, precio, cantidad)


        totalProductos.agregarProductos(producto)


        totalProductos.mostrarProductos()

        cargar = prompt("Si ya agrego todos los productos ingrese 'fin', si desea seguir cargando ingrese cualquier letra")
    }
    alert("Muchas gracias por usar el simulador")
}
if (usuario == "usucompra") {

    alert("Usted ingreso como usuario de Compra")
    alert("A continuacion podras ver los productos que hay en stock")

    totalProductos.mostrarProductos()
    const listadeproductos = [(1, "Shampoo", 700, 10),
                                (2, "Jabones", 800, 10),
                                (3, "Acondicionadores", 700, 10),]
    let comprar = Number(prompt("Ingrese el numero del producto que desea comprar"))
    if (comprar >= 1 && comprar <= listadeproductos.length) {
        
        listaCompraUsuario.push = listadeproductos[comprar - 1]

        alert ("Usted compro: " + listaCompraUsuario)
    }
}
else if (usuario != "usucarga" && usuario != "usucompra") {
    alert("No ingreso como ningun operador, porfavor vuelva a recargar la pagina")
}
let listaDeCompra = listaCompraUsuario
const carritoUsuario = new Carrito(listaCompraUsuario)

console.log("Precio Total: $" + carritoUsuario.calcularPrecioTotal())
alert("Precio Total: $" + carritoUsuario.calcularPrecioTotal())*/