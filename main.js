console.log("Bienevenido a la calculadora de promedios")

let cantidadAlumnos = parseInt(console.log("Ingrese la cantidad de alumnos a calcular"));
for (let i = 0; i < cantidadAlumnos; i++) {

  let nombreAlumno = console.log("ingrese el nombre del alumno");

  let nota1 = parseInt(console.log("Ingrese nota del 1er examen"));
  let nota2 = parseInt(console.log("Ingrese nota del 2do examen"));
  let nota3 = parseInt(console.log("Ingrese nota del 3er examen"));
  let nota4 = parseInt(console.log("Ingrese nota del 4to examen"));
  let nota5 = parseInt(console.log("Ingrese nota del 5to examen"));

  let promedio = Promedio(nota1, nota2, nota3, nota4, nota5);
  alert(" El promedio de " + nombreAlumno + " es " + promedio);

  let aprueba = apruebaAnio(promedio);
  if (aprueba) {
    alert(nombreAlumno + " Aprueba año ");
  }
  else {
    alert(nombreAlumno + "Desaprueba año");
  }
}

function Promedio(nota1, nota2, nota3, nota4, nota5) {
  let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
   return promedio;  
}
function apruebaAnio(promedio) {
  if (promedio >= 6) {
    return true;
  } else {
    return false;
  }
}

class Alumnos {
  constructor(nombre, apellido, promediofinal) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.promediofinal = promediofinal;
  }
}

const arrayAlumnos = [];
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {

  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const promediofinal = document.getElementById("promedioFinal");
  console.log("El nombre es : " + nombre.value);
  console.log("El apellido es : " + apellido.value);
  console.log("El promedio Final es : " + promediofinal.value);
  console.log("Formulario Enviado");

  const alumno = new Alumnos(nombre.value, apellido.value, promediofinal.value);
  arrayAlumnos.push(alumno)

  console.log(arrayAlumnos)

  formulario.reset()
})

const boton = document.getElementById("boton");

boton.addEventListener("click", () =>{
  Swal.fire("Enviado")
});
