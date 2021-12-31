function validateCredentials(){
   var fname = document.getElementById("fname");
   var lname = document.getElementById("lname");
   var company =  document.getElementById("company");
   var subject = document.getElementById("choice");
   var mail = document.getElementById("mail");
   var contact = document.getElementById("phone");
   var area = document.getElementById("code");
   var alphaRegex = /^[a-zA-Z]+$/;
   var emailRegex = /^([a-z]+)([0-9]*)(@gmail)(\.com)$/;
   var phoneRegex = /^[6789]{1}[0-9]{9}$/;
   var areaCodeRegex = /^\+[0-9]+$/;
   if(alphaRegex.test(fname.value) == false)
   {
    fname.style.border = "2px red solid";
    alert("Firstname should contain only alphabets");
    return false;
   }
   else if(alphaRegex.test(lname.value) == false)
   {
    lname.style.border = "2px red solid";
    alert("Lastname should contain only alphabets");
    return false;
   }
   else if(alphaRegex.test(company.value) == false)
   {
    company.style.border = "2px red solid";
    alert("Company name should contain only alphabets");
    return false;
   }
   else if(emailRegex.test(mail.value) == false)
   {
       document.write(mail.value);
    mail.style.border = "2px red solid";
    alert("Username should contain only alphabets and domain name should be gmail");
    return false;
   }
   else if(alphaRegex.test(subject.options[subject.selectedIndex].value) == false)
   {
    subject.style.border = "2px red solid";
    alert("Subject name should contain only alphabets");
    return false;  
   }
   else if(areaCodeRegex.test(area.value) == false)
   {
    area.style.border = "2px red solid";
    alert("Enter valid area code");
    return false;  
   }
   else if(phoneRegex.test(contact.value) == false)
   {
    contact.style.border = "2px red solid";
    alert("Phone number should starts with 6/7/8/9 and should contain only 10 digits");
    return false;  
   }
}