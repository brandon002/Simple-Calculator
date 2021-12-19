let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers= document.querySelectorAll(".number")
console.log(numbers);



const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }
    else{
        currentNumber +=number;
    }
}
numbers.forEach( (number) => {
    number.addEventListener( "click", (even) => {
        inputNumber(even.target.value)
        updateScreen(currentNumber);
    })
})



const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber=''
}
const operators = document.querySelectorAll(".operator")
operators.forEach( (operator) => {
    operator.addEventListener("click", (even) => {
        inputOperator(even.target.value)
    })
})



const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break 
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () =>{
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (even)=>{
    inputDecimal(even.target.value)
    updateScreen(currentNumber)
})