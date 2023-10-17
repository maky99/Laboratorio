
const update = document.getElementById('editar');
const load = document.getElementById('cargar');

document.addEventListener("DOMContentLoaded", function () {
    options(); // Llama a la función options cuando la página se carga
    document.getElementById("opciones-button").style.display = "none"; // Oculta el botón después de llamar a options
});
/*
async function options() {
    const { value: option } = await Swal.fire({
        title: 'Buscar Paciente por:',
        text: '1. Dni 2. Apellido 3. Mail',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off',
            inputAutoTrim: false
        },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (option) => {
            if (!option) {
                Swal.showValidationMessage('Elija una opcion!');
            }else if(option !== "1" && option !== "2" && option !== "3")
            {
                Swal.showValidationMessage('Debe elegir una opción válida!');
            }
            else{
                buscarPor(option);
            }
        }
    });
}
*/

async function options() {
    const { value: option } = await Swal.fire({
        title: 'Buscar Paciente por:',
        text: 'Elija una opción:',
        html:
            '<div style="display: flex; justify-content: center; align-items: center;">' +
            '  <input type="radio" id="option1" name="searchOption" value="1">' +
            '  <label for="option1">1. DNI</label>' +
            '  <input type="radio" id="option2" name="searchOption" value="2">' +
            '  <label for="option2">2. Apellido</label>' +
            '  <input type= "radio" id= "option3" name= "searchOption" value= "3">' +
            '  <label for= "option3">3. Mail</label>' +
            '</div>',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            const selectedOption = document.querySelector('input[name="searchOption"]:checked');
            if (!selectedOption) {
                Swal.showValidationMessage('Elija una opción');
            } else {
                buscarPor(selectedOption.value);
            }
        }
    });
}


function buscarPor(option) {
    switch (option) {
        case "1":
            byDNI();
            break;
        case "2":
            byLastName();
            break;
        case "3":
            byMail();
            break;
    }
}

async function byDNI() {
    const { value: dni } = await Swal.fire({
        title: 'Ingrese DNI:',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off',
            inputAutoTrim: false
        },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async (dni) => {
            if (!dni) {
                Swal.showValidationMessage('Debe ingresar un DNI.');
            } else {
                try {
                    const response = await fetch(`/buscarPaciente?dni=${dni}`);
                    if (response.ok) {
                        Swal.fire('Éxito', 'Paciente encontrado', 'success');
                        const paciente = await response.json(); // Espera a que la promesa se resuelva
                        cargarFormulario(paciente);
                    } else {
                        Swal.fire('Error', 'Paciente no encontrado', 'error');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    });
}


async function byMail() {
    const { value: mail } = await Swal.fire({
        title: 'Ingrese mail:',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off',
            inputAutoTrim: false
        },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async (mail) => {
            if (!mail) {
                Swal.showValidationMessage('Debe ingresar un mail.');
            } else {
                try {
                    const response = await fetch(`/buscarEmail?mail=${mail}`);
                    if (response.ok) {
                        Swal.fire('Éxito', 'Paciente encontrado', 'success');
                        const paciente = await response.json(); // Espera a que la promesa se resuelva
                        cargarFormulario(paciente);
                    } else {
                        Swal.fire('Error', 'Paciente no encontrado', 'error');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    });
}

async function byLastName() {
    const { value: apellido } = await Swal.fire({
        title: 'Ingrese un apellido:',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off',
            inputAutoTrim: false
        },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async (apellido) => {
            if (!apellido) {
                Swal.showValidationMessage('Debe ingresar un apellido.');
            } else {
                try {
                    const response = await fetch(`/buscarApellido?apellido=${apellido}`);
                    if (response.ok) {
                        const data = await response.json(); // Analiza la respuesta JSON
                        const total = data.count; // Obtiene el total de pacientes
                        if (total > 1) {
                            masDeUnApellido();
                        }
                        Swal.fire('Éxito', 'Paciente encontrado', 'success');
                        cargarFormulario(data.pacientes); // Utiliza los pacientes encontrados
                    } else {
                        Swal.fire('Error', 'Paciente no encontrado', 'error');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    });
}


async function actualizarPaciente() {
    try {
         // Cambia el tipo de botón "Cargar" a un botón normal
         const cargarButton = document.querySelector('.buttons .btn-primary');
         cargarButton.type = 'button';
        //Encuentra el formulario por su ID
        const pacienteForm = document.getElementById('pacienteForm');
        // Cambia el método del formulario a "PUT"
        pacienteForm.method = 'PUT';
        pacienteForm.action = '/actualizar';
        // Realiza una solicitud PUT para actualizar el paciente
        const actualizar = await fetch(pacienteForm.action, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellido').value,
                dni: document.getElementById('dni').value,
                edad: document.getElementById('edad').value,
                fecha_de_nacimiento: document.getElementById('fecha_de_nacimiento').value,
                genero: document.getElementById('genero').value,
                telefono: document.getElementById('telefono').value,
                direccion: document.getElementById('direccion').value,
                mail: document.getElementById('mail').value
            })
        });

        if (actualizar.ok) {
            Swal.fire('Éxito', 'Paciente Actualizado!', 'success');

        } else {
            Swal.fire('Error', 'No se pudo actualizar el Paciente', 'error');
        }

    } catch (error) {
        console.log(error);
    }
     // Restablece el método del formulario a POST
     const pacienteForm = document.getElementById('pacienteForm');
     pacienteForm.method = 'POST';
}



function cargarFormulario(paciente) {
    if (paciente.fecha_de_nacimiento) {
        document.getElementById('fecha_de_nacimiento').value = paciente.fecha_de_nacimiento;
        document.getElementById('nombre').value = paciente.nombre;
        document.getElementById('apellido').value = paciente.apellido;
        document.getElementById('dni').value = paciente.dni;
        document.getElementById('edad').value = paciente.edad;
        document.getElementById('telefono').value = paciente.telefono;
        document.getElementById('direccion').value = paciente.direccion;
        document.getElementById('mail').value = paciente.mail;
        document.getElementById('genero').value = paciente.genero;
    }
    document.getElementById('cargar').style.display = 'none';

}

function vaciarFormulario() {
    document.getElementById('fecha_de_nacimiento').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('mail').value = '';
}





