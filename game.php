<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="./styles/main.css">
        <title>Parrot Paradise</title>
    </head>
    <?php require_once "./src/header.php" ?>
    <body>
        <div class="drg-cont game-screen">
            <div class="left-side">
                <div class="main-clickable">
                    <button id="seed-btn">Get seeds!</button>
                    <div id="seed-counter"></div>
                    <button class="save-btn">SAVE</button>
                    <div class="save-msg"></div>
                    <button class="load-btn">LOAD</button>
                    <div class="load-msg"></div>
                </div>
            </div>
            <div class="separator"></div>
            <div class="right-side">
                <ul class="resource-items">
                    <li class="disabled visible no-seed" id="budgie">
                        <div class="parrot-name">
                            Budgie
                        </div>
                        <button class="buy-btns">Buy</button>
                        <div class="info">
                            <div>Cost: </div>
                            <div class="current-price"></div>
                        </div>
                        <div class="info">
                            <div>Amount: </div>
                            <div class="parrot-count"></div>
                        </div>
                        <img class="parrot-imgs" src="./src/images/budgie.png">
                    </li>
                    <li class="disabled hidden no-seed" id="cockatiel">
                        <div class="parrot-name">
                            Cockatiel
                        </div>
                        <button class="buy-btns">Buy</button>
                        <div class="info">
                            <div>Cost: </div>
                            <div class="current-price"></div>
                        </div>
                        <div class="info">
                            <div>Amount: </div>
                            <div class="parrot-count"></div>
                        </div>
                        <img class="parrot-imgs" src="./src/images/parrot1.png">
                    </li>
                    <li class="disabled hidden no-seed" id="indian_ringneck">
                        <div class="parrot-name">
                            Indian Ringneck
                        </div>
                        <button class="buy-btns">Buy</button>
                        <div class="info">
                            <div>Cost: </div>
                            <div class="current-price"></div>
                        </div>
                        <div class="info">
                            <div>Amount: </div>
                            <div class="parrot-count"></div>
                        </div>
                        <img class="parrot-imgs" src="./src/images/parrot1.png">
                    </li>
                    <li class="disabled hidden no-seed" id="conure">
                        <div class="parrot-name">
                            Conure
                        </div>
                        <button class="buy-btns">Buy</button>
                        <div class="info">
                            <div>Cost: </div>
                            <div class="current-price"></div>
                        </div>
                        <div class="info">
                            <div>Amount: </div>
                            <div class="parrot-count"></div>
                        </div>
                        <img class="parrot-imgs" src="./src/images/parrot1.png">
                    </li>
                    <li class="disabled hidden no-seed" id="cockatoo">
                        <div class="parrot-name">
                            Cockatoo
                        </div>
                        <button class="buy-btns">Buy</button>
                        <div class="info">
                            <div>Cost: </div>
                            <div class="current-price"></div>
                        </div>
                        <div class="info">
                            <div>Amount: </div>
                            <div class="parrot-count"></div>
                        </div>
                        <img class="parrot-imgs" src="./src/images/parrot1.png">
                    </li>
                    <li class="disabled hidden no-seed" id="macaw">
                        <div class="parrot-name">
                            Macaw
                        </div>
                        <button class="buy-btns">Buy</button>
                        <div class="info">
                            <div>Cost: </div>
                            <div class="current-price"></div>
                        </div>
                        <div class="info">
                            <div>Amount: </div>
                            <div class="parrot-count"></div>
                        </div>
                        <img class="parrot-imgs" src="./src/images/parrot1.png">
                    </li>
                </ul>
            </div>
            
            
        </div>
    </body>
    <script src="scripts/game.js"></script>
</html>