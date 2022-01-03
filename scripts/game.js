const parrots = [document.getElementById('budgie'), 
              document.getElementById('cockatiel'), document.getElementById('indian_ringneck'),
              document.getElementById('conure'), document.getElementById('cockatoo'),
              document.getElementById('macaw')];
const setYield = [1, 2, 3, 5, 10, 20];
// let setPrice = [10, 50, 200, 1000, 10000, 50000];
let setPrice = [1, 2, 3, 4, 5, 6];
const multipliers = [1.2, 1.3, 1.32, 1.38, 1.45, 1.5];

let parrot_count = document.getElementsByClassName("parrot-count");
let current_price = document.getElementsByClassName("current-price");

let resource_btns = document.getElementsByClassName("buy-btns");
let seed_btn = document.getElementById("seed-btn");
let seed_counter = document.getElementById("seed-counter");

init();

let seedCounter = 0;
seed_btn.addEventListener("click", increaseResource);
for (let i = 0; i < resource_btns.length; i++) {
    resource_btns[i].addEventListener("click", spendResource);
}

function init() {
    let cookie_value = getCookie("user_id");
    if (cookie_value) {
        fetchSaveData(cookie_value);
    }
    else {
        seed_counter.textContent = 0;
        for (let i = 0; i < parrot_count.length; i++) {
            parrot_count[i].textContent = 0;
        }
        for (let i = 0; i < current_price.length; i++) {
            current_price[i].textContent = setPrice[i];
        }
    }
}

function increaseResource() {
    seedCounter++;
    renderSeeds();
}

function spendResource(e) {
    let button = e.target;
    let currentParrot = button.parentElement;
    let parrotIndex = parrots.indexOf(currentParrot);
    let counter = currentParrot.getElementsByClassName("parrot-count")[0];

    seedCounter -= setPrice[parrotIndex];
    updatePrice(parrotIndex);
    renderSeeds();

    counter.textContent++;
}

function renderSeeds() {
    seed_counter.textContent = seedCounter;
    checkAvailability();
}

function checkAvailability() {
    for (let i = 0; i < parrots.length; i++) {
        if (parrots[i].classList.contains('disabled') && seedCounter >= setPrice[i]) {
            parrots[i].classList.remove('disabled');
            parrots[i].classList.add('enabled');

            if (i < parrots.length - 1) {
                parrots[i + 1].classList.remove('hidden');
                parrots[i + 1].classList.add('visible');
            }
        }
    }

    for (let i = 0; i < parrots.length; i++) {
        if (parrots[i].classList.contains('enabled') && seedCounter < setPrice[i]) {
            parrots[i].classList.add('no-seed');
        }
        else if (seedCounter >= setPrice[i]) {
            parrots[i].classList.remove('no-seed');
        }
    }
}

function updatePrice(index) {
    setPrice[index] = Math.round(setPrice[index] * Math.pow(multipliers[index], parseInt(parrot_count[index].textContent) + 1));
    renderPrice(index);
}

function renderPrice(index) {
    current_price[index].textContent = setPrice[index];
}

function update() {
    for (let i = 0; i < parrots.length; i++) {
        if ('disabled' in parrots[i].classList) {
            break;
        }
        seedCounter += Math.round((setYield[i] * parrot_count[i].textContent));
    }
    renderSeeds();
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return false;
}

function fetchSaveData(user_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            try {
                data = JSON.parse(this.responseText);
            }
            catch(err) {
                seed_counter.textContent = err;
                data = "";
            }
            finally {
                rednerSaveData(data);
            }
        }
    }

    xmlhttp.open("GET", "./src/requestHandler.php?uid=" + user_id, true);
    xmlhttp.send();
}

function rednerSaveData(data) {

}