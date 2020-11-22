const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');

const PORT = process.env.PORT || 8000;

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('FirestoneClone server is up!');
})

app.get('/cars', (req, res)=>{
    (async () => {
        const response = await fetch(
          'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=1500?order=-Year,Make,Model,Category',
          {
            headers: {
              'X-Parse-Application-Id': 'rGw0TqqQ4f6JBUrcacxmNizpIfWeCx1k2r3Hza96',
              'X-Parse-REST-API-Key': `${process.env.BACK4APP_TOKEN}`,
            }
          }
        );
        
        const data = await response.json();
        const jsonData = JSON.stringify(data, null, 2);
        res.send(jsonData); // this is the complete list of cars
      })();
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})