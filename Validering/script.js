// document.getElementById('regForm').addEventListener('submit', function(event) {
//     event.preventDefault()

//     console.log(event)
// })


const onSubmit = event => {
    event.preventDefault ()
    validate(event)
}


const validate = (event) => {
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)
            break;

        case 'submit':
            for(let element of event.target)
                validateElement(element)
            break;
    }
}


const validateElement = (element) => {
    if (element.required) {
        let label = document.getElementById(`${element.id}-label`).innerText
        let error = ""


        switch(element.type) {
            case 'text':
                if(!isNullOrEmpty(element.value)) {
                    if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters`
                    } 
                } else {
                    error = `You must enter a ${label.toLocaleLowerCase()}`
                }

                break;

            case 'email':
                if(!isNullOrEmpty(element.value)) {
                    if (!isEmailValid(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} must be valid (eg. example@domain.com)`
                    }
                } else {
                    error = `You must enter an ${label.toLocaleLowerCase()}`
                }

                break;

            case 'password':
                if(!isNullOrEmpty(element.value)) {
                    if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters`
                    } 
                } else {
                    error = `You must enter a ${label.toLocaleLowerCase()}`
                }
                
                break;
        }

        document.getElementById(`${element.id}-error`).innerText = error
    }
}


const isNullOrEmpty = value => {
    if (value.length === 0)
        return true

    return false
}

const isMinimumLength = (value, minLength = 2) => {
    if (value.length >= minLength)
        return true
    
    return false
}

const isEmailValid = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (regEx.test(email))
        return true

    return false

}