input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(11)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Eloise")
})
basic.forever(function () {
	
})
