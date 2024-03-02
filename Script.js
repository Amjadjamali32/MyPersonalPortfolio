window.addEventListener('DOMContentLoaded' , ()=>{

let form = document.getElementById('myContactForm');
form.addEventListener('submit' , (event) => {
    if(!validation()){
        event.preventDefault();
        console.log("return false");
        return false;
    }
    return true;
})

function validation() {

    //getting input fields and their values and also getting error message tag 
    let name = document.getElementById('uname').value;
    let InputName = document.getElementById('uname');
    let email = document.getElementById('uemail').value;
    let InputEmail = document.getElementById('uemail');
    let mobileNumber = document.getElementById('ucontact').value;
    let InputMobile= document.getElementById('ucontact');
    let message = document.getElementById('message').value;
    
    //error messages
    let InputMessage = document.getElementById('message');
    let nameErrorMsg = document.getElementById('nameErrorMsg');
    let emailErrorMsg = document.getElementById('emailErrorMsg');
    let contactErrorMsg = document.getElementById('contactErrorMsg');
    let descErrorMsg = document.getElementById('DescErrorMsg'); 

    // validation for user name
    if(name === ""){
        nameErrorMsg.innerHTML = "Name field can not be blank!";
        InputName.style.borderColor = "red";
        return false;
    }

    if(name.length < 5){
        nameErrorMsg.innerHTML = "Minimum name length should be 5 characters!";
        InputName.style.borderColor = "red";
        return false;
    }

    if(name.length > 15){
        nameErrorMsg.innerHTML = "Name length should not be greater than 15 characters!";
        InputName.style.borderColor = "red";
        return false;
    }

    nameErrorMsg.innerHTML = "";
    InputName.style.borderColor = "black";


     // validation for email
     if (email === "") {
        emailErrorMsg.innerHTML = "Email field can not be blank!";
        InputEmail.style.borderColor = "red";
        return false;
    }

    if(email.indexOf('@') <= 0) {
        emailErrorMsg.innerHTML = "@ can not be at start!";
        InputEmail.style.borderColor = "red";
        return false;
    }

    if((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')){
        emailErrorMsg.innerHTML = " invalid . position!";
        InputEmail.style.borderColor = "red";
        return false;
    }
    emailErrorMsg.innerHTML = "";
    InputEmail.style.borderColor = "black";

    // validation for contact number
    if (mobileNumber === "") {
        contactErrorMsg.innerHTML = "Contact number field can not be blank!";
        InputMobile.style.borderColor = "red";
        return false;
    }

    if (mobileNumber.length < 6) {
        contactErrorMsg.innerHTML = "Contact number length is too short!";
        InputMobile.style.borderColor = "red";
        return false;
    }

    if (mobileNumber.length > 12) {
        contactErrorMsg.innerHTML = "Contact number length is too long!";
        InputMobile.style.borderColor = "red";
        return false;
    }
    contactErrorMsg.innerHTML = "";
    InputMobile.style.borderColor = "black";

    // validation for message
    if (message === "") {
        descErrorMsg.innerHTML = "Message field must be filled!";
        InputMessage.style.borderColor = "red";
        return false;
    }
    descErrorMsg.innerHTML = "";
    InputMessage.style.borderColor = "black";

    return true;
}


})