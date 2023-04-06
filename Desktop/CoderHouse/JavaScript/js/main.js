class ProdController {
    constructor() {
        this.listaDeProductos = []
        this.contenedorProductos = document.getElementById("contenedor-productos")
    }

    levantar() {
        let traerJson = localStorage.getItem("listaDeProductos")

        if (traerJson) {
            this.listaDeProductos = JSON.parse(traerJson)
        }
    }

    mandarAlDom() {

        this.contenedorProductos.innerHTML = ""

        this.listaDeProductos.forEach(producto => {
            this.contenedorProductos.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <small class="text-muted">${producto.size}</small>
                            <p class="card-text">$${producto.precio}</p>
                        </div>                
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" id="btnProd${producto.id}" type="button">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            `
        })
    }
    eventoAnadiralCarrito(controladorCarrito) {
        this.listaDeProductos.forEach(producto => {
            const subirAlDom = document.getElementById(`btnProd${producto.id}`)
            subirAlDom.addEventListener("click", () => {
                controladorCarrito.cargarCarrito(producto)
                controladorCarrito.levantar()
                controladorCarrito.mandarAlDom()
                controladorCarrito.mandarPrecioalDom()
            })
        })
    }
}

class CartController {
    constructor() {
        this.listaDeCarrito = []
        this.contenedorCarrito = document.getElementById("contenedor-carrito")
        this.precio = document.getElementById("precio")
        this.finalizarCompra = document.getElementById("btnFinalizarcompra")
    }
    levantar() {
        let traerJson = localStorage.getItem("listaDeCarrito")

        if (traerJson) {
            this.listaDeCarrito = JSON.parse(traerJson)
            this.mandarPrecioalDom
            return true
        } else return false
    }

    borrarDomCart() {

        this.contenedorCarrito.innerHTML = ""

    }

    vaciarCart() {
        localStorage.removeItem("listaDeCarrito")
        this.listaDeCarrito = []
    }

    cargarCarrito(producto) {

        let productoCargado = this.listaDeCarrito.some(elemento => elemento.id == producto.id)

        if (productoCargado) {
            let productoEncontrado = this.Encontrar(producto.id)
            productoEncontrado.cantidad += 1

        } else {

            this.listaDeCarrito.push(producto)
        }

        let listadejson = JSON.stringify(this.listaDeCarrito)
        localStorage.setItem("listaDeCarrito", listadejson)
    }

    borrar(producto) {
        let indice = this.listaDeCarrito.indexOf(producto)
        this.listaDeCarrito.splice(indice, 1)
    }

    calcularPrecioTotal() {
        return this.listaDeCarrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)
    }

    Encontrar(id) {
        return this.listaDeCarrito.find(producto => producto.id == id)
    }

    mandarPrecioalDom() {
        precio.innerHTML = this.calcularPrecioTotal()
    }

    eventoBorrar() {
        this.listaDeCarrito.forEach(producto => {
            document.getElementById(`btnBorrar${producto.id}`).addEventListener("click", () => {
                this.borrar(producto)
                localStorage.setItem("listaDeCarrito", JSON.stringify(this.listaDeCarrito))
                this.mandarAlDom()
                this.mandarPrecioalDom()
            })
        })
    }

    cargarDatos() {
        contenedorFormulario.innerHTML += `
    <form id="formulario" class="row g-3" >
        <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="jose@mail.com.ar">
        </div>
        <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Nombre y Apellido</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Jose Gonzalez">
        </div>
        <div class="col-12">
        <label for="inputAddress" class="form-label">Dirección</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Av. Santa FE 1234">
        </div>
        <div class="col-md-4">
        <label for="inputState" class="form-label">Forma de Pago:</label>
        <select id="inputState" class="form-select">
            <option selected>Seleccionar</option>
            <option>Efectivo</option>
        </select>
        </div>
        <div class="col-12">
        </div>
        <div class="col-12">
        <button type="submit" class="btn btn-primary">Finalizar</button>
        </div>
    </form >
    `
    }

    mandarAlDom() {

        this.borrarDomCart()
        this.listaDeCarrito.forEach(producto => {
            this.contenedorCarrito.innerHTML += `
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
                        <p>Cantidad de Productos: <small>${producto.cantidad}</small></p>
                        <button type="button" id="btnBorrar${producto.id}" class="btn btn-danger">Borrar Producto</button>
                    </div>
                </div>
            </div>
        </div>`
        })
        this.eventoBorrar()
    }
    finCompra() {
        this.finalizarCompra.addEventListener("click", () => {
            this.vaciarCart()
            this.mandarAlDom()
            this.mandarPrecioalDom()
            this.cargarDatos()
            
            ///añadir el evento de cargar datos dentro del evento añadir el alert
        })

    }
}
//DOM
let contenedorFormulario = document.getElementById("contenedor-formulario")
//Objetos
const controladorProductos = new ProdController()
const controladorCarrito = new CartController()
//Traigo del Storage
controladorProductos.levantar()
const carritoLleno = controladorCarrito.levantar()
//actualizo el precio si se cae la pag.
if (carritoLleno) {
    controladorCarrito.mandarPrecioalDom(precio)
}
//COD
controladorProductos.mandarAlDom()
controladorCarrito.mandarAlDom()
controladorProductos.eventoAnadiralCarrito(controladorCarrito)
controladorCarrito.finCompra()