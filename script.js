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
const onSubmitContact = event => {
    let error = ""
    // Deklarerar och initierar error meddelandet till en tom sträng
    let success = true
    // Boolean för att avgöra om valideringen är godkänd.
    event.preventDefault()
    // Hindrar att default beteendet utförs (inte försöker skicka iväg formulär-datan vid klick på submit-knapp?)

    for (let element of event.target) {
    // for-loop som går genom event.target(=formuläret), letar efter elementen däri och sparar dem i den initierade variabeln element
        error = ""
        // nollställer error för att slutreslutatet ska bli "rätt"
        if (element.required) {
        // if-sats som kollar vilka element i formuläret som är required 

            let label = document.getElementById(`${element.id}-label`).innerText
            // Deklarerar och initierar variabeln label som används vid utskrivning av error meddelandet
            switch (element.type) {
            // switch som kollar på elementens typ ('text','email','textarea') och utför kod utifrån dessa typer. 
                case 'text':
                // vid element.type 'text' utförs:
                    if (!isNullOrEmpty(element.value)) {
                    // if-sats: är input inte tom?
                        if (!isMinimumLength(element.value, 2)) {
                        // if-sats: har inputen mindre än 2 tecken?
                            error = `Your ${label.toLocaleLowerCase()} must contain at least 2 letters.`
                            console.log(error);
                        } else {
                        // om input har fler än 2 tecken: 
                            console.log("Success!");
                        }
                    } else {
                    // om input är tom:
                        error = `Please enter a name!`
                        console.log(error);
                    }
                    break;

                // följande case är av liknande sort som 'text' 
                case 'email':
                // vid element.type 'email' utförs:
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
                // vid element.type 'text' utförs:
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
            // skriver ut error meddelandet i domen (i "html"-koden)

            if (error !== "") {
            // if-sats som kollar om error meddelandet är en sträng med tecken => sätter success till false. 
            // Om det är en tom sträng kommer ej gå in i if-satsen och success fortsätter att vara true som den initierades till i början av funktionen.
                success = false
            }
        }
    }

    if (success) {
    // if-sats som kollar om success=true
        document.getElementById(`successful-post`).innerHTML = '<div class="text-success">Comment posted!</div>'
        // Postar ett bekräftade meddelande i domen att kommentaren är postad. 

        // ToDo: 
            // *Nollställ alla inputfält! 
            // *Skicka data till server?
    }
}


// onSubmit-event for form on product.html page
const onSubmitProduct = event => {
    event.preventDefault()
}

const onClickHeadings = event => {
    event.preventDefault()
}
// EV KOD SOM VILL SPARA??
//     let descriptionText= document.getElementById("description-Text")
//     let additionalText= document.getElementById("additional-Text")

//     descriptionText.style.display="none"
//     additionalText.style.display="block !important"
// }


// Toggle of size buttons
let sSize = document.getElementById("sSize")
let mSize = document.getElementById("mSize")
let lSize = document.getElementById("lSize")
let xlSize = document.getElementById("xlSize")

const toggleSizeS = event => {
    sSize.classList.toggle("toggle-size")
}
const toggleSizeM = event => {
    mSize.classList.toggle("toggle-size")
}
const toggleSizeL = event => {
    lSize.classList.toggle("toggle-size")
}
const toggleSizeXL = event => {
    xlSize.classList.toggle("toggle-size")
}