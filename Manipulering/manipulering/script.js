/*
    DOM     -   Document Object Model       div, p, body, a             document.
    BOM     -   Browser Object Model        location, sessionStorage    window.


    BOM
    --------------------------------------------------------------------------
    Används för att manövrera mellan sidor
    window.location.replace('about.html')
    
    Används till att spara kundvagnen, olika emails osv
    Finns bara tillgängligt sålänge fliken eller webläsaren är öppen 
    window.sessionStorage.setItem('session', 'hejsan')
    window.sessionStorage.getItem('session', 'hejsan') 

    Finns tillgängligt till jag tar bort den
    window.localStorage.setItem('local', 'hejsan')
    window.localStorage.getItem('local', 'hejsan')

    För att hämta storleken på webläsarens fönster just nu
    window.visualViewport.width
    window.screen.width

    window.scrollY --> för att se hur långt jag har scrollat ner på sidan


    DOM
    -----------------------------------------------------------------------------------------------------
    notis
    camelCase = firstName, lastName, password
    snake_case = div_1, div_2
    
    document.getElementById('firstName')
    document.getElementsByName('transportation')
    document.getElementsByTagName('input')
    document.getElementsByClassName('box')

    Den ny varianten på dom ovan, spelar ingen större roll vilken som används
    document.querySelector()
    document.querySelectorAll()

    document.body.innerText = "<h1>Rubrik</h1>"
    document.body.innerHTML = "<h1>Rubrik</h1>"
    document.body.append()
    document.body.appendChild()



    document.getElementById('div-1').innerText ='Tobbe är bäst'



    let div_1 = document.getElementById('div-1')
    div_1.innerText = 'Tobbe'

    div_1.classList.add('text-danger')
    div_1.classList.remove('text-danger')

    div_1.style.display = 'none'
    div_1.style.display = 'inline-flex'

    // CSS font-size: 2rem;
    div_1.style.fontSize = '2rem'



    switch(document.getElementById('div-2').dataset.toggle) {
        case 'dropdown':
            console.log('denna använder en dropdown')
            break;
        
        case 'link' :
            console.log('denna använder en länk')
            break;
    }



    console.log(document.getElementById('firstName').value)
    console.log(document.getElementById('lastName').value)

    console.log(document.getElementsByTagName('form'))

    console.log(document.getElementsByClassName('box'))

    console.log(document.querySelector('#firstName').value)



    let inputs = document.querySelectorAll('input')
    console.log(inputs)

    for(let input of inputs)
        console.log(input)

    inputs.forEach(input => {
        console.log(input)
    })

*/

document.querySelectorAll('input').forEach(input => {

    if(input.required)

        document.querySelector(`#${input.id}-label`).innerHTML += ' <span class= "required">*</span>'

        switch(input.type) {
            case 'text':
                console.log('validera texten')
                break;
            case 'email':
                console.log('validera email')
                break;
            case 'password':
                console.log('validera lösenordet')
                break;
            case 'text':
                console.log('validera texten')
                break;
        }
})








