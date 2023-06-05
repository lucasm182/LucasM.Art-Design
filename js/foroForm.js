
function verificarForm() {
    let error_msg = false;
    let reg_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let txtarea = document.getElementById("mensaje")
    // let form = document.getElementById("form");
    let warning = document.getElementById("warning");
    let dev = document.getElementById("dev");
    while (warning.firstChild) {
        warning.removeChild(warning.firstChild);
    }
    console.log("nombre " + nombre.value);
    console.log("correo " + correo.value);
    console.log("txtarea " + txtarea.value);
    if (nombre.value.trim() == "") {
        let error = document.createElement("p");
        error.innerHTML = "Nombre no puede estar vacio";
        warning.appendChild(error);
        error_msg = true;
    }

    if (correo.value.trim() != "" && !reg_email.test(correo.value)) {
        let error = document.createElement("p");
        error.innerHTML = "El email es incorrecto, INVALIDO!!";
        warning.appendChild(error);
        error_msg = true;
    }
        
    if (txtarea.value.trim() == "") {
        let error = document.createElement("p");
        error.innerHTML = "Mensaje Es obligatorio !!";
        warning.appendChild(error);
        error_msg = true;
    }
    if (txtarea.value.length > 200) {
        let error = document.createElement("p");
        error.innerHTML = "Supero el maximo de caracteres permitidos, sea mas breve!!";
        warning.appendChild(error);
        error_msg = true;
    }
    if (!error_msg) {
        let msg_gral = document.createElement("p");
        msg_gral.innerHTML = " NOMBRE: " + nombre.value;
        dev.appendChild(msg_gral);
        msg_gral = document.createElement("p");
       msg_gral.innerHTML = " EMAIL: " + correo.value;
        dev.appendChild(msg_gral);
        msg_gral = document.createElement("p");
        msg_gral.innerHTML = " MENSAJE: " + txtarea.value;
            dev.appendChild(msg_gral);
    }
    return false;
}
