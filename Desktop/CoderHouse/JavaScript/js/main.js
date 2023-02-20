alert("ingrese usuario en nombre de usuario y pass en contrasenia")
let username = prompt("ingrese nombre de Usuario")
let password = prompt("ingrese la contrasenia")
if (username == "usuario" && password == "pass") {
    alert("Usted se registro correctamente")
    saludar()
}

else { alert("Usuario o contrasenia incorrecto, porfavor vuelva a recargar la pagina") }




function saludar() {
    let nombre = prompt("Ingrese su Nombre")
    let apellido = prompt("Ingrese su Apellido")
    let resultado = "Hola " + nombre + " " + apellido + ", este es mi simulador interactivo, por consola te voy a mostrar la multiplicacion de el numero que ingreses por los numeros del 0 al 100 inclusive."
    alert(resultado)    
}
let numero = prompt("ingresar un numero")
for (let i = 0; i <= 100; i ++){
    let resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado);
}
