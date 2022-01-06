<?php
    if (isset($_GET["uid"])) {
        require_once "./includes/connect.inc.php";

        $user_id = $_GET["uid"];

        if (checkSaveExistence($user_id, $db_connection)) {
            deleteSave($user_id, $db_connection);
        }

        $seeds = $_GET["seeds"];
        $parrots = array();
        $parrotPrices = array();

        for ($i = 0; $i < 6; $i++) {
            array_push($parrots, $_GET["parrot_" . $i]);
            array_push($parrotPrices, $_GET["parrot_p_" . $i]);
        }

        $array = array_merge($parrots, $parrotPrices);
        $insertArray = array_merge(array($user_id, $seeds), $array);

        $query = "INSERT INTO save VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);";
        $statement = pg_prepare($db_connection, "create", $query);
        $res = pg_execute($db_connection, "create", $insertArray);

        if ($res) {
            echo "good!";
        }
        else {
            echo "oh no!";
        }
    }
    else {
        echo "hello!";
    }

    function checkSaveExistence($uid, $db_connection) {
        $query = "SELECT * FROM save WHERE save.user_id = $1";
        $statement = pg_prepare($db_connection, "checkSave", $query);

        if (!$statement) {
            exit();
        }

        $res = pg_execute($db_connection, "checkSave", array($uid));

        if ($row = pg_fetch_assoc($res)) {
            return true;
        }
        else {
            return false;
        }
    }

    function deleteSave($uid, $db_connection) {
        $query = "DELETE FROM save WHERE save.user_id = $1";
        $statement = pg_prepare($db_connection, "delSave", $query);

        if (!$statement) {
            exit();
        }

        $res = pg_execute($db_connection, "delSave", array($uid));
    }
?>