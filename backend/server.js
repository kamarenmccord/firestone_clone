const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');

const PORT = process.env.PORT || 8000;

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('server is up');
})

app.get('/cars', (req, res)=>{
    (async () => {
        const response = await fetch(
          'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=1500?order=-Year,Make,Model,Category',
          {
            headers: {
              'X-Parse-Application-Id': 'rGw0TqqQ4f6JBUrcacxmNizpIfWeCx1k2r3Hza96', // This is your app's application id
              'X-Parse-REST-API-Key': `${process.env.BACK4APP_TOKEN}`, // This is your app's REST API key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        const jsonData = JSON.stringify(data, null, 2);
        res.send(jsonData);
      })();
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})