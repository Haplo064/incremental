$(document).ready(function() {
    document.getElementById('woodAdd').addEventListener('click', function() {addWood(1)}, false);
    document.getElementById('stoneAdd').addEventListener('click', function() {addStone(1)}, false);
    document.getElementById('foodAdd').addEventListener('click', function() {addFood(1)}, false);
    document.getElementById('crystalAdd').addEventListener('click', function() {addCrystal(1)}, false);
});
function addWood(x) {
    return wood += x;
}

function addStone(x) {
    return stone += x;
}

function addFood(x) {
    return food += x;
}

function addCrystal(x) {
    return crystal += x;
}
