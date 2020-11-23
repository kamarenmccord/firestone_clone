
const BASE_URL = 'http://localhost:9001/cars';

export const getData = () =>{
    // fetch data from backend
    return fetch(BASE_URL,{
        method: 'GET'
    }).then(response=>{
        return response.json()
    }).then(data=>(extractor('Year', data))
    ).catch(e=>{console.log(e)})
};

const extractor = (type, list) => {
    let masterList = [];
        if (type === 'Year'){
        // get a list of all types
        for (let i in list['results']){
            masterList.push(list['results'][i][type])
        }
    }

    // filter out all duplicates
    let setList = [...new Set(masterList)];
    //return filtered list
    return setList;
}

export const getValue = (index) =>{
    //do something on Click
    console.log(index);
}

export const BuildData = (carList) =>{
    // build the drop menus with the given data
    let dropdown = document.getElementsByClassName('yearDropdown')[0].children[1];

    dropdown.innerHTML = 'Year';
    
    carList.forEach((value, index)=>{
        dropdown.innerHTML += `<div class='option' id='option${index}' onClick=${(value)=>getValue()}>${value}</div>`;
    })

}