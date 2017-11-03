window.onload = function(){

    var myVar = setInterval(loop, 100);

    setInterval(loop, 250);

    function loop( )
    {
        document.getElementById('woodTotal').innerHTML=wood;
    }

};