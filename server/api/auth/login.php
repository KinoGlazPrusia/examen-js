<?php
// Cargamos módulos y funcionalidades.
include('../../env.php');
include('../../utils/common/responses.php');
include('../../utils/common/validators.php');
include('../../utils/common/auth.php');

// Iniciamos o recuperamos sesión
session_start();

// Revisamos si el usuario ya está logueado
if (isset($_SESSION['userId'])) {
    jsonResponse(200, 'El usuario ya está logueado');
}

// Revisamos que la request contenga las credenciales
if (!isset($_POST['userId']) || !isset($_POST['password'])) {
    jsonResponse(400, 'Alguno de los campos está vacío');
}

// Si la request contiene las credenciales, las recuperamos
$userId = $_POST['userId'];
$password = sha1(md5($_POST['password']));

// Validamos y sanitizamos (si es necesario) los datos
if(!validateEmail($userId)) {
    jsonResponse(400, 'El email no es válido');
}

// Validamos las credenciales
if (!authenticate($userId, $password)) {
    jsonResponse(401, 'El email o la contraseña no son válidos');
}

// Si las credenciales son válidas iniciamos o recuperamos la sesión
$_SESSION['userId'] = $userId;

// Revisamos si el remember me está seleccionado y creamos cookie de remember (que dura un mes)
if (isset($_POST['rememberMe']) && $_POST['rememberMe'] === 'true') {
    setcookie('rememberMe', $userId, time() + (3600 * 24 * 30), $httponly = true);
}

jsonResponse(200, ['Usuario logueado', $userId, $_POST['rememberMe']]);
