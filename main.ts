input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
number = 0
let number_2 = 0
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.AB) && input.buttonIsPressed(Button.A))) {
        basic.showNumber(number)
    } else {
        basic.showNumber(number_2)
    }
})
