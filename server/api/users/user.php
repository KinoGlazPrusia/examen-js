<?php
// Cargamos módulos y funcionalidades.
include('../../env.php');
include('../../utils/common/responses.php');

// Iniciamos o recuperamos sesión
session_start();

// Recuperamos los datos de la DB
$user = $_SESSION['userId'];
$userData = FAKE_USER_TABLE[$user];

jsonResponse(200, $userData);
