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
alert("Precio Total: $" + carritoUsuario.calcularPrecioTotal())
