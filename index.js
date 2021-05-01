document.getElementById("head").style.display = "none";

function ColorChange()
{
    document.getElementById("head").style.display = "block";
    document.getElementById("t").style.display = "none";
    colors = ["green", "black", "blue", "red", "pink", "gold","purple","orange","yellow","grey","brown","cyan","lime"]
    var ran = Math.floor(Math.random()*colors.length)
    if(colors[ran]==="black" || colors[ran]==="brown")
    {
        document.getElementById("head").style.color = "white";
        document.getElementById("head").innerHTML = "The colour is : "+ colors[ran];
    }
    else
    {
        document.getElementById("head").style.color = "black";
        document.getElementById("head").innerHTML = "The colour is : "+ colors[ran];
    }
    document.body.style.backgroundColor = colors[ran];
}