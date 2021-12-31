function validateForm() {
    var uname = document.getElementById("uname").value.trim();
    var psw = document.getElementById("psw").value.trim();
    
    if(uname == "" && psw == "")
    {
    alert("username and password cant be blank");
    return false;
    }
    else if(uname == "" && psw != "")
    {
    alert("username cant be blank");
    return false;
    }
    else if(uname != "" && psw == "")
    {
    alert("password cant be blank");
    return false;
    }
}