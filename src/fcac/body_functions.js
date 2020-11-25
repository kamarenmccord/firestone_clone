
const BASE_URL = 'http://localhost:9001/cars';

export const getData = () =>{
    // fetch data from backend
    return fetch(BASE_URL,{
        method: 'GET'
    }).then(response=>{
        return response.json()
    }).then(data=>(data))
    .catch(e=>{console.log(e)})
};
