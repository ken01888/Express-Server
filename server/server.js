let express = require('express');
let bodyParser = require('body-parser')
let app = express()
let path = require('path')



app.use((req,res,next)=>{
    console.log(req.originalUrl)
    next();

})
app.use(express.static(path.join(__dirname,'../public')));


app.get('/',(req,res,next)=>{
    res.send('Hello from the web server side...')
})












app.listen(3000);