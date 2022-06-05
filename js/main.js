let operator
let number1 = ""
let number2 = ""
let btnCalculate = $(".calculate")
const screen = $(".valueDisplay")


const numberBtnListener = () => {
    let btnNumbers = $(".number")
    btnNumbers.each((index, button) => {
        button.addEventListener("click", () => {
            if (!operator) {
                number1 = number1 + button.textContent
                updateScreen(number1)
            } else {
                number2 = number2 + button.textContent
                updateScreen(number2)
            }
        })
    })
}

const operatorBtnListener = () => {
    let operators = $(".operator")
    operators.each((index, button) => {
        button.addEventListener("click", () => {
            if (number1 && number2) {
                calculate()
            }
            operator = button.textContent
            updateScreen(operator)
        })
    })
}

const updateScreen = (value) => {
    screen.val(value)
}

const clear = () => {
    number1 = ""
    number2 = ""
    operator = ""
    updateScreen("")
}

const calculate = () => {
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
    let result

    if (operator == "%") {
        result = eval(`(${number1} / 100) * ${number2}`)
    }else {
        result = eval(`${number1} ${operator} ${number2}`)
    }

    if (isNaN(result)) {
        updateScreen("Operação Inválida")
        result = ""
    } else {
        updateScreen(result)
        result = parseFloat(result)
    }
    
    number1 = result
    number2 = ""
    operator = null
}


numberBtnListener()
operatorBtnListener()

btnCalculate.click(() => {
    calculate()
})

$(".clear").click(() => {
    clear()
})

$(".float").click(() => {
    if (operator) {
        number2 = number2 + "."
        updateScreen(number2)
        return
    }
    number1 = number1 + "."
})