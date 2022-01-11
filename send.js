// node send.js
const serialportgsm = require('serialport-gsm');


(async () => {
    try {


        let modem = serialportgsm.Modem()

        let options = {
            baudRate: 9600,
            dataBits: 8,
            stopBits: 1,
            parity: 'none',
            rtscts: false,
            xon: false,
            xoff: false,
            xany: false,
            autoDeleteOnReceive: false,
            enableConcatenation: true,
            incomingCallIndication: true,
            incomingSMSIndication: true,
            pin: '',
            customInitCommand: '',
            // logger: console
        }

        modem.on('open', async result => {
            console.log(`${result.request} ${result.data.modem} ${result.status}`)

            result = await modem.initializeModem()
            console.log(`${result.data}`)

            result = await modem.sendSMS('+639106189160', 'Hello there from sim 800c!', false)
            console.log('sendSMS', result)

        })

        modem.on('onSendingMessage', async result => {
            console.log('onSendingMessage', result)
        })

        modem.on('onNewMessage', async result => {
            console.log('onNewMessage', result)
        })

        modem.on('onNewMessageIndicator', async result => {
            console.log('onNewMessageIndicator', result)
        })

        await modem.open('COM10', options)



    } catch (err) {
        console.log(err)
    }
})()