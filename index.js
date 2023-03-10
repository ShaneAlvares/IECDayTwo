const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
//Handling Get request for / URI
app.get('/', (req, res) => {
    res.send('Express App Running 1236');
});

app.get('/time',(req,res) => {
    const time =  new Date();
    res.send(time);
});

app.post('/testPostMan', (req, res) => {
    res.send("Hello");
});

app.get('/testPostManGetVariables', (req, res) => {
    const tempVariable = req.query.temp;
    res.send("Hello " + tempVariable);
});

app.get('/recordTemp', (req,res) => {
    const temp = req.query.temp || 0;
    if(temp >= 100)
    {
        res.send("Your Temp is grater than 100");
    }else{
        res.send("Your temp is lesser than 100");
    }
});

app.post('/handleJson', (req,res) => {
    res.send(req.body.name);
});
//Deploying the listener
const port = process.env.port || 8081;
app.listen(port, () => console.log(`Express server listening on port ${port}`));