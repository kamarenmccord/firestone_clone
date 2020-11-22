
const BASE_URL = 'http://localhost:9001/cars';

export const getData = () =>{
    // fetch data from backend
    let data = '';
    fetch(BASE_URL,{
        method: 'GET'
    }).then(response=>{
        return response.json()
    }).then(data=>{
        BuildData(data);
    }).catch(e=>{
        console.log(e);
    })
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

export const BuildData = (carList) =>{
    // build the drop menus with the given data
    let dropdown = document.getElementsByClassName('yearDropdown')[0].children[1];

    let filteredYears = extractor('Year', carList);

    for (let i in filteredYears){
        dropdown.innerHTML += `<div className='option' value='option${i}>${filteredYears[i]}</div>`;
    }

    console.log(dropdown);

}