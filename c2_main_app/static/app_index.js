// get form labels
const formLabels = document.querySelectorAll('#new_input_form label');

// get input areas of form & submit btn
const formInputs = Array.from(document.querySelectorAll('#new_input_form .input_field'));
const submitBtn = document.getElementById('submit');

const emailCheckre = /\S+@\S+\.\S+/


/*********************************************************
 **************  FORM INPUT BEHAVIOURS  ******************
 ********************************************************/

// click onto form inputs
formInputs.forEach(input => input.addEventListener('focus', e => {
    e.target.style.border = 'none'
    e.target.style.borderBottom = '2px solid white';
    e.target.focus()
})); 


// make form labels also clickable
formLabels.forEach(label => label.addEventListener('click', e => {
    console.log(e.target);
    formInputs[Array.prototype.indexOf.call(formLabels, e.target)].style.border = 'none'
    formInputs[Array.prototype.indexOf.call(formLabels, e.target)].style.borderBottom = '2px solid white';
    formInputs[Array.prototype.indexOf.call(formLabels, e.target)].focus()
}));

// click out of form fields
formInputs.forEach(input => input.addEventListener('blur', e => {
    // email regex fails
    if (e.target.id === 'email_input' && e.target.value && !emailCheckre.test(e.target.value)) {
        e.target.style.outline = 'none';
        e.target.style.border = '2px solid red';
    }
    // not the message input field but blank so revert to original state
    else if (e.target.id !== 'message_input' && !e.target.value) {
        e.target.style.border = 'none';
        e.target.style.borderBottom = '2px solid var(--pri--)';
    }
    // message input field & blank so revert to original state
    else if (e.target.id === 'message_input' && !e.target.value) {
        e.target.style.border = 'none';
        e.target.style.borderBottom = '2px solid white';
    }
    // not blank so full border
    else {
        e.target.style.border = '2px solid var(--pri--)';
    }
    setButton();
})); 


/****************************************************
 **************  DISABLE SUBMIT BTN  ****************
 ***************************************************/

function setButton() {
    let fieldsFull = true;
    formInputs.forEach((input) => {
        if (input.value.length === 0) fieldsFull = false;
        if (input.id === 'email_input' && !emailCheckre.test(input.value)) fieldsFull = false
    });
    switch (fieldsFull === true) {
        case true:
            submitBtn.classList.add("btn-enabled");
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1'
            break;
        
        case false:
            submitBtn.classList.remove("btn-enabled");
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5'
            break;
    };
};

document.onkeyup = () => {
    setButton();
};