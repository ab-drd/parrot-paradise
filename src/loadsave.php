<?php
    if (isset($_GET["uid"])) {
        require_once "./includes/connect.inc.php";

        $user_id = $_GET["uid"];

        $dataQ = "SELECT * FROM save WHERE user_id = $user_id";

        
    }
?>