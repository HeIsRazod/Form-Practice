
function enviar() {

    if (validar()) {




    }



    return false;
}

function validar() {

    var nick = document.querySelector("#nick");
    var age = document.querySelector("#age");
    var razas = document.querySelector("#razas");
    var genero = document.querySelector("#genero");
    var arma = document.querySelector("#opc1");
    var habilidad = document.querySelector("#opc2");
    var texto = document.querySelector("#texto");
    var weapon = document.querySelector("#tipoarma");

    let errores = [];

    nick.classList.remove("error");
    age.classList.remove("error");
    weapon.classList.remove("errorSub");
    texto.classList.remove("error");

    console.log(nick);



    if (nick.value.trim() == "") {
        errores.push("Nick invalido, soquete");
        nick.classList.add("error");
    }


    if (age.value.trim() == "") {
        errores.push("Edad invalida, imbecil");
        age.classList.add("error");
    } else {
        if (isNaN(age.value)) {
            errores.push("Edad invalida, imbecil");
            age.classList.add("error");

        } else if (age.value < 0) {
            errores.push("Edad invalida, imbecil");
            age.classList.add("error");
        }
    }

    if (!document.querySelector('input[name="opciones"]:checked')) {
        errores.push("Debes seleccionar al menos una opcion, tarado");
        weapon.classList.add("errorSub");
    }

    if (texto.value.trim() == "" && habilidad.checked) {
        errores.push("Tienes que dejar un mensaje, idiota");
        texto.classList.add("error");
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