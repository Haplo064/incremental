$(document).ready(function() {
    for(var i = 0; i < tier1.length; i++) {
        document.getElementById(tier1[i]+'Add').addEventListener('click', function() {addResource(tier1[i],1)}, false);
    }
});
function addResource(x,y) {
    return window[x] += y;
};