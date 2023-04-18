const cardName = document.querySelector('.card--user-name')
let cardNumber = document.querySelector('.card--account-number')
const inputName = document.querySelector('.user--name-input')
const inputCardNumber = document.querySelector('.user--cardNumber-input')
const button = document.querySelector('.form--confirm')
const completedButton = document.querySelector('.card--completed-container button')
const formSection = document.querySelector('.form--section')
const completeSection = document.querySelector('.card--completed-container')
const nameError = document.querySelector('.error--name')
const cardNumberError = document.querySelector('.error--cardNumber')
const emptyNameError = document.querySelector('.error--empty-name')
const emptyCardNumberError = document.querySelector('.error--empty-cardNumber')
const cvc = document.querySelector('.user--input-cvc input')
const cardCvc = document.querySelector('.card--back p')
let defaultCardNumber = "0000 0000 0000 0000"
let defaultCardName = 'Jane Appleseed'
let defaultCVC = '000'

inputName.addEventListener('keyup', () => {
    if(inputName.value == ''){
        inputName.classList.remove('active')
        nameError.classList.add('d-none')
        cardName.innerText = defaultCardName
    }else if(inputName.value.length > 24){
        inputName.classList.add('active')
        nameError.classList.remove('d-none')  
    }
    else{
        inputName.classList.add('active')
        nameError.classList.add('d-none')
        cardName.innerText = inputName.value
    }
    console.log(inputName.value)
})

inputCardNumber.addEventListener('keyup', () => {
    console.log(inputCardNumber.value.length)
    if(inputCardNumber.value == ''){
        cardNumberError.classList.add('d-none')
        cardNumber.innerText = defaultCardNumber
        inputCardNumber.classList.remove('active')
    }else{
        inputCardNumber.classList.add('active')
        if(inputCardNumber.value.length <= 20){
            // cardNumberError.classList.add('d-none')
            cardNumber.innerText = inputCardNumber.value
            switch (inputCardNumber.value.length){
                case 4:
                    cardNumber.innerText = inputCardNumber.value += " ";
                    break;
                case 9:
                    cardNumber.innerText = inputCardNumber.value += " "
                    break;
                case 14:
                    cardNumber.innerText = inputCardNumber.value += " "
                    break;
                case 19:
                    cardNumber.innerText = inputCardNumber.value
                    break;
                default:
            }
        }else{
            cardNumberError.classList.remove('d-none')
        }
    }
})

cvc.addEventListener('keyup', () => {
    cardCvc.innerText = cvc.value
    console.log(cvc.value)
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(nameError.classList.contains('d-none'))
    if(inputName.value == '' && inputCardNumber.value == ''){
        emptyNameError.classList.remove('d-none')
        emptyCardNumberError.classList.remove('d-none')
    }else if(inputName.value == ''){
        emptyCardNumberError.classList.add('d-none')
        emptyNameError.classList.remove('d-none')
        console.log('inputName is empty')
    }else if(inputCardNumber.value == ''){
        emptyCardNumberError.classList.remove('d-none')
        emptyNameError.classList.add('d-none')
        console.log('inputcardnumber is empty')
    }else{
        emptyCardNumberError.classList.add('d-none')
        emptyNameError.classList.add('d-none')
        if(nameError.classList.contains('d-none')){
            formSection.classList.add('d-none')
            completeSection.classList.remove('d-none')
        }
        else{
            console.log('You cannot proceed you still have an error')
            inputName.classList.add('input--error')
        }
    }  
})




completedButton.addEventListener('click', (e) => {
    e.preventDefault()

    formSection.classList.remove('d-none')
    completeSection.classList.add('d-none')
    
})