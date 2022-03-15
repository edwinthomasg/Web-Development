class Account{
    alphaRegex = /^[a-zA-Z]+$/;
    user = {
    userName : "",
    userPassword : "",
    confirmPassword : "",
    userNameError : "",
    userPasswordError : "",
    confirmPasswordError : ""
  };
    getUserInputs(){
     this.userName = document.getElementById("u-name").value.trim();
     this.userPassword = document.getElementById("u-psw").value.trim();
     this.confirmPassword = document.getElementById("u-cpsw").value.trim();
    }
    validateUserName(){
       console.log(this.userName);
       if(this.userName == "")
        {
          this.userNameError = "Username can't be empty";
          this.displayErrorMessage(this.userNameError,0);
        }
       else if(this.alphaRegex.test(this.userName) == false)
        { 
          this.userNameError = "Should contain only alphabets";
          this.displayErrorMessage(this.userNameError,0);
        }
        else{
            this.removeErrorMessage(0);
            this.userNameError = "";
         }
           }
    displayErrorMessage(message,index){
        let formGroup = document.getElementsByClassName("form-group")[index];
        formGroup.classList.add("invalid");
        formGroup.getElementsByTagName("span")[0].textContent = message;
    }
    removeErrorMessage(index){
     let formGroup = document.getElementsByClassName("form-group")[index];
  formGroup.classList.remove("invalid");
    
 formGroup.classList.add("valid");

        }
    validatePassword(){
         if(this.userPassword == "")
          {
          this.passwordError = "Password can't be empty";
          this.displayErrorMessage(this.passwordError ,1); 
          }
         else{
            this.removeErrorMessage(1);
            this.userPasswordError = "";
            
            }
  
          if(this.confirmPassword == ""){
           this.confirmPasswordError = "This field can't be empty";
          this.displayErrorMessage(this.confirmPasswordError ,2); 
          
          } 
            else{this.removeErrorMessage(2);
              this.confirmPasswordError = "";
              }
    }
    checkPassword(){
      if(this.userPasswordError == "" && this.confirmPasswordError == "")
      {
        if(this.userPassword != this.confirmPassword)
         {
           
           this.displayErrorMessage("Password mismatch",2) }
           else{
             this.removeErrorMessage(2);
           }
      }
    }
    checkFormValid(){
    const formGroup = document.getElementsByClassName("form-group");
    let result = true;
    Array.from(formGroup).forEach(element => {
        if(element.classList.contains("invalid"))
        result = false;
    });
        return result;
}

  }
  const entry = new Account();
  document.getElementsByClassName("form")[0].addEventListener('submit',event => {
        entry.getUserInputs();
        entry.validateUserName();
        entry.validatePassword();
        entry.checkPassword();
       if(entry.checkFormValid() == false)
       event.preventDefault();   
       else
       {
         alert("successfully signed in") 
         document.getElementsByClassName('form')[0].submit();}
       
  });