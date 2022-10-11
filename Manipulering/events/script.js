/*
        EVENTS
        ---------------------------------------------------------------------------------------------
        Undvik
        document.getElementById('btn').addEventListener("click", function() {
            console.log("klickade")
        })

        document.getElementById('btn').addEventListener("click", () => {
            console.log("klickade")
        })

        kör ist
        function onClick_traditional() {
        console.log('klickade')
        document.getElementById('result').innerText = 'Klickade'
        }

        const onClick_arrowfunction = () => {
            console.log('klickade')
            document.querySelector('#result').innerText = 'Klickade'
        }


*/

function onClick_traditional() {
    console.log('klickade')
    document.getElementById('result').innerText = 'Klickade'
}

const onClick_arrowfunction = (event) => {
    console.log(event)
    document.querySelector('#result').innerText = 'Klickade'
}