let nombre = "";
let apellido = "";
function agregar() {
  nombre = document.getElementById("id-nombre").value;
  apellido = document.getElementById("id-apellido").value;
  while (nombre !== "" || apellido !== "") {
    agregarNombre(nombre);
    agregarApellido(apellido);
    limpiar();
  }
}
function agregarNombre(valor) {
  document.getElementById("id-nombre-tabla").innerHTML = `
  <td>${valor}</td>`;
}
function agregarApellido(valor) {
  document.getElementById("id-apellido-tabla").innerHTML = `
  <td>${valor}</td>`;
}
function limpiar() {
  nombre = "";
  apellido = "";
  document.getElementById("id-nombre").value = nombre;
  document.getElementById("id-apellido").value = apellido;
}
