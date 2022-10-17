function onClick() {
    console.log("---CLICK!---")
}

// Validation of contact-form
// --------------------------------------------------------------------------------------------------------------

const isNullOrEmpty = value => {
    if (value.length === 0)
        return true

    return false
}

const isMinimumLength = (value, minLenght = 2) => {
    if (value.length >= minLenght)
        return true

    return false
}

const isEmailValid = email => {
    // Regual expression x@x.xx
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(email))
        return true

    return false
}

const isNameValid = name => {
    // Regual expression, checking if name has any numbers in it. ÅÄÖ do not work!
    // https://stackoverflow.com/questions/18650972/javascript-validation-for-non-empty-number-and-alphabets
    // With ÅÄÖ working:
    // https://stackoverflow.com/questions/36366125/include-special-characters-like-%C3%B6-%C3%A4-%C3%BC-in-regular-expressions
    const regEx = /^[a-zA-Z\u0080-\uFFFF]*$/;

    if (regEx.test(name))
        return true

    return false
}

// WILL NOT WORK CORRECT IF USER CLICK SUBMIT-BUTTON BEFORE ENTERING THE INPUT FIELDS
const onSubmitContact = event => {
    event.preventDefault()
    document.getElementById(`successful-post`).innerText = 'Please fill in the form correctly!'
    document.getElementById("successful-post").classList.add("error-text")
    document.getElementById("successful-post").classList.remove("text-success")

    if (document.getElementById("userName-error").innerText === "" &&
    document.getElementById("userEmail-error").innerText === "" &&
    document.getElementById("userComment-error").innerText === ""){
            document.getElementById(`successful-post`).innerText = 'Comment posted!'
            document.getElementById("successful-post").classList.remove("error-text")
            document.getElementById("successful-post").classList.add("text-success")
    }

    //     // ToDo:
    //         // *Nollställ alla inputfält! 
    //         // *Skicka data till server?
    // }
}



const validate = (event) => {
    let error = ""
    let element =event.target
    let label = document.getElementById(`${element.id}-label`).innerText

    switch(event.type) {
        case "submit":
            onSubmitContact(event)
            break;

        case "keyup":

            switch (element.type) {
                // NAME
                case 'text':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinimumLength(element.value, 2)) {
                            error += `Your ${label.toLocaleLowerCase()} must contain at least 2 letters.`
                            console.log(error);
                            document.getElementById("userName").classList.add("error-input")
                        } 

                        if (!isNameValid(element.value)) {
                            error += ` Your ${label.toLocaleLowerCase()} can only contain letters.`
                            console.log(error);
                            document.getElementById("userName").classList.add("error-input")
                        } 
  
                    } else {
                        error = `Please enter a ${label.toLocaleLowerCase()}!`
                        console.log(error);
                    }
                    document.getElementById(`${element.id}-error`).innerText = error

                    if(error===""){
                        document.getElementById("userName").classList.remove("error-input")
                    }
                    break;

                // EMAIL
                case 'email':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isEmailValid(element.value)) {
                            error = `Please enter a valid ${label.toLocaleLowerCase()}.`
                            console.log(error);
                            document.getElementById("userEmail").classList.add("error-input")
                        } 

                    } else {
                        error = `Please enter an ${label.toLocaleLowerCase()}!`
                        console.log(error);
                        document.getElementById("userEmail").classList.add("error-input")
                    }
                    document.getElementById(`${element.id}-error`).innerText = error

                    if(error===""){
                        document.getElementById("userEmail").classList.remove("error-input")
                    }
                    break;
                
                // COMMENT
                case 'textarea':
                    if (isNullOrEmpty(element.value)) {
                        error = `Please enter a ${label.toLocaleLowerCase()}!`
                        document.getElementById("userComment").classList.add("error-input")
                        console.log(error);
                    } 
                    document.getElementById(`${element.id}-error`).innerText = error

                    if(error===""){
                        document.getElementById("userComment").classList.remove("error-input")
                    }
                    break;
            }

            break;
    }
}

// --------------------------------------------------------------------------------------------------------------