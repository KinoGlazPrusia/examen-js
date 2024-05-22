<?php
// Carreguem móduls
include('../../env.php');
include('../../utils/common/responses.php');
include('../../utils/common/auth.php');

// Inicialitzem o recuperem la sessió
session_start();

// Revisem que l'usuari està loguejat
if (!isset($_SESSION['userId'])) jsonResponse(401, 'El usuario no está logueado');
$userId = $_SESSION['userId'];

// Revisamos que el usuario existe
if (!userExist($userId)) jsonResponse(401, 'El usuario no existe');

// Revisar si a la request s'inclou un filter
$friends = USER_FRIENDS[$userId];
$filteredFriends = [];

// Si hi ha un filtre (i no està buits), retornem un array filtrat, sino retornem l'array complet
if (isset($_GET['filter']) && isset($_GET['filter-value'])) {
    $filter = $_GET['filter'];
    $filterValue = $_GET['filter-value'];

    if (strlen($filter) > 0 && strlen($filterValue) > 0) {
        $filteredFriends = filter($friends, $filter, $filterValue);
        jsonResponse(200, $filteredFriends);
    }
}

// Si el usuario existe, recuperamos la lista de amigos y la devolvemos al cliente
$friends = USER_FRIENDS[$userId];
jsonResponse(200, $friends);


// Separar aquesta funció a un altre arxiu per a poder reutilitzar-la
function filter($array, $filter, $filterValue) {
    $result = [];
    $filterLen = strlen($filterValue);
    foreach($array as $item) {
        if ($filter === 'name') {
            if (strtolower(substr($item['name'], 0, $filterLen)) === strtolower($filterValue)) {
                array_push($result, $item);
            } 
        } else {
            if (strtolower(substr($item['lastname'], 0, $filterLen)) === strtolower($filterValue)) {
                array_push($result, $item);
                break;
            } 
        }
    }

    return $result;
}
