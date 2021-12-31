function clickEvent() {
    /*var name = document.getElementById("name").value;
    var pass = document.getElementById("psw").value;
    if(name == pass)
    alert("both matches");
    else
    alert("both not matches");

    var male = document.getElementById("m");
    var female = document.getElementById("f");
    if(male.checked == true)
    document.write(male.value);
    else if(female.checked == true)
    document.write(female.value);*/

    var select = document.getElementById("select");
    alert(select.options[select.selectedIndex].value);
    
}