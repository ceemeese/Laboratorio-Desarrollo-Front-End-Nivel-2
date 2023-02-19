const form = document.getElementById('form')

const name = document.getElementById('name');
const email = document.getElementById('email');
const pass_1 = document.getElementById('pass_1');
const pass_2 = document.getElementById('pass_2');
const success = document.getElementById('success');
const danger = document.getElementById('danger');

const inputs = document.querySelectorAll('#form input')

const campos = {
    name: false,
    email: false,
    pass_1: false,
    pass_2: false,
}

const validacion = {
    correo:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    nombre: /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/,
    pass:  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
}

const validarForm = (e) => {
    switch (e.target.name) {
        case 'name':
            validarCampo(validacion.nombre, e.target, 'name');
        break;
        case 'email':
            validarCampo(validacion.correo, e.target, 'email');
        break;
        case 'pass_1':
            validarCampo(validacion.pass, e.target, 'pass1');
        break;
        case 'pass_2':
            validarPass2();
        break;
    }
}

const validarCampo = (validacion, input, campo) => {
    if(validacion.test(input.value)) {
        document.getElementById(`field_${campo}`).classList.remove('field-incorrecto');
        document.getElementById(`field_${campo}`).classList.add('field-correcto');
        document.querySelector(`#field_${campo} .input_error`).classList.remove('input_error-activo');
        document.querySelector(`#field_${campo} .input_error_general`).classList.remove('input_error_general-activo');
    } else {
        document.getElementById(`field_${campo}`).classList.add('field-incorrecto');
        document.getElementById(`field_${campo}`).classList.remove('field-correcto');
        document.querySelector(`#field_${campo} .input_error`).classList.add('input_error-activo');
        document.querySelector(`#field_${campo} .input_error_general`).classList.remove('input_error_general-activo');
    }
}

const validarPass2 = () => {
    const inputPass1 = document.getElementById('pass_1');
    const inputPass2 = document.getElementById('pass_2');

    if (inputPass1.value !== inputPass2.value){
        document.getElementById(`field_pass2`).classList.add('field-incorrecto');
        document.getElementById(`field_pass2`).classList.remove('field-correcto');
        document.querySelector(`#field_pass2 .input_error`).classList.add('input_error-activo');
        document.querySelector(`#field_pass2 .input_error_general`).classList.remove('input_error_general-activo');
    } else {
        document.getElementById(`field_pass2`).classList.remove('field-incorrecto');
        document.getElementById(`field_pass2`).classList.add('field-correcto');
        document.querySelector(`#field_pass2 .input_error`).classList.remove('input_error-activo');
        document.querySelector(`#field_pass2 .input_error_general`).classList.remove('input_error_general-activo');
    }
}

//validacion por cada input al levantar la tecla y al salir dar click fuera de campo
inputs.forEach( (input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

let btn = document.getElementById('btn');

form.addEventListener('submit', function (e){
    e.preventDefault(); //prevenir de autobubmitting

    if (name.value !== '' && email.value !== '' && pass_1.value !== '' && pass_2.value !== '' ){
        alert('Datos enviados correctamente');
        form.reset();
        resetField();
    } else {
        camposTexto();
    }
})


/* valida que todos los campos estén cumplimentados, en caso de OK envía alerta y resetea*/
function camposTexto(){
    if (name.value === ''){
        document.getElementById('field_name').classList.add('field-incorrecto');
        document.getElementById('field_name').classList.remove('field-correcto');
        document.querySelector('#field_name .input_error_general').classList.add('input_error_general-activo');
        document.querySelector('#field_name .input_error').classList.remove('input_error-activo');
    }
    if (email.value === '') {
        document.getElementById('field_email').classList.add('field-incorrecto');
        document.getElementById('field_email').classList.remove('field-correcto');
        document.querySelector('#field_email .input_error_general').classList.add('input_error_general-activo');
        document.querySelector('#field_email .input_error').classList.remove('input_error-activo');
    }
    if (pass_1.value === '') {
        document.getElementById('field_pass1').classList.add('field-incorrecto');
        document.getElementById('field_pass1').classList.remove('field-correcto');
        document.querySelector('#field_pass1 .input_error_general').classList.add('input_error_general-activo');
        document.querySelector('#field_pass1 .input_error').classList.remove('input_error-activo');
    }
    if (pass_2.value === '') {
        document.getElementById(`field_pass2`).classList.add('field-incorrecto');
        document.getElementById(`field_pass2`).classList.remove('field-correcto');
        document.querySelector('#field_pass2 .input_error_general').classList.add('input_error_general-activo');
        document.querySelector('#field_pass2 .input_error').classList.remove('input_error-activo');
        }
}

/*Función resetear Field después de introducir datos correctos*/
function resetField(){
    document.getElementById('field_name').classList.remove('field-correcto');
    document.getElementById('field_email').classList.remove('field-correcto');
    document.getElementById('field_pass1').classList.remove('field-correcto');
    document.getElementById('field_pass2').classList.remove('field-correcto');
}


