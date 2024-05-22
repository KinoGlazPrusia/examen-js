<?php
// Cargamos módulos y funcionalidades.
include('../../env.php');
include('../../utils/common/responses.php');
include('../../utils/common/validators.php');
include('../../utils/common/auth.php');

// Iniciamos o recuperamos sesión
session_start();

// Revisamos si el usuario ya está logueado
if (!isset($_SESSION['userId'])) jsonResponse(401, 'El usuario no está logueado');
$userId = $_SESSION['userId'];

// Creem un array asociatiu on la clau correspon a cada amic y el valor a la llista d'amics de cada amic
$friends = USER_FRIENDS[$userId];
$suggestedFriends = [];
$sharedFriends = [];

foreach($friends as $friend) {
    if (array_key_exists($friend['email'], FAKE_USER_TABLE)) {
        $possibleFriends = USER_FRIENDS[$friend['email']];
        foreach($possibleFriends as $possibleFriend) {
            if (in_array($possibleFriend, $friends)) {
                if (!array_key_exists($friend['email'], $sharedFriends)) $sharedFriends[$friend['email']] = [];
                
                // Si el possible amic està al nostre array de friends
                array_push($sharedFriends[$friend['email']], $possibleFriend);
            } else {
                if (!in_array($possibleFriend, $suggestedFriends)) {
                    array_push($suggestedFriends, $possibleFriend);
                }
            }
        }
    }
}

jsonResponse(200, ['sharedFriends' => $sharedFriends, 'suggestedFriends' => $suggestedFriends]);