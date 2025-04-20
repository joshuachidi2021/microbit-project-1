let distance = 0
// Set the threshold distance (e.g., 10 cm)
let threshold = 10
// Set up radio
// Set the radio group to 1 (both micro:bits need to be on the same group)
radio.setGroup(1)
// Set the radio group to 1 (both micro:bits need to be on the same group)
basic.forever(function () {
    // Trigger the ultrasonic sensor
    // Ensure trigger is off
    pins.digitalWritePin(DigitalPin.P0, 0)
    // Short pause to stabilize
    basic.pause(2)
    // Send trigger signal
    pins.digitalWritePin(DigitalPin.P0, 1)
    // Pulse for 10ms
    basic.pause(10)
    // Stop trigger signal
    pins.digitalWritePin(DigitalPin.P0, 0)
    // Measure the time taken for the echo to return
    // Distance in cm (pulse duration / 58)
    distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
    if (distance < threshold) {
        // If object is closer than the threshold distance
        // Send radio message to micro:bit 2
        radio.sendString("INTRUDER!")
    }
    // Pause before the next measurement
    basic.pause(100)
})
