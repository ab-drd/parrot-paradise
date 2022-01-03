<?php
    session_start();

    setcookie("user_id", "", time() - 3600);

    session_unset();
    session_destroy();

    header("location: ../../game.php");
?>