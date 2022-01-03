<?php
    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        require_once 'function.inc.php';
        require_once "connect.inc.php";

        loginUser($db_connection, $username, $password);
    }
    else {
        header("location: ../../login.php");
        exit();
    }
?>