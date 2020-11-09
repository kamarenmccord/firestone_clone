import React, { useEffect } from 'react';
import './Body.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Body() {

    useEffect(()=>{
        // year
        let options= '';
        let years = [];
        for (let i = 1983; i<=2021; i++){
            years.unshift(i);
        }
        options += `<option values='' selected>year</option>`
        for (let x of years){
            options += `<option value=${x}>${x}</option>`
        }
        document.getElementById('year').innerHTML = options;

        // make
        options = '';
        let Makes = ['Ford', 'Toyota', 'Alfa Romero', 'Audi', 'BMW', 'Mercedies', 'Jaguar', 'Chevrolet'].sort();
        options += `<option values='' selected>Make</option>`;
        for (let x of Makes){
            options += `<option value=${x}>${x}</option>`;
        }
        document.getElementById('make').innerHTML = options;

        // model
        options = '';
        let models = ['E46', 'M3', 'civic', 'accord', 'spider', 'corolla' ,'camry', 'tahoe', 'escort']
        options += `<option values='' selected>Model</option>`;
        for (let x of models){
            options += `<option value=${x}>${x}</option>`;
        }
        document.getElementById('model').innerHTML = options;

        // submodel
        options = '';
        let submodels = ['ex', 'dx', 'ls', 's', 'ss'];
        options += `<option values='' selected>Submodel</option>`;
        for (let x of submodels){
            options += `<option value=${x}>${x}</option>`;
        }
        document.getElementById('submodel').innerHTML = options;

    }, [])

    const switchDisplay = (elem) =>{

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
                            y.style.display = 'inline';
                        } else if (x.className == 'button_right subchoicebutton' && y.className == 'content2 content')
                        {
                            y.style.display = 'inline';
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
                                    <select name='year' id='year'>
                                        <option value='null' required>Year</option>
                                    </select>
                                    <select name='year' id='make'>
                                        <option value='null' required>Make</option>
                                    </select>
                                    <select name='year' id='model'>
                                        <option value='null' required>Model</option>
                                    </select>
                                    <select name='year' id='submodel'>
                                        <option value='null' required>Submodel</option>
                                    </select>

                                    <span>
                                        <select name='year' id='tmps'>
                                        <option value='null' required>Tpms: no</option>
                                        <option value='yes'>yes</option>
                                        <option value='no'>no</option>
                                        </select> What's this?
                                    </span>

                                    <span><input placeholder='zipcode' /> Why?</span>
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
                                    <span><input placeholder='zipcode' /> Why?</span>
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
