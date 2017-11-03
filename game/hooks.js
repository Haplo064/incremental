window.onload = function(){
    document.getElementById('woodAdd').onclick = addWood(1);
};
function addWood(x) {
    console.log(wood);
    console.log(x);
    return wood += x;
}
