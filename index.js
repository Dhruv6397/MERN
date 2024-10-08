const http = require('http')
const { json } = require('react-router-dom')


const fs = require('fs')
const index = fs.readFileSync('index.html','utf-8')
const data = fs.readFileSync('data.json','utf-8')
const server = http.createServer((req,res)=>{
    console.log(req.url)

    switch(req.url){
        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index)
            break;
        case '/api':
            res.setHeader('Content-Type','application/json')
            res.end(data)
            break;
        default:
            res.writeHead(404,'not found')
            res.end()

    }
    //res.end('<h1>Hello</h1>')
    //res.end(JSON.stringify(data))
    //res.setHeader('Content-Type','text/html')
    res.end(data)
})

server.listen(8080)