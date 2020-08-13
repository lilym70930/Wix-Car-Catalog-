const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const cars = require('./cars-data/data.json')


app.use(cors({origin: 'http://localhost:3000'}));

app.get('/cars', (req,res) =>{
    res.send(cars);
    // console.log(cars);
});


app.listen(PORT , ()=>{
    console.log(`The app is running on port ${PORT}`);
})



