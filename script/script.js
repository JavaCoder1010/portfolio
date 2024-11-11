window.onload = function() {
    document.getElementById('cookies').style.display = 'block';

    document.getElementById('yesBtn').onclick = function() {
        document.getElementById('cookies').style.display = 'none';

    };

    document.getElementById('noBtn').onclick = function() {
        alert('Mentira, no hay cookies.');
    };
};

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario
    const formulario = document.querySelector('.formulario');
    // Expresiones regulares para validaciones
    const regexNombreApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexEdad = /^(?:[1-9][0-9]?|1[01][0-9]|120|130)$/; // Entre 1 y 130
    const regexTelefono = /^[0-9]{8,12}$/; // Entre 8 y 12 números
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de correo electrónico

    // Función de validación general
    function validarCampo(campo, regex) {
        if (campo.value.trim() === '') {
            // Si el campo está vacío, marcarlo como inválido
            campo.style.border = '2px solid red';
            return false;
        } else if (regex && !regex.test(campo.value.trim())) {
            // Si no pasa la validación de la regex
            campo.style.border = '2px solid red';
            return false;
        } else {
            // Si pasa todas las validaciones
            campo.style.border = '2px solid green';
            return true;
        }
    }

    // Función que se ejecuta cuando se pierde el foco (blur)
    function agregarEventosDeValidacion(campo, regex) {
        campo.addEventListener('blur', function() {
            validarCampo(campo, regex);
        });
    }

    // Añadir los eventos a los campos
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const correo = document.getElementById('correoElectronico');
    const telefono = document.getElementById('telefono');
    const consulta = document.getElementById('consulta');

    // Añadir eventos de validación al perder el foco
    agregarEventosDeValidacion(nombre, regexNombreApellido);
    agregarEventosDeValidacion(apellido, regexNombreApellido);
    agregarEventosDeValidacion(edad, regexEdad);
    agregarEventosDeValidacion(correo, regexCorreo);
    agregarEventosDeValidacion(telefono, regexTelefono);
    agregarEventosDeValidacion(consulta);

    // Validar todo al enviar el formulario
    formulario.addEventListener('submit', function(event) {
        // Validar todos los campos individualmente
        const nombreValido = validarCampo(nombre, regexNombreApellido);
        const apellidoValido = validarCampo(apellido, regexNombreApellido);
        const edadValida = validarCampo(edad, regexEdad);
        const correoValido = validarCampo(correo, regexCorreo);
        const telefonoValido = validarCampo(telefono, regexTelefono);
        const consultaValida = validarCampo(consulta);

        // Si alguna validación falla, se detiene el envío del formulario
        if (!nombreValido || !apellidoValido || !edadValida || !correoValido || !telefonoValido || !consultaValida) {
            event.preventDefault(); // Detiene el envío del formulario
            alert('Por favor, corrige los campos en rojo antes de enviar el formulario.');
        }
        else{
            alert('Formulario enviado correctamente')
        }
    });
});
