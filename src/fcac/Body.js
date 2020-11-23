import React, { useEffect } from 'react';
import './Body.css';
import { toggleDisplay } from './dropdown_menu';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getData, BuildData } from './body_functions';
import { render } from '@testing-library/react';

function Body() {

    useEffect(()=>{
        getData().then(years=>{
            BuildData(years);
        });
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
                                        <div className='title pointerCursor' onClick={toggleDisplay}>Year <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                            <div className='option' id='option1'>Loading Please wait</div>
                                        </div>
                                    </div>

                                    <div className='makeDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>Make <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                            <div className='option' id='option1'>Choose a Year</div>
                                        </div>
                                    </div>

                                    <div className='modelDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>Model <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                            <div className='option' id='option1'>Choose a Make</div>
                                        </div>
                                    </div>

                                    <div className='submodelDropdown dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>Submodel <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                            <div className='option' id='option1'>Choose a Model</div>
                                        </div>
                                    </div>
                                    
                                    <span>
                                    <div className='tpmsDropdown short dropdown'>
                                        <div className='title pointerCursor' onClick={toggleDisplay}>TMPS:NO <ExpandMoreIcon /></div>
                                        <div className='menu pointerCursor hide'>
                                            <div className='option' id='option1'>No</div>
                                        </div>
                                    </div>
                                    <div className='master'>
                                        <p>what's this?</p><div className='hidden'>
                                            WHAT IS TPMS?
                                            TPMS is an electronic system that alerts you with a dashbaord indicator light when your car's tire pressure fails to the point of needing inflation.
                                        </div>
                                    </div>
                                    </span>

                                    <span><input placeholder='zipcode' />
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

                                <button disabled>GET TIRE PRICING</button>
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
