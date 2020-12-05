import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import { toggleDisplay } from './dropdown_menu';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getData } from './body_functions';
import { useStateValue } from '../stateProvider';

function Body() {

    const [{vehicle}, dispatch] = useStateValue();
    const updateUser = () =>{
        dispatch({
            type:'ADD_CAR',
            car:{
                id: Math.floor((Math.random()*999999)+1),
                year:userYear,
                make:userMake,
                model:userModel,
                submodel:userSubmodel,
            }
        })
    }

    let [carListOptions, carListOptionsSet] = useState([]);
    let [ carSubmodel, carSubmodelSet ] = useState([]);
    let [ carMake, carMakeSet ] = useState([]);
    let [ carModel, carModelSet ] = useState([]);
    let [ tpmsOptions, tpmsOptionSet ] = useState([]);
    let [ carYear, carYearSet ] = useState('');
    let [ userYear, userYearSet ] = useState('');
    let [ userMake, userMakeSet ] = useState('');
    let [ userModel, userModelSet ] = useState('');
    let [ userSubmodel, userSubmodelSet ] = useState('');
    let [userTpms, userTpmsSet ] = useState('No');
    let [userZip, userZipSet ] = useState('');


    const hideMenu = (menuElem) =>{
        const parentElem = menuElem.currentTarget.parentElement.parentElement;
        parentElem.children[1].style.display = 'none';
    }

    const filterMakes = () => {
        // return makes that existed that year
        let returnList = []
        carListOptions.forEach((carObject)=>{
            if (carObject.Year == userYear){
                returnList.push(carObject.Make)
        }})

        // filter out all duplicates
        let setList = [...new Set(returnList.sort())];
        //return filtered list
        return setList;
    }

    const filterModels = () =>{
        let returnList = []
        carListOptions.forEach((carObject)=>{
            if (carObject.Year == userYear && carObject.Make == userMake){
                returnList.push(carObject.Model)
            }
        })
            // filter out all duplicates
            let setList = [...new Set(returnList.sort())];
            //return filtered list
            return setList;
    }

    const filterSubmodels = () =>{
        let returnList = []
        carListOptions.forEach((carObject)=>{
            if (carObject.Year == userYear && carObject.Make == userMake && carObject.Model == userModel){
                returnList.push(carObject.Category)
            }
        })
            // filter out all duplicates
            let setList = [...new Set(returnList.sort())];
            //return filtered list
            return setList;
    }

    const applyFilter = () =>{
        // take userOptions and filter next option
        if (userYear){
            //filter makes
            carMakeSet(filterMakes())
        }
        if (userMake){
            //filter models
            carModelSet(filterModels())
        }
        if (userModel){
            //filter Submodels
            carSubmodelSet(filterSubmodels())
        }
    }

    const getYear = (yearElem) =>{
        hideMenu(yearElem);
        userMakeSet(''); //effects the elem.title not here
        userModelSet('');
        userSubmodelSet('');
        userYearSet(yearElem.currentTarget.innerText);
    }

    useEffect(()=>{
        applyFilter();
        if (!userSubmodel){
            deactivateButton();
        }
    }, [userYear, userMake, userModel, userSubmodel])

    const getMake = (makeElem) =>{
        if (userYear > 1994){
            tpmsOptionSet(['Yes', 'No'])
        }
        userMakeSet(makeElem.currentTarget.innerText);
        userModelSet('');
        userSubmodelSet('');
        hideMenu(makeElem);
    }

    const getModel = (modelElem) =>{
        userModelSet(modelElem.currentTarget.innerText);
        userSubmodelSet('');
        hideMenu(modelElem);
    }

    const getSubmodel = (submodelElem) =>{
        userSubmodelSet(submodelElem.currentTarget.innerText);
        hideMenu(submodelElem);
        activateButton();
    }

    const getTpms = (tpmsElem) =>{
        hideMenu(tpmsElem);
        userTpmsSet(tpmsElem.currentTarget.innerText);
    }

    const deactivateButton = () =>{
        const button = document.getElementById('redboxButton');
        button.disabled=true;
        button.style.color = '#eb8f82';
        button.style.borderColor='#a71907';
    }

    const activateButton = () =>{
        const button = document.getElementById('redboxButton');
        button.disabled = false;
        button.style.color = 'white';
        button.style.borderColor = 'black';
    }

    const submitButton = (button) =>{
        // each car added to userState should have a unique id
        // should not update user if car already exists in users "garage"
        updateUser();
    }


    const filterOut = (type, arrayToFilter) =>{
        let masterList = [];
        // get a list of all types
        for (let i in arrayToFilter['results']){
            masterList.push(arrayToFilter['results'][i][type])
        }
        // filter out all duplicates
        let setList = [...new Set(masterList)];
        //return filtered list
        return setList;
    }

    useEffect(()=>{
        getData()
        .then((data)=>{
            carListOptionsSet(data['results']);
            carYearSet(filterOut('Year', data));
            carMakeSet(filterOut('Make', data).sort());
            carModelSet(filterOut('Model', data));
            carSubmodelSet(filterOut('Category', data));
        })
        .catch(e=>{console.log(e)})

    }, [])

    const switchDisplay = (elem) =>{
        // adds pagination to redbox
        if (elem.currentTarget.tagName === 'H4'){
            let all_hFours = document.getElementsByClassName('hFour');

            for (let tag of all_hFours){
                if (tag == elem.currentTarget){
                    let children = tag.parentElement.children[1];
                    children.style.display = 'block';
                    tag.parentElement.style.backgroundColor = '#d81e05';
                } else {
                    let children = tag.parentElement.children[1];
                    tag.parentElement.style.backgroundColor = '#951200';
                    children.style.display = 'none';
                }
            }
        }  else if (elem.currentTarget.tagName === 'DIV') {
            let sliders = document.getElementsByClassName('subchoicebutton');
            for (let x of sliders){
                let subDiv = x.parentElement.parentElement.children[1].children;
                if (x == elem.currentTarget){
                    x.style.backgroundColor = 'white';
                    x.style.color = '#d81e05';
                    
                    for (let y of subDiv){
                        if (x.className == 'button_left subchoicebutton' && y.className == 'content1 content'){
                            y.style.display = 'flex';
                            y.style.flexDirection= 'column';
                        } else if (x.className == 'button_right subchoicebutton' && y.className == 'content2 content')
                        {
                            y.style.display = 'flex';
                            y.style.flexDirection= 'column';
                        } else {
                            if (y.className=='content1 content' || y.className=='content2 content'){
                            y.style.display = 'none';
                            }
                        }
                    }

                } else {
                    x.style.backgroundColor = '#d81e05';
                    x.style.color = 'white';
                }
            }
        }
    }

    return (
        <div className='body'>
            <div className='uppercontent'>
                <div className='redbox'>
                    <div className='dropmenu_left dropdown'>
                        <h4 className='hFour' onClick={switchDisplay.bind(this)}>SHOP TIRES</h4>
                        <div className='dropcontent dropleft'>
                            <div className='sliderbutton'>
                                <div className='button_left subchoicebutton' onClick={switchDisplay.bind(this)}>
                                    BY VEHICLE
                                </div>
                                <div className='button_right subchoicebutton' onClick={switchDisplay.bind(this)}>
                                    BY TIRE SIZE
                                </div>
                            </div>
                            <div className='contentbox'>
                                <p>All fields are required</p>
                                <div className='content1 content'>

                                    <div className='yearDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>{userYear? userYear: 'Year'} <div><ExpandMoreIcon /></div></div>
                                        <div className='menu pointerCursor hide'>
                                            {carYear ? carYear.map((year, index)=>(
                                                <div className='option'
                                                    key={`option${index}`} 
                                                    onClick={getYear.bind(this)}
                                                >{year}</div>
                                            )): <div className='option' key='null' id='null'>Loading...</div>}
                                        </div>
                                    </div>

                                    <div className='makeDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>{userMake? userMake: 'Make'} <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                        {carMake && userYear ? carMake.map((make, index)=>(
                                                <div className='option'
                                                    key={`option${index}`} 
                                                    onClick={getMake.bind(this)}
                                                >{make}</div>
                                            )): <div className='option' key='null' id='null'>Choose a year</div>}
                                        </div>
                                    </div>

                                    <div className='modelDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>{userModel? userModel : 'Model'} <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                        {carModel && userMake ? carModel.map((model, index)=>(
                                                <div className='option'
                                                    key={`option${index}`} 
                                                    onClick={getModel.bind(this)}
                                                >{model}</div>
                                            )): <div className='option' key='null' id='null'>Choose a Make</div>}
                                        </div>
                                    </div>

                                    <div className='submodelDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>{userSubmodel? userSubmodel : 'Submodel'} <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                        {carSubmodel && userModel ? carSubmodel.map((submodel, index)=>(
                                                <div className='option'
                                                    key={`option${index}`} 
                                                    onClick={getSubmodel.bind(this)}
                                                >{submodel}</div>
                                            )): <div className='option' key='null' id='null'>Choose a Model</div>}
                                        </div>
                                    </div>
                                    
                                    <span>
                                    <div className='tpmsDropdown short dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>{userTpms? `TPMS: ${userTpms}`: "TPMS: No"} <div><ExpandMoreIcon /></div></div>
                                        <div className='menu pointerCursor hide'>
                                            {userSubmodel && userYear ? tpmsOptions.map((option, index)=>(
                                            <div 
                                                className='option' 
                                                id={`option${index}`}
                                                onClick={getTpms.bind(this)}
                                                >{option}</div>
                                            )) : <div className='option' id='null'>Choose a Submodel</div>}
                                        </div>
                                    </div>
                                    <div className='master'>
                                        <p>what's this?</p><div className='hidden'>
                                            WHAT IS TPMS?
                                            TPMS is an electronic system that alerts you with a dashbaord indicator light when your car's tire pressure fails to the point of needing inflation.
                                        </div>
                                    </div>
                                    </span>

                                    <span><input type='text' pattern="[0-9]{5}"  placeholder='zipcode' value={userZip} onChange={e=>userZipSet(e.target.value)} />
                                    <div className='master'>
                                        <p>Why?</p><div className='hidden'>
                                            WHY DO WE ASK ABOUT YOUR ZIPCODE? ZIP code is needed for local pricing.
                                        </div>
                                    </div>
                                    </span>
                                </div>

                                <div className='content2 content'>
                                    <select name='width' id='width'>
                                        <option value='null' required>Cross Section</option>
                                    </select>
                                    <select name='aspect' id='aspect'>
                                        <option value='null' required>Aspect</option>
                                    </select>
                                    <select name='diameter' id='diameter'>
                                        <option value='null' required>Rim Diameter</option>
                                    </select>
                                    <span>
                                        <input placeholder='zipcode' />
                                        <div className='master'>
                                        <p>Why?</p><div className='hidden'>
                                            WHY DO WE ASK ABOUT YOUR ZIPCODE? ZIP code is needed for local pricing.
                                        </div>
                                        </div>
                                    </span>
                                </div>

                                <button onClick={submitButton.bind(this)} id='redboxButton'>{userSubmodel ? <Link to='/userpage'>GET TIRE PRICING</Link> : <p>GET TIRE PRICING</p>}</button>
                            </div>
                        </div>
                    </div>
                    <div className='dropmenu_right dropdown'>
                        <h4 className='hFour' onClick={switchDisplay.bind(this)}>GET SERVICE</h4>
                        <div className='dropcontent dropright'>
                            <div className='menuop'>
                                <span>OIL CHANGE</span>
                                <span><KeyboardArrowRightIcon /></span>
                                </div>
                            <div className='menuop'>
                                <span>BRAKES</span>
                                <span><KeyboardArrowRightIcon /></span>    
                            </div>
                            <div className='menuop'>
                                <span>BATTERIES</span>
                                <span><KeyboardArrowRightIcon /></span>     
                            </div>
                            <div className='menuop last'>
                                <span>ALIGNMENT</span>
                                <span><KeyboardArrowRightIcon /></span>     
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightbox'>
                    <div className='title'>
                        <span>HELPING OUR NEIGHBORS</span><br />
                        SINCE 1926
                    </div>
                    <a href='https://www.firestonecompleteautocare.com/contact-free-services/'><button>LEARN MORE</button></a>
                </div>
            </div>
        </div>
    )
}

export default Body
