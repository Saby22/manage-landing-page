//get the email form
const form = document.querySelector("form");

//get the email input
const email=document.querySelector("input[type=email]");
//console.log(email);
//Add event listener to the form tag
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkEmailValidity();
});

//Add event listener to the form to listen to any change
email.addEventListener("keydown",reset);
email.addEventListener("paste",reset);
email.addEventListener("cut",reset);
email.addEventListener("copy",reset);

function checkEmailValidity(){
    
    //check if email is blank, or invalid
    if(email.value===""){
        form.classList.add("email-error-message");
        email.classList.add("email-error-border");
    }
    else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)===false){
        form.classList.add("email-error-message");
        email.classList.add("email-error-border");
    }
    else{
        form.classList.remove("email-error-message");
        email.classList.remove("email-error-border");
        form.classList.add("email-success-message");
        email.value=null;
    }
}

//Reset the error and the success messages if any changes are detected
function reset(){
    // console.log();
    form.classList.remove("email-error-message");
    email.classList.remove("email-error-border");
    form.classList.remove("email-success-message");
}