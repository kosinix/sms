// node index.js
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
            autoDeleteOnReceive: true,
            enableConcatenation: true,
            incomingCallIndication: true,
            incomingSMSIndication: true,
            pin: '',
            customInitCommand: '',
            // logger: console
        }

        
    } catch (err) {
        console.log(err)
    }
})()