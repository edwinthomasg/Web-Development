// addEventListener('submit',(e)=>{
//     e.preventDefault();
//     validateRequiredField();
// })
var alphaRegex = /^[a-zA-Z]+$/;
var emailRegex = /^[a-z]+[0-9]*@[a-z]+.com$/;
var phoneRegex = /^[6789]{1}[0-9]{9}$/;
var areaCodeRegex = /^\+[0-9]+$/;


function validateRequiredField()
{
    var fullName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var companyName = document.getElementById("company-name");
    var userEmail = document.getElementById("user-email");
    var areaCode = document.getElementById("area-code");
    var userNumber = document.getElementById("user-number");
    var subjectChoice = document.getElementById("subject-choice");
    var customerText = document.getElementById("customer-text");
    var custYes = document.getElementById("cust-yes");
    var custNo = document.getElementById("cust-no");
    var subject = document.getElementById("subject-choice");
    
   

    if(fullName.value.trim() == "" && lastName.value.trim() == "" && companyName.value.trim() == "" && userEmail.value.trim() == "" && 
    areaCode.value.trim() == "" && userNumber.value.trim() == "" && subject.options[subject.selectedIndex].value == "Chooseoption" )
    {
        
        for(var itr = 0;itr < document.getElementsByTagName("p").length-1; itr++)
        document.getElementsByTagName("p")[itr].style.visibility = "visible";
        for(var itr = 0;itr < document.getElementsByTagName("input").length; itr++)
        document.getElementsByTagName("input")[itr].style.border = "2px red solid";
        subject.style.border = "2px red solid";
        return false;
    }
    else{
        for(var itr = 0;itr < document.getElementsByTagName("p").length-1; itr++)
        document.getElementsByTagName("p")[itr].style.visibility = "hidden";
        for(var itr = 0;itr < document.getElementsByTagName("input").length; itr++)
        document.getElementsByTagName("input")[itr].style.border = "2px black solid";
        subject.style.border = "2px black solid";
    }
    if(fullName.value.trim() != ""){
        var fullNameValid = validateText(fullName.value.trim());
        if(fullNameValid == false)
        {
            fullName.style.border = "2px red solid";
            document.getElementById("firstname-error").innerHTML = "This field should contain only alphabets";
            document.getElementById("firstname-error").style.visibility = "visible";
           
        }
        else{
            fullName.style.border = "2px green solid";
            document.getElementById("firstname-error").style.visibility = "hidden";
        }
    }
    else{
        fullName.style.border = "2px red solid";
        document.getElementById("firstname-error").style.visibility = "visible";
        
    }
    if(lastName.value.trim() != ""){
        var lastNameValid = validateText(lastName.value.trim());
        if(lastNameValid == false)
        {
            lastName.style.border = "2px red solid";
            document.getElementById("lastname-error").innerHTML = "This field should contain only alphabets";
            document.getElementById("lastname-error").style.visibility = "visible";
        }
        else{
            lastName.style.border = "2px green solid";
            document.getElementById("lastname-error").style.visibility = "hidden";
        }
       
    }
    else{
        lastName.style.border = "2px red solid";
        document.getElementById("lastname-error").style.visibility = "visible";
    }
    if(companyName.value.trim() != ""){
        var companyValid = validateText(companyName.value.trim());
        if(companyValid == false)
        {
            companyName.style.border = "2px red solid";
            document.getElementById("company-error").innerHTML = "This field should contain only alphabets";
            document.getElementById("company-error").style.visibility = "visible";
        }
        else{
            companyName.style.border = "2px green solid";
            document.getElementById("company-error").style.visibility = "hidden";
        }
    }
    else{
        companyName.style.border = "2px red solid";
        document.getElementById("company-error").style.visibility = "visible";
    }
    if(userEmail.value.trim() != ""){
        var emailValid = validateEmail(userEmail.value.trim());
        if(emailValid == false)
        {
            userEmail.style.border = "2px red solid";
            document.getElementById("email-error").innerHTML = "username should starts with lowercase followed by digits if any, domain should be lowercase characters";
            document.getElementById("email-error").style.visibility = "visible";
        }
        else{
            userEmail.style.border = "2px green solid";
            document.getElementById("email-error").style.visibility = "hidden";
        }
    }
    else{
        userEmail.style.border = "2px red solid";
        document.getElementById("email-error").style.visibility = "visible";
    }
    if(areaCode.value.trim() != ""){
        var areaValid = validateArea(areaCode.value.trim());
        if(areaValid == false)
        {
            areaCode.style.border = "2px red solid";
            document.getElementById("area-error").innerHTML = "Enter valid area code";
            document.getElementById("area-error").style.visibility = "visible";
        }
        else{
            areaCode.style.border = "2px green solid";
            document.getElementById("area-error").style.visibility = "hidden";
        }
    }
    else{
        areaCode.style.border = "2px red solid";
        document.getElementById("area-error").style.visibility = "visible";
    }
    if(userNumber.value.trim() != ""){
        var numberValid = validateNumber(userNumber.value.trim());
        if(numberValid == false)
        {
            userNumber.style.border = "2px red solid";
            document.getElementById("number-error").innerHTML = "Phone number should starts with 6/7/8/9 and should contain only 10 digits";
            document.getElementById("number-error").style.visibility = "visible";
            document.getElementById("number-error").style.left = "300px";
        }
        else{
            userNumber.style.border = "2px green solid";
            document.getElementById("number-error").style.visibility = "hidden";
        }
    }
    else{
        userNumber.style.border = "2px red solid";
        document.getElementById("number-error").style.visibility = "visible";
    }
    if(subject.options[subject.selectedIndex].value == "Chooseoption")
    {
        subject.style.border = "2px red solid";
        document.getElementById("subject-error").style.visibility = "visible";
    }
    else{
        subject.style.border = "2px green solid";
        document.getElementById("subject-error").style.visibility = "hidden";
    }

    if(fullNameValid == true && lastNameValid == true && companyValid == true && emailValid == true && areaValid == true 
        && numberValid == true && subject.options[subject.selectedIndex].value != "Chooseoption")
    return true;
    else 
     return false;
}

function validateText(text)
{
         console.log(text);
         if(alphaRegex.test(text) == false)
         return false;
         else
         return true;
}
function validateEmail(mail)
{
    if(emailRegex.test(mail) == false)
         return false;
         else
         return true;
}
function validateArea(area)
{
    if(areaCodeRegex.test(area) == false)
         return false;
         else
         return true;
}
function validateNumber(number)
{
    if(phoneRegex.test(number) == false)
    return false;
    else
    return true;
}