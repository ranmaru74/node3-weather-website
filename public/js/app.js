
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    console.log(location)
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                messageOne.textContent = data.error
                return
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
})