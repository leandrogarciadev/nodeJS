const http = require('http');
const host = 'http://localhost'
const port = 3000
const statusPC = require('./pcRamUsage.js')

//console.log(http);

http.createServer((req, res) => {
    let url = req.url

    if (url === '/statusPC'){
        res.write('<h1><u>Uso de memoria em realtime!</u></h1><p>')
        res.end(JSON.stringify(statusPC, null, 2))
    }else{
        res.end('<h1>Failed url!</h1>')
    }
}).listen(port, () => console.log(`Server is running in ${host}:${port}`))