window.onload = function(){
    document.getElementById('woodAdd').addEventListener('click', addWood(1), false);
};
function addWood(x) {
    console.log(wood);
    console.log(x);
    return wood += x;
}
