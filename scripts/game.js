const parrots = [document.getElementById('budgie'), 
              document.getElementById('cockatiel'), document.getElementById('indian_ringneck'),
              document.getElementById('conure'), document.getElementById('cockatoo'),
              document.getElementById('macaw')];
const setYield = [1, 2, 3, 5, 10, 20];
//let setPrice = [10, 50, 200, 1000, 10000, 50000];
let setPrice = [1, 2, 3, 4, 5, 6];
const multipliers = [1.2, 1.3, 1.32, 1.38, 1.45, 1.5];
const timers = [1000, 1500, 2000, 3000, 5000, 5000];

let parrot_count = document.getElementsByClassName("parrot-count");
let current_price = document.getElementsByClassName("current-price");

let resource_btns = document.getElementsByClassName("buy-btns");
let seed_btn = document.getElementById("seed-btn");
let seed_counter = document.getElementById("seed-counter");

let seedCounter = 0;
seed_btn.addEventListener("click", increaseResource);
for (let i = 0; i < resource_btns.length; i++) {
    resource_btns[i].addEventListener("click", spendResource);
}

function init() {
    seed_counter.textContent = 0;
    for (let i = 0; i < parrot_count.length; i++) {
        parrot_count[i].textContent = 0;
    }
    for (let i = 0; i < current_price.length; i++) {
        current_price[i].textContent = setPrice[i];
    }

    if (getCookie("user_id")) {
        fetchSaveData();
        document.getElementById("logout").addEventListener("click", function() {
            autosave();
            alert("Save data stored. Logged out.");
        });
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
    setPrice[parrotIndex] = Math.round(setPrice[parrotIndex] * Math.pow(multipliers[parrotIndex], 
                                        parseInt(parrot_count[parrotIndex].textContent) + 1));

    renderPrice(setPrice, parrotIndex);
    renderSeeds();

    setParrotCount(parrotIndex, parseInt(counter.textContent) + 1);
}

function setParrotCount(index, count) {
    parrots[index].getElementsByClassName("parrot-count")[0].textContent = count;
}

function renderSeeds() {
    seed_counter.textContent = seedCounter;
    checkAvailability();
}

function checkAvailability() {
    for (let i = 0; i < parrots.length; i++) {
        if (parrots[i].classList.contains('disabled')) {
            if (seedCounter >= setPrice[i]) {
                parrots[i].classList.remove('disabled');
                parrots[i].classList.add('enabled');
            }
            
            if (i < parrots.length - 1 && !parrots[i].classList.contains('disabled')) {
                setVisible(i+1);
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

function setVisible(index) {
    parrots[index].classList.remove('hidden');
    parrots[index].classList.add('visible');
}

function renderPrice(array, index) {
    current_price[index].textContent = array[index];
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

function autosave() {
    let uid = getCookie("user_id");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            showSavePopup();
        }
    }

    unlocked = parrots.length - 1;

    for (let i = 0; i < parrots.length; i++) {
        if (parrots[i].classList.contains("disabled")) {
            unlocked = i;
            break;
        }
    }

    let parameters = `uid=${uid}&seeds=${seed_counter.textContent}&unlocked=${unlocked}&`;
    
    for (let i = 0; i < parrot_count.length; i++) {
        let count = parrot_count[i].textContent;
        parameters += `parrot_${i}=${count}&`;
    }

    for (let i = 0; i < setPrice.length; i++) {
        let price = setPrice[i];
        parameters += `parrot_p_${i}=${price}&`;
    }

    xmlhttp.open("GET", "./src/autosave.php?" + parameters, true);
    xmlhttp.send();
}

function fetchSaveData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText) {
                data = JSON.parse(this.responseText);
                renderSaveData(data);
            }
        }
    }

    let uid = getCookie("user_id");

    xmlhttp.open("GET", "./src/loadsave.php?uid=" + uid, true);
    xmlhttp.send();
}

function renderSaveData(data) {
    if (data) {
        seedCounter = parseInt(data['seeds']);
        unlocked = parseInt(data["unlocked"]);

        renderSeeds();
    
        for (let i = 0; i < parrot_count.length; i++) {
            setParrotCount(i, data['parrot_' + i]);
            setPrice[i] = data['parrot_p_' + i];
            renderPrice(setPrice, i);
        }

        checkDisabled(unlocked);
    }
}

function getSeeds() {
    for (let i = 0; i < parrots.length; i++) {
        if ('disabled' in parrots[i].classList) {
            break;
        }
        else {
            setInterval (function() {
                seedCounter += Math.round((setYield[i] * parrot_count[i].textContent));
                renderSeeds();
            }, timers[i]);
        }
    }
}

function checkDisabled(unlocked) {
    for (let i = 0; i <= unlocked; i++) {
        parrots[i].classList.remove("disabled");
    }

    if (unlocked < parrots.length + 1) {
        setVisible(unlocked + 1);
    }
}

function showSavePopup() {
    let popup = document.getElementById("popup");
    popup.classList.toggle("show");
    setTimeout(function() {
        popup.classList.toggle("show");
    }, 1500)
}

init();
getSeeds();
setInterval(autosave, 300000);