//random background images

let body = document.body;
let bodyBackgroundImages = ['Background1.png', 'Background2.png', 'Background3.png'];

function random() {
    let randomIndexBg = Math.floor(Math.random() * bodyBackgroundImages.length);
    let randomBodyBackgroundImage = bodyBackgroundImages[randomIndexBg];
    body.style.backgroundImage = `url('${randomBodyBackgroundImage}')`;
}

window.onload = random;

//date and time
const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
    setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
    let today = new Date();

    // return number
    let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const dayWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month", "year"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], year];
    for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
}

updateDate();

//random weapon choice
let weapons = ['Bloodscythe', 'Daedric Sword', 'ClockFang', 'Dawnbreaker', 'Dragonbane', 'Drainheart',
    'Forsworn', 'Gauldur', 'Grimsever', 'Glassheart', 'Lunar Iron', 'Honed Famler', 'Steel Knuckle', 'Double Dragon Slit', 'Miraaks Vision',
    'Paralysis Stave', 'Silds Stave', 'Daedric Command', 'Trapping', 'Flame Atronach', 'Ivory Blade', 'Oseph Dagger'];

function selectRandomWeapon() {
    let randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}

let randomWeapon = selectRandomWeapon();

let weaponInsert = document.getElementById('weapon');
weaponInsert.innerText = randomWeapon;

//random health percentage
function health() {
    return Math.floor(Math.random() * 100);
}

let randomHealth = health();

let healthInsert = document.getElementById('health');
healthInsert.innerText = randomHealth;

if (randomHealth <= 20) {
    healthInsert.style.backgroundColor = 'red';
    healthInsert.style.color = 'white';
} else {
    healthInsert.style.backgroundColor = '';
};

//changing definition box blur on click

let blurInterval = setInterval(() => {
    let blurHideAmount = Math.random() * 4 + 2;
    description.style.filter = `blur(${blurHideAmount}px)`;
}, 100);

let unlockButton = document.getElementById('unlock');
let description = document.getElementById('description-list')

unlockButton.addEventListener('click', function () {
    description.style.filter = 'blur(0px)';
    unlockButton.style.display = 'none';
    clearInterval(blurInterval);
});

//changing inventory status

let inventoryStatus = document.getElementById('inventory');

unlockButton.addEventListener('click', function () {
    inventoryStatus.innerHTML = ' Unlocked';
});

