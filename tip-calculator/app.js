// Inputs
const bill = document.querySelector('#bill-input')
const custom = document.querySelector('#custom')
const people = document.querySelector('#people')

// Tip percentage options
const option5 = document.querySelector('#option5')
const option10 = document.querySelector('#option10')
const option15 = document.querySelector('#option15')
const option25 = document.querySelector('#option25')
const option50 = document.querySelector('#option50')

// Outputs
const tipAmount = document.querySelector('#tip-amount')
const total = document.querySelector('#tip-total')

// Button
const resetButton = document.querySelector('#reset-btn')

let tipPercentage = 0

// Button available only when inputs values provided
document.addEventListener('keyup', () => {
    if(bill.value && people.value > 0){
        resetButton.style.opacity = '1';
    } else {
        resetButton.style.opacity = '0.25';
    }
})

option5.addEventListener('click', () => {
    option5.style.background = 'hsl(172, 67%, 45%)'
})

console.log(bill.value); //?