
// Timeline tab //

function openInfo(event, info) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("timeline-content");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("timeline-year-active", "");
    }
    document.getElementById(info).style.display = "flex";
    event.currentTarget.className += " timeline-year-active";

}

// Form validation //
const applicationForm = document.querySelector(".application-form");
const formChild = applicationForm.childNodes;

const nameFormGroup = formChild[1];
const emailFormGroup = formChild[3];
const locationFormGroup = formChild[5];
const documentFormGroup = formChild[7];

applicationForm.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("Form was submitted");

    //Name validation
    const name = nameFormGroup.childNodes[3];
    const nameError = nameFormGroup.childNodes[4];
    const nameValue = name.value;

    validateName(nameValue, nameError);

    //Email validation
    const email = emailFormGroup.childNodes[3];
    const emailError = emailFormGroup.childNodes[4];
    const invalidEmailError = emailFormGroup.childNodes[6];
    const emailValue = email.value;

    validateName(emailValue, emailError);


    /* Check if email is correct*/
    if (validateEmail(emailValue) === true){
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }
    
    if (checkInputLength(nameValue) && checkInputLength(emailValue)){
        if(validateEmail(emailValue)){
            applicationFormPass();
        }
    }

    /* Check it there is an input*/
    function checkInputLength(value) {
        const trimmedValue = value.trim();

        if (trimmedValue.length > 0){
            return true;
        } else {
            return false;
        }
    }

    /* Make a statement wheter or not input is correct*/
    function validateName(nameValue, errortType){
        if(checkInputLength(nameValue) === true){
            errortType.style.display = "none";
        } else {
            errortType.style.display = "block";
        }
    }


    /*Opens up verification*/
    function applicationFormPass(){
        const applicationMessage = "Application submitted successfully"
        formPass(applicationMessage, applicationForm);
    }
}

/* Submit email valodation */
const updateForm = document.querySelector(".update-form");

updateForm.addEventListener("submit", validateUpdateEmail);

function validateUpdateEmail(event){
    event.preventDefault();
    console.log("Form was submitted");

    const updateEmail = document.querySelector(".update-form-email-address");
    const updateEmailValue = updateEmail.value;
    
    if (validateEmail(updateEmailValue)){
        updateFormPass();
    }

    function updateFormPass(){
        const updateMessage = "E-mail successfully registered";
        formPass(updateMessage, updateForm);

    }
}


// Make pop-up dissapear
const popup = document.querySelector(".confirmation-message-section");

popup.addEventListener("click", popUpDissapear);

function popUpDissapear(){
    if(popup.style.display === "block") {
        popup.style.display = "none";
    }
}


// GLOBAL FUNCTIONS

/* Validate email with regex */

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

/* Opens up validation */

function formPass(message, form) {
    console.log("Show message");
    const validationMessageSection = document.querySelector(".confirmation-message-section");
    const validationMessage = document.querySelector("#message");
    validationMessageSection.style.display = "block";
    validationMessage.innerHTML = message;
    form.reset();

}
