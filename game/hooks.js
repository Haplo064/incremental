window.onload = function(){
    document.getElementById('woodAdd').addEventListener('click', function() {addWood(1)}, false);
};
function addWood(x) {
    console.log(wood);
    console.log(x);
    return wood += x;
}
