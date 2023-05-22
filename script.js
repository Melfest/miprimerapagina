/*boton de manu*/
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function(){
    document.querySelector(".links-en-barra").classList.toggle("links-en-barra-responsive")
})

/*boton inicio
const miBoton = document.getElementById("miBoton");
function handleClick() {
    alert("¡Hola! Has hecho clic en el boton");
}
 miBoton.addEventListener("click", function() {
    alert("¡Hola! Has hecho clic en el boton");
 });
 
 <button id="miBoton">Haz clic aqui</button> agregar a la pagina principal para que funcione
 */

 /*formulario*/
const form = document.getElementById("myform");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    ValidateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function ValidateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert("por favor ingrese un correo electronico valido.");
    }
    else {
        alert("correo electronico enviado correctamente.");
    }
}
 
