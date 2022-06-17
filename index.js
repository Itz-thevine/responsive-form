var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var fError = document.querySelectorAll('.fError');
var lError = document.querySelectorAll('.lError');
var eError = document.querySelectorAll('.eError');
var pError = document.querySelectorAll('.pError');

const handleSubmit = () => {
    event.preventDefault();
    let fName = firstName.value;
    let lName = lastName.value;
    let eMail = email.value;
    let passWord = password.value;

    

    if(fName.length === 0){
        fError.forEach(err => {
            err.style.visibility = 'visible';
        })
    }else{
        fError.forEach(err => {
            err.style.visibility = 'hidden';
        })
    }
    if(lName.length === 0){
       lError.forEach(err => {
           err.style.visibility = 'visible';
       })
    }else{
        lError.forEach(err => {
            err.style.visibility = 'hidden';
        })
    }
    if(passWord.length === 0){
       pError.forEach(err => {
           err.style.visibility = 'visible';
       })
    }else{
        pError.forEach(err => {
            err.style.visibility = 'hidden';
        })
    }
    if(eMail.length === 0){
       eError.forEach(err=> {
           err.style.visibility = 'visible';
       })
    }else{
        eError.forEach(err=> {
            err.style.visibility = 'hidden';
        })
    }
    

}