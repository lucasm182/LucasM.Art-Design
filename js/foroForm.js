
function verificarForm() {
    let reg_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let txtarea = document.getElementById("txtarea")
   // let form = document.getElementById("form");
    let warning = document.getElementById("warning");
    let dev = document.getElementById("dev");
    console.log("linea 10 " + dev.firstChild);
//    while (dev.firstChild) {
//        dev.removeChild(div.firstChild);
//    }
    console.log("nombre " + nombre.value);
    console.log("correo " + correo.value);
    console.log("txtarea " + txtarea.value); 
    if (nombre.value.trim() == "") {
        let error = document.createElement("p");
        error.innerHTML = "Nombre no puede estar vacio";
        warning.appendChild(error); 
        console.log("LINEA 17");
    }else{
        console.log("LINEA 19");
    }
    if (correo.value.trim() !="" && !reg_email.test(correo.value) ) {
        let error = document.createElement("p");
        error.innerHTML = "El email es incorrecto, INVALIDO!!";
        warning.appendChild(error); 
        console.log("LINEA 26");
    }
    if (txtarea.value.trim() =="" ) {
        let error = document.createElement("p");
        error.innerHTML = "Es obligatorio !!";
        warning.appendChild(error); 
        console.log("LINEA 32");
    }
    if (txtarea.value.length >200 ) {
        let error = document.createElement("p");
        error.innerHTML = "Supero el maximo de caracteres permitidos, sea mas breve!!";
        warning.appendChild(error); 
        console.log("LINEA 32");
    }


    return false;
}
// form.addEventListener("submit", e=> {
//     e.preventDefault();
//     let warnings = "";
//     let datos = "";
//     let inn = false;
//     parrafo.innerHTML = "";
//     let reg_Email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     if (nombre.value.length < 6) {
//         warnings += "El nombre es invalido.<br>";
//         inn = true;
//     }
//     if (!reg_Email.test(correo.value)) {
//         warnings += "Email invalido.<br>";
//         inn = true;
//     }
      
//     if (txt.value.length > 300) {
//         warnings += "Usuario invalido.<br>";
//         inn = true;
//     }

//     if (inn) {
//         parrafo.innerHTML = warnings;
//     }
//     else {
//         datos += "Nombre: " + nombre.value + "<br>";
//         datos += "Correo: " + correo.value + "<br>";
//         datos += "Teléfono: " + telefono.value + "<br>";
//         datos += "Usuario: " + usuario.value + "<br>";

//         parrafo.innerHTML = "Enviado<br><br>Datos ingresados:<br>" + datos;
//         form.reset();
//     }
    

// })