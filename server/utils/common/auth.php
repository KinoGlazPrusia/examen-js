<?php

function userExist($userId) {
    return array_key_exists($userId, FAKE_DB) ? true : false;
}

function isRemembered() {
    return isset($_COOKIE['rememberMe']) ? true : false;
}

function authenticate($userId, $password) {
    if (!userExist($userId)) {return false;}
    return $password === FAKE_DB[$userId] ? true : false;
}