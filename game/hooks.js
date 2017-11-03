$(document).ready(function() {
    console.log("Poop");
    document.getElementById('woodAdd').addEventListener('click', function() {addWood(1)}, false);
});
function addWood(x) {
    return wood += x;
}
