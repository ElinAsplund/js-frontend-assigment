// ATT FÖRSTÅ JS
// ----------------------------------------------------------------------------------------------------------

// Säkerställer att script.js är länkad rätt.
function klick(){
    console.log("---KLICK!---")
}




// Funktion som kollar/validerar om input.value har en längd på sin sträng (dvs antal tecken) som är 0. Returnerar en boolean. 
const isNullOrEmpty = value => {

    if(value.length === 0)
        return true
    
    return false
}

// Funktion som kollar/validerar om input.value har en längd på sin sträng (dvs antal tecken) som är minst 2 tecken lång. Returnerar en boolean. 
const isMinimumLength = (value, minLenght = 2) => {
    if (value.length >= minLenght)
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


const onSubmit = event => {
    event.preventDefault()
    // Hindrar att default beteendet utförs (inte försöker skicka iväg formulär-datan vid klick på submit-knapp?)

    for(let element of event.target){
        if (element.required){
            // let lable = document.getElementById(`${element.id}-lable`).innerText;
            let error=""

            switch(element.type){
                case 'text':
                    if (!isNullOrEmpty(element.value)){

                        if (!isMinimumLength(element.value, 2)){
                            error = `Your name must contain at least 2 letters.`
                            // ${lable.toLowerCase()} 
                            console.log(error);
                        } else{
                            console.log("Success!");
                        }
                    } else{
                        error = `Please enter a name!`
                        console.log(error);
                    }
                    break;

                case 'email':
                    break;

                case 'textarea':
                    break;    
            }

            document.getElementById(`${element.id}-error`).innerText = error
        }
    }
}