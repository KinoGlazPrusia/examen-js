<?php

function jsonResponse($status, $message) {
    $response = [
        'status' => $status,
        'message' => $message
    ];
    /* http_response_code($status); */
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}