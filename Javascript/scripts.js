
function enviar() {

    if (validar()){

        let nombre = document.querySelector("#nombre");
        let age = document.querySelector("#age");
        let email = document.querySelector("#email");

        let p = document.createElement("p");
        p.innerHTML = nombre.value +" de " + age.value +" años de edad se suscribio con el email " + email.value;

        document.getElementById("msj").appendChild(p);
    }

    return false;
}

function validar() {

    let nombre = document.querySelector("#nombre");
    let age = document.querySelector("#age");
    let email = document.querySelector("#email");
    let errores = [];

    nombre.classList.remove("error");
    age.classList.remove("error");
    email.classList.remove("error");


    if (nombre.value.trim() == "" || nombre.value.length > 20) {
        errores.push("Nombre invalido, no puede estar vacio o tener mas de 20 caracteres");
        nombre.classList.add("error");
    }
    let pattern = /^[A-Z]+$/i

    if (!pattern.test(nombre.value)) {
        errores.push("Por favor, ingrese solo letras")
        nombre.classList.add("error");
    }


    if (age.value.trim() == "") {
        errores.push("Edad invalida, no puede estar vacia");
        age.classList.add("error");
    } else {
        if (isNaN(age.value)) {
            errores.push("Edad invalida, no puede estar vacia");
            age.classList.add("error");

        } else if (age.value < 18 || age.value > 99) {
            errores.push("Tienes que ser mayor de edad o tener menos de un siglo");
            age.classList.add("error");
        }
    }

    let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!er.test(email.value)) {
        errores.push("Ingrese un correo electronico valido");
        email.classList.add("error");
        
    }

    let listaerrores = document.querySelector("ul");
    listaerrores.innerHTML = "";

    for (let i = 0; i < errores.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = errores[i];
        listaerrores.appendChild(li);
    }

    return errores.length == 0;


}
