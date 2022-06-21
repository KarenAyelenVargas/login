let usuarioValido: string = "Juan";
let contraseñaValida: string = "claveJuan";
let btnIngresar = document.getElementById("btnIngr");
let usuarioDato = document.getElementById("nombre");
let contraseñaDato = document.getElementById("seguridad");

btnIngresar.addEventListener("click", () => {
  let usuarioDato: string = String(nombre.value);
  let contraseñaDato: string = String(seguridad.value);
  if (usuarioValido === usuarioDato) {
    console.log("Su usuario es válido");
    if (contraseñaValida === contraseñaDato) {
      console.log("Su contraseña es válida");
      console.log("Bienvenido");
    } else {
      console.log("Su contraseña no es válida");
      console.log("Intentelo de nuevo");
    }
  } else {
    console.log("Su usuario no es válido");
    console.log("Intentelo de nuevo");
  }
});
