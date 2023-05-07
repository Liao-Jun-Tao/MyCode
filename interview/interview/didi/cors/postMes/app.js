const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if (req.url == '/'){
        fs.cteareReadStream.pipe(res)
    }
})

