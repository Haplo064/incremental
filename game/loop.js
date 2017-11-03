window.onload = function(){

    var myVar = setInterval(loop, 10);

    setInterval(loop, 250);

    function loop( )
    {
        for(var i = 0; i < tier1.length; i++) {
            document.getElementById(tier1[i]+'Total').innerHTML=tier1[i];
        }

    }

};