import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './UserPage.css';
import { useStateValue } from '../stateProvider';
import GarageCar from './GarageCar';


const UserPage = () => {
    const history = useHistory();
    const [{vehicle}, ] = useStateValue();

    console.log("TODO: give vehicles indiviual ids")

    const returnToPrevPage = () =>{
        history.push("/firestonecomplete");
    }

    return (
        <div className='userpage'>
            <button className='returnButton' 
                    onClick={returnToPrevPage}>
                    Return
            </button>
            <div className='foreground'>
                <h2>Your Garage</h2>
            {vehicle.length>0 ? vehicle.map((car)=>(
                <GarageCar
                    id={car.id}
                    year={car.year}
                    make={car.make}
                    model={car.model}
                    submodel={car.submodel}
                />
            )): <div className='user__unknown'>No cars found in garage</div>}
            </div>
        </div>
    )
}

export default UserPage
