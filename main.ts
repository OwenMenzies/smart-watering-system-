let moistness = 0
let onoff = 0
let NO = false
input.onButtonPressed(Button.AB, function () {
    moistness = pins.analogReadPin(AnalogPin.P1)
    basic.showString("" + (moistness))
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    onoff += 1
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (NO == false) {
        NO = true
    } else {
        NO = false
    }
})
basic.forever(function () {
    if (onoff >= 2) {
        onoff = 0
        basic.clearScreen()
    }
    while (onoff == 1) {
        moistness = pins.analogReadPin(AnalogPin.P1)
        if (moistness <= 200) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        } else if (moistness >= 200) {
            if (moistness <= 300) {
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # # # # #
                    . . . . .
                    `)
            } else {
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            }
        }
    }
    moistness = pins.analogReadPin(AnalogPin.P1)
})
