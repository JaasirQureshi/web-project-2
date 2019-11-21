function start()
{
    document.getElementById("mount");
    document.getElementById("jungle");
    document.getElementById("ocean");
    document.getElementById("desert");
    document.getElementById("bleach");
    document.getElementById("home").style.backgroundImage = "bg5.jpg";
}

function homeImg()
{
    document.body.style.backgroundImage = "('bg5.jpg')";
}   

window.addEventListener("load", start, false);