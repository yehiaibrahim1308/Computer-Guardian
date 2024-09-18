 var email = document.forms['form_password']['email'];
 var password = document.forms['form_password']['password'];

 var email1 = document.forms['bolbol']['email2'];
 var password1 = document.forms['bolbol']['password2'];

 
 
 var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 var validRegex2 =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

 var state=false;

 function validated(){
    if (!password.value.match(validRegex2)) {
        password.style.border="1px solid red"
        password.focus();
        return false;
    }
    if (!email.value.match(validRegex)) {
        email.style.border="1px solid red"
        email.focus();
        return false;
    }

 }
function validated2(){
        if (!password1.value.match(validRegex2)) {
            password1.style.border="1px solid red"
            password1.focus();
            return false;
        }
        if (!email1.value.match(validRegex)) {
            email1.style.border="1px solid red"
            email1.focus();
            return false;
        }
    
    









}

function toggle(){
    if (state){
       document.getElementById("password").setAttribute("type","password");
       document.getElementById("password2").setAttribute("type","password2");
       state= false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("password2").setAttribute("type","password2");
        state= true;

    }
}
