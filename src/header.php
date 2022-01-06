<?php
    session_start();
?>

<head>
    <link rel="stylesheet" href="../styles/header.css">
</head>
<header>
    <div class="top-bar">
        <div>
        <ul class="top-links left">
            <li><div>|</div></li>
            <li><a href="./game.php" target="_self"><b>Parrot Paradise</b></a></li>
            <li><div>|</div></li>
            <li><a href="https://github.com/ab-drd" target="blank">gitHub</a></li>
            <li><div>|</div></li>
            <li><a href="https://www.youtube.com/channel/UCMfdBZNFKJyljxu50-zLvrQ" target="blank">YouTube</a></li>
            <li><div>|</div></li>
        </ul>
        </div>
        <div>
        <ul class="top-links right">
            <li><div>|</div></li>
            <?php
                if (isset($_SESSION["username"])) {
                    echo '<li>Welcome, ' . $_SESSION['username'] . '</li>';
                    echo '<li><div>|</div></li>';
                    echo '<li><a id="logout" href="./src/includes/logout.inc.php">LOG OUT</a></li>';
                }
                else {
                    echo '<li id="signup"><a href="./signup.php">SIGN UP</a></li>';
                    echo '<li><div>|</div></li>';
                    echo '<li id="login"><a href="./login.php">LOG IN</a></li>';
                }
            ?>
            <li><div>|</div></li>
        </ul>
        </div>
    </div>
</header>
