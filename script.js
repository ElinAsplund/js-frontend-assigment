// ATT FÖRSTÅ JS
// ----------------------------------------------------------------------------------------------------------

// Säkerställer att script.js är länkad rätt.
function klick() {
    console.log("---KLICK!---")
}


// Funktion som kollar/validerar om input.value har en längd på sin sträng (dvs antal tecken) som är 0 tecken. Returnerar en boolean. 
const isNullOrEmpty = value => {

    if (value.length === 0)
        return true

    return false
}

// Funktion som kollar/validerar om input.value har en längd på sin sträng (dvs antal tecken) som är minst 2 tecken lång. Returnerar en boolean. 
const isMinimumLength = (value, minLenght = 2) => {
    if (value.length >= minLenght)
        return true

    return false
}

// Funktion som kollar/validerar om input.value är på formatet x@x.xx returnerar en boolean. 
const isEmailValid = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Regual expression för email på formatet x@x.xx

    if (regEx.test(email))
        return true

    return false
}

// arrow function 
// const onSubmit = event => {
//         event.preventDefault()
//         console.log(event)
//     }
// måste const vara med? functionen funkar utan const, varför använder Hans const på en function?

// traditional function
// function onSubmit(event){
//     event.preventDefault()
//     console.log(event)
// }
// på traditionell funktion: kan inte sätta const på!

// onSubmit-event for form on contact.html page
const onSubmit = event => {
    let error = ""
    let success = true
    event.preventDefault()
    // Hindrar att default beteendet utförs (inte försöker skicka iväg formulär-datan vid klick på submit-knapp?)

    for (let element of event.target) {
        error = ""
        if (element.required) {
            let label = document.getElementById(`${element.id}-label`).innerText

            switch (element.type) {

                case 'text':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinimumLength(element.value, 2)) {
                            error = `Your ${label.toLocaleLowerCase()} must contain at least 2 letters.`
                            console.log(error);
                        } else {
                            console.log("Success!");
                        }
                    } else {
                        error = `Please enter a name!`
                        console.log(error);
                    }
                    break;

                case 'email':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isEmailValid(element.value)) {
                            error = `Your ${label.toLocaleLowerCase()} must be valid (eg. example@domain.com).`
                            console.log(error);
                        } else {
                            console.log("Success!");
                        }
                    } else {
                        error = `Please enter an email!`
                        console.log(error);
                    }
                    break;

                case 'textarea':
                    if (!isNullOrEmpty(element.value)) {
                            // if (!isMinimumLength(element.value, 10)) {
                            //     error = `Your comment must contain at least 10 characters.`
                            //     // ${lable.toLowerCase()} 
                            //     console.log(error);
                            // } else {
                                console.log("Success!");
                            // }
                    } else {
                        error = `Please enter a comment!`
                        console.log(error);
                    }
                    break;

            }

            document.getElementById(`${element.id}-error`).innerText = error

            if (error !== "") {
                success = false
            }
        }
    }

    if (success) {
        document.getElementById(`userName-error`).innerHTML = '<div class="text-success">Comment posted!</div>'
    }
}


// onSubmit-event for form on product.html page
const onSubmitProduct = event => {
    event.preventDefault()
}