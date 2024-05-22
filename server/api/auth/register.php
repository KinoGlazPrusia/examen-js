<?php
// Cargamos módulos y funcionalidades.
include('../../env.php');
include('../../utils/common/responses.php');
include('../../utils/common/sanitizers.php');
include('../../utils/common/validators.php');
include('../../utils/common/auth.php');

// Iniciamos o recuperamos sesión
session_start();

// Comprobamos que existen los datos están en la request
$request = match(true) {
    !isset($_POST['fname']) => false,
    !isset($_POST['lname']) => false,
    !isset($_POST['birthday']) => false,
    !isset($_POST['email']) => false,
    !isset($_POST['password']) => false,
    default => true
};

$sanitizedData = [];

// Capturamos, sanitizamos y validamos los datos de la request
if ($request) {
    foreach($_POST as $key => $value) {
        $sanitizedData[$key] = sanitize($value);
    }
}

if(!validateRegister($sanitizedData)) {
    jsonResponse(500, 'Error en el registro');
}

// Creamos un nuevo usuario y lo añadimos a la DB

// Devolvemos una respuesta con los datos del usuario y hacemos login
// $_SESSION['userId'] = $sanitizedData['email'];

jsonResponse(200, ['Usuario registrado con éxito', $sanitizedData]);