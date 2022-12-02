const os = require('os')
//console.log(os)

setInterval(() => {

const {arch, platform, totalmem, freemem} = os
const tram = totalmem() / 1024/1024
const fram = freemem() / 1024/1024
const usage = (fram / tram) * 100

const status = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${parseInt(tram)} MB`,
    FreeRam: `${parseInt(fram)} MB`,
    Usage: `${usage.toFixed(2)}%`
}
console.clear()
console.table(status)
exports.status = status;
}, 1000)

