<?php

function sanitize($input) {
    $sanitized = trim($input);
    $sanitized = stripslashes($sanitized);
    $sanitized = htmlspecialchars($sanitized);
    return $sanitized;
}