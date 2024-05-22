<?php

function validateName($string) {
    return strlen($string) > 0 ? true : false;
}

function validateEmail($email) {
    return strlen($email) > 0 && filter_var($email, FILTER_VALIDATE_EMAIL) ? true : false;
}

function validatePassword($password) {
    return strlen($password) > 0 ? true : false;
}

function validateBirthday($input) {
    return true;
}

function validateRegister($sanitizedData) {
    if(!validateName($sanitizedData['fname'])) return false;
    if(!validateName($sanitizedData['lname'])) return false;
    if(!validateEmail($sanitizedData['email'])) return false;
    if(!validateBirthday($sanitizedData['birthday'])) return false;
    if(!validatePassword($sanitizedData['password'])) return false;
    return true;
}

