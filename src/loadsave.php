<?php
    if (isset($_GET["uid"])) {
        require_once "./includes/connect.inc.php";

        $user_id = $_GET["uid"];

        $query = "SELECT * FROM save WHERE user_id = $1";
        $statement = pg_prepare($db_connection, "getSaveData", $query);
        
        if (!$statement) {
            exit();
        }

        $res = pg_execute($db_connection, "getSaveData", array($user_id));
        if ($row = pg_fetch_assoc($res)) {
            echo json_encode($row);
        }
        else {
            echo 0;
        }
    }
?>