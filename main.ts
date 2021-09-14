input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
basic.showNumber(input.temperature())
basic.pause(500)
basic.showNumber(input.lightLevel())
basic.pause(500)
basic.forever(function () {
    if (input.temperature() >= 8 && input.temperature() <= 30 || input.lightLevel() >= 100 && input.lightLevel() <= 200) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Ghost)
        basic.clearScreen()
    }
})
