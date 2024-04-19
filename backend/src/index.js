import express from 'express';
const app = express();
const port = 3000
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.listen(port,(req,res)=>{
    console.log(`server is listening at http://localhost:3000`);
})