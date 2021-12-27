function focusText() {
    var clickText= document.getElementById("click-text");
    clickText.style.background = "rgb(245, 143, 245)";
}
function unfocusText() {
    var clickText= document.getElementById("click-text");
    clickText.style.background = "white";
}
function displayText() {
    var curDate = Date();
    document.getElementById("click-text").style.width = "120px";
    document.getElementById("click-text").style.height = "100px";
    document.getElementById("click-text").style.textAlign = "center";
    document.getElementById("click-text").style.border = "3px black solid";
    document.getElementById("click-text").value = curDate.substring(8,24);
    
}
function mouseOver() {
    document.getElementById("click-btn").style.background = "blue";
    document.getElementById("click-btn").style.color = "white";
    document.getElementById("click-btn").style.border = "3px black solid";
    document.getElementById("tip").style.visibility = "visible";
}
function mouseOut() {
    document.getElementById("click-btn").style.background = "rgb(221, 219, 219)";
    document.getElementById("click-btn").style.color = "black";
    document.getElementById("click-btn").style.border = "1px black solid";
    document.getElementById("tip").style.visibility = "hidden";
}