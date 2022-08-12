let X = 0
wirelessx.connect(DigitalPin.P16)
basic.forever(function () {
    X = wirelessx.reads()
    if (X == 128) {
        led.toggle(1, 0)
    } else if (X == 64) {
        led.toggle(0, 1)
    } else if (X == 32) {
        led.toggle(2, 1)
    } else if (X == 16) {
        led.toggle(1, 2)
    } else if (X == 8) {
        led.toggle(3, 2)
    } else if (X == 4) {
        led.toggle(2, 3)
    } else if (X == 2) {
        led.toggle(4, 3)
    } else if (X == 1) {
        led.toggle(3, 4)
    }
})
