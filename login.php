<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <title>Parrot Paradise | Log in</title>
        <link rel="icon" href="./images/icon.png">
        <link rel="stylesheet" href="./styles/auth.css">
    </head>
    <body>
        <?php require_once "./src/header.php"?>
        <div class="form-container">
            <form action="./src/includes/login.inc.php" method="post" class="form" id="login">
                <h1 class="form-title">Login</h1>
                <div class="form-input-grp">
                    <input type="text" class="form-input" name="username" autofocus placeholder="Username" required>
                </div>
                <div class="form-input-grp">
                    <input type="password" class="form-input" name="password" autofocus placeholder="Password" required>
                </div>
                <input class="form-btn" type="submit" name="submit" value="Login">
                <?php
                    if (isset($_GET["error"])) {
                        if ($_GET["error"] == "connectionfailed") {
                            echo "<p class='form-message'>Something went wrong, please try again later</p>";
                        }
                        else if ($_GET["error"] == "wrongsignin") {
                            echo "<p class='form-message'>Incorrect username/password</p>";
                        }
                    }
                ?>
                <p class="form-text">
                    <a lass="form-link" href="./signup.php" id="linkCreateAccount"> Don't have an account? Create one!</a>
                </p>
            </form>
        </div>
        <?php require_once "./src/footer.html" ?>
    </body>
</html>