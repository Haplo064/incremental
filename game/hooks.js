$(document).ready(function() {
    for(i = 0; i < tier1.length; i++) {
        (function() {
            var name = tier1[i];
            document.getElementById(name+'Add').addEventListener('click', function() {window[name]+=1;}, false);
        }());}
    })