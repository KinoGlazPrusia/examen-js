<?php

// Cargamos módulos y funcionalidades.
include('../../utils/common/responses.php');

// Iniciamos o recuperamos sesión
session_start();

// Destruimos la sesión y eliminamos las cookies
setcookie('rememberMe', '', time() - 3600);
session_destroy();

// Devolvemos la respuesta
jsonResponse(200, 'El usuario ha hecho logout');