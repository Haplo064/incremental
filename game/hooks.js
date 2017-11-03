$(document).ready(function() {
    for(var i = 0; i < tier1.length; i++) {
        var name = tier1[i];
        document.getElementById(name+'Add').addEventListener('click', function() {addResource(tier1[i],1);console.log(name);console.log(tier1[i])}, false);
    }
});
function addResource(x,y) {
   return window[x] += y;
};