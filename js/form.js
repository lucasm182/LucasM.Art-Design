let firstEntry = document.querySelector("form input");


let correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

function validar(){
    let nombre = document.querySelector("#nombre");
    nombre.classList.remove("errors");
    let mensaje = document.querySelector("#mensaje");
    mensaje.classList.remove("errors");
    let email = document.querySelector("#email");
    email.classList.remove("errors");

    let l_errores = document.querySelector("error");
    l_errores.innerHTML="";
    l_errores.style.display = "none";

    let mensajes = document.querySelector("#msj");
    let err = false;

    if(nombre.value == ""){
        nombre.classList.add("errors");
        let p = document.createElement("p");
        p.innerHTML = "Ingrese un nombre";
        l_errores.appendChild(p);
        err = true;
    }

    if(mensaje.value == ""){
        mensaje.classList.add("errors");
        let p = document.createElement("p");
        p.innerHTML = "Ingrese un mensaje";
        l_errores.appendChild(p);
        err = true;
    }
    else if(mensaje.value.length >500){
        mensaje.classList.add("errors");
        let p = document.createElement("p");
        p.innerHTML = "Mensaje demasiado extenso, max 500 caracteres";
        l_errores.appendChild(p);
        err = true;
    }

    if(email.value != "" && !correo.test(email.value)){
        email.classList.add("errors");
        let p = document.createElement("p");
        p.innerHTML = "Email incorrecto";
        l_errores.appendChild(p);
        err = true;
    }

    if(err){
        l_errores.style.display = "initial";
        return false;
    }else {
        let p = document.createElement("p");
        if(email.value != ""){
            p.innerHTML = nombre.value + " dice: " + mensaje.value + ". email: " + email.value + ". ";
        }else{
            p.innerHTML = nombre.value + " dice: " + mensaje.value + ". ";
        }
        mensajes.appendChild(p);
        document.forms[comentar].reset();
        let firstEntry = document.querySelector("form input");
        firstEntry.focus(); 

    }
    return false;
}
        