function valid(){
    let valid = true ;
    let re = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
    let email =document.input-box.email.value;
    if(re.test(email)==false){
            document.alert="enter valid emeil";

    }




}