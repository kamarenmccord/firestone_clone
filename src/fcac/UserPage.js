import React from 'react'
import './UserPage.css';
import { useStateValue } from '../stateProvider';
import { RemoveShoppingCart } from '@material-ui/icons';

const UserPage = () => {
    const [{vehicle}, dispatch] = useStateValue();
    console.log('make sure to reset the button before exiting the prev screen');

    const removeCar = () =>{
        dispatch({
            type:'REMOVE_CAR',
            car:{
                id: 1,
            }
        })
        console.log("You have to give them indiviual ids")
    }

    return (
        <div className='userpage'>
            <a href='/'><button className='returnButton'>Return</button></a>
            <div className='foreground'>
                <h2>Your Garage</h2>
            {vehicle.length>0 ? vehicle.map((car, index)=>(
            <div className='user__wrapper'>
                <button onClick={removeCar.bind(this)} className='removeCar'>X</button>
                <div className={`user__year li`}>
                    {car.year}
                </div>
                <div className="user__make li">
                    {car.make}
                </div>
                <div className="user__model li">
                    {car.model}
                </div>
                <div className="user__submodel li">
                    {car.submodel}
                </div>
            </div>
            )): <div className='user__unknown'>No cars found in garage</div>}
            </div>
        </div>
    )
}

export default UserPage
