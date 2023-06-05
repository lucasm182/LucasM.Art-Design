const form = document.getElementById('form')
const button = document.getElementById('submit')
let reg_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const nom = document.getElementById('nombre')
const email = document.getElementById('email')
const coment = document.getElementById('menaje')



formValid = {
    nom:false,
    email:false,
    coment:false,
}


nom.addEventListener('submit', (e) => {
    if(nombre.value != "") {formValid.nom=true }else {}
})

email.addEventListener('submit', (e) => {
    if(email.value != "" && !correo.test(reg_email.value)) {formValid.email=true}
    else{}
})

coment.addEventListener('submit', (e) => {
    if(mensaje.value.length >500){formValid.email=true}else {}
})

const validateForm = () =>{
    const formValus = Object.values(formValid)
    const Valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('form invalid')
    
}