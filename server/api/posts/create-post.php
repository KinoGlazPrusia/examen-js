<?php
// Carreguem móduls necessaris
include('../../env.php');
include('../../utils/common/responses.php');
include('../../utils/common/validators.php');
include('../../utils/common/sanitizers.php');
include('../../utils/common/auth.php');

// Iniciem o recuperem la sessió
session_start();

// Revisem que l'usuari estigui loguejat (si hi hagués permisos o revisariem aquí)
if (!isset($_SESSION['userId'])) jsonResponse(401, 'El usuario no está logueado');
$userId = $_SESSION['userId'];

// Revisem la request y recuperem les dades
if(!isset($_POST['title']) || !isset($_POST['content'])) jsonResponse(400, 'Falten dades a la request');

$postTitle = sanitize($_POST['title']);
$postContent = sanitize($_POST['content']);

// Creariem un objecte POST
$newPost = [
    'title' => $postTitle,
    'content' => $postContent
];

// El carregariem a la base de dades

// Tornem resposta
jsonResponse(200, ["Nou post creat", $newPost]);