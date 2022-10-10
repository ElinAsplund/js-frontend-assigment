// ATT FÖRSTÅ JS
// ----------------------------------------------------------------------------------------------------------

// Säkerställer att script.js är länkad rätt.
function klick(){
    console.log("Klick!")
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
    console.log(event.target);

    for(let element of event.target){
        console.log(element.type);
        if (element.required){
            console.log("req");
            let lable = document.getElementById(`${element.id}-lable`);
            
            switch(element.type){
                case 'text':
                    console.log("namn tack!");
                    if (!isNullOrEmpty(element.value)){

                        if (!isMinimumLength(element.value, 2)){
                            console.log("2 tecken minst");
                        } else{
                            console.log("du angav ett namn!");
                        }fb
                    } else{
                        console.log("du måste ange ett värde");
                    }
                    break;

                case 'email':
                    console.log("email tack!");
                    break;

                case 'textarea':
                    console.log("skriv in kommentar tack!");
                    break;    
            }
        }
    }
}