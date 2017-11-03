$(document).ready(function() {
    for(var i = 0; i < tier1.length; i++) {
        var name = tier1[i];
        document.getElementById(name+'Add').addEventListener('click', function() {addResource(name,1)}, false);
    }
});
function addResource(x,y) {
   return window[x] += y;
};