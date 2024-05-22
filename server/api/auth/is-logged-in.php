<?php
// Cargamos módulos y funcionalidades.
include('../../env.php');
include('../../utils/common/responses.php');
include('../../utils/common/auth.php');

// Iniciamos o recuperamos sesión
session_start();

if (isset($_SESSION['userId'])) {
    jsonResponse(200, 'El usuario ya tiene una sesión activa');
}

// Si el usuario no está logueado pero tiene la cookie "rememberMe" le autologueamos
if (isset($_COOKIE['rememberMe'])) {
    $_SESSION['userId'] = $_COOKIE['rememberMe'];
    jsonResponse(200, 'El usuario es recordado');
}

// Sino está logueado ni tiene la cookie
jsonResponse(401, 'El usuario no tiene una sesión activa');