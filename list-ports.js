// node list-ports.js
const serialportgsm = require('serialport-gsm');

(async () => {
    try {

        let ports = await serialportgsm.list()
        console.log(ports)

    } catch (err) {
        console.log(err)
    }
})()