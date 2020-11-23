
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

const extractor = (type, list) => {

    let masterList = [];

    if (type==='Year'){
        // get a list of all types
        for (let i in list['results']){
            masterList.push(list['results'][i][type])
        }
    } else if (type==='Make'){
        // filter out all makes that fall under the year
        const year = document.getElementsByClassName('yearDropdown')[0].innerText;

        let makeList= list['results'].filter((value)=>value['Year'] == year)

        let makes = makeList.map(value=>value[type]);
        
        const makeSet = [...new Set(makes)]
        return makeSet;
    } else if (type==='Model'){
        // filter out all models that fall under the make. add second filter for year
        const make = document.getElementsByClassName('makeDropdown')[0].innerText;

        let modelList= list['results'].filter((value)=>value['Make'] == make)

        let models = modelList.map(value=>value[type]);
        
        const modelSet = [...new Set(models)]
        return modelSet;
    } else if (type==='Category'){
        // filter out all models that fall under the make. add second filter for year
        const model = document.getElementsByClassName('modelDropdown')[0].innerText;

        let modelList= list['results'].filter((value)=>value['Model'] == model)

        let models = modelList.map(value=>value[type]);
        
        const modelSet = [...new Set(models)]
        return modelSet;
    }

    // filter out all duplicates
    let setList = [...new Set(masterList)];
    //return filtered list
    return setList;
}

export const updateNextElem = (elem, type) =>{
    elem.children[1].innerText = 'Loading...';
    elem.children[0].style.backgroundColor = 'white';

    if (type==='year'){
        buildMake()
    } else if (type === 'make'){
        buildModel()
    } else if (type === 'model'){
        buildSubmodel();
    }
}

export const addListeners = (type) =>{
    var group;
    var nextElem;
    if (type==='year'){
        const years = document.getElementsByClassName('yearDropdown')[0];
        group = years.children[1].children;
        nextElem = years.parentElement.children[1];
    } else if (type==='make'){
        const years = document.getElementsByClassName('makeDropdown')[0];
        group = years.children[1].children;
        nextElem = years.parentElement.children[2];
    } else if (type==='model'){
        const years = document.getElementsByClassName('modelDropdown')[0];
        group = years.children[1].children;
        nextElem = years.parentElement.children[2];
    } else if (type==='submodel'){
        const years = document.getElementsByClassName('submodelDropdown')[0];
        group = years.children[1].children;
    }

    if (type !=='submodel'){
        Object.entries(group).forEach((elem, index)=>{
            elem[1].addEventListener('click', ()=>{
                //function that changes things
                const value = elem[1].innerText;
                const menu = elem[1].parentElement;
                const displayValue = menu.parentElement.children[0];
                menu.style.display = 'none';
                displayValue.innerText = value;
                displayValue.value = value;
                updateNextElem(nextElem, type);
            })
        })
    }
    if (type === 'submodel'){
        Object.entries(group).forEach((elem, index)=>{
            elem[1].addEventListener('click', ()=>{
                //function that changes things
                const value = elem[1].innerText;
                const menu = elem[1].parentElement;
                const displayValue = menu.parentElement.children[0];
                menu.style.display = 'none';
                displayValue.innerText = value;
                displayValue.value = value;
                button.disabled=false;
                button.style.borderColor='black';
                button.style.color = 'white';
        })
        const button = document.getElementById('redboxButton');
        button.addEventListener('click', ()=>{
            console.log('click');
        })
    })
    }
}

export const buildSubmodel = () =>{
    getData()
    .then(allModels=>{
        let modelSet = extractor('Category', allModels);
        let dropdown = document.getElementsByClassName('submodelDropdown')[0].children[1];
    
        dropdown.innerHTML = 'submodel';
        
        modelSet.forEach((value, index)=>{
            dropdown.innerHTML += `<div class='option' id='option${index}'>${value}</div>`;
        })
        addListeners('submodel');
    })
}

export const buildModel = () =>{
    getData()
    .then(allModels=>{
        let modelSet = extractor('Model', allModels);
        let dropdown = document.getElementsByClassName('modelDropdown')[0].children[1];
    
        dropdown.innerHTML = 'Model';
        
        modelSet.forEach((value, index)=>{
            dropdown.innerHTML += `<div class='option' id='option${index}'>${value}</div>`;
        })
        addListeners('model');
    })
}

export const buildMake = () =>{
    getData()
    .then(allMakes=>{
        let makeSet = extractor('Make', allMakes);
        let dropdown = document.getElementsByClassName('makeDropdown')[0].children[1];
    
        dropdown.innerHTML = 'Make';
        
        makeSet.forEach((value, index)=>{
            dropdown.innerHTML += `<div class='option' id='option${index}'>${value}</div>`;
        })
        addListeners('make');
    });
}

export const BuildData = (carList) =>{
    // build the drop menus with the given data
    let years = extractor('Year', carList)
    let dropdown = document.getElementsByClassName('yearDropdown')[0].children[1];

    dropdown.innerHTML = 'Year';
    
    years.forEach((value, index)=>{
        dropdown.innerHTML += `<div class='option' id='option${index}'>${value}</div>`;
    })
    addListeners('year');

}