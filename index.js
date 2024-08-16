express = require('express')
console.log('hello world')
const server = express()
server.listen(8080)




















// //import {sum,sub} from './lib.js'
// import {sum,sub} from './lib.js'
// import fs from 'fs'

// //reading file synchronously
// // const syncTxt = fs.readFileSync('./text.txt','utf-8')
// // console.log(syncTxt)

// const t1 = performance.now()
// console.log(t1)
// //reading file asynchronously
// fs.readFile('./text.txt','utf-8',(error,txt)=>{
//     console.log(txt)
// })
// //below code run first than above if above is asynchronous
// console.log(sum(7,8))

// const t2 = performance.now()
// console.log(t2)
// console.log(t2-t1)
