import mostrarProductos from "./app.js";
import { PRODUCTS } from "../data/pruducts.js";

document.addEventListener("DOMContentLoaded", (e) => {
  mostrarProductos(PRODUCTS);
})

const { value: email } = await Swal.fire({
  title: 'Dejanos tu email y accede a 2 clases gratis en el idioma que quieras',
  input: 'email',
  inputLabel: 'Your email address',
  inputPlaceholder: 'Enter your email address'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
}
Swal.fire(
  'Well done!! ya tenes 2 clases de prueba',
  'No olvides revisar tu email!',
  'success'

)
