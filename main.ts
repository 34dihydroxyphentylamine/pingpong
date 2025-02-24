input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(Diode, 4)
    Diode += -1
    led.plot(Diode, 4)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.unplot(Diode, 4)
    Diode += 1
    led.plot(Diode, 4)
})
let Diode = 0
Diode = 1
led.plot(Diode, 4)
basic.forever(function () {
    radio.setGroup(1)
})
