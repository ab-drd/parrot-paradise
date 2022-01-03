<?php
    if (isset($_GET["user_id"])) {
        require_once "./includes/connect.inc.php";

        $user_id = $_GET["user_id"];

        $dataQ = "SELECT * FROM ...";
    }
?>