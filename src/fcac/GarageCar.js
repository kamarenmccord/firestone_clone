import React from 'react';
import { useStateValue } from '../stateProvider';
import { RemoveShoppingCart } from '@material-ui/icons';

const GarageCar = ( { id, year, make, model, submodel }) => {

    const [, dispatch] = useStateValue();

    const removeCar = () =>{
        dispatch({
            type:'REMOVE_CAR',
            id: id,
        })
    }

    return (
        <div className='user__wrapper'>
            <button onClick={removeCar} className='removeCar'>X</button>
            <div className={`user__year li`}>
                {year}
            </div>
            <div className="user__make li">
                {make}
            </div>
            <div className="user__model li">
                {model}
            </div>
            <div className="user__submodel li">
                {submodel}
            </div>
        </div>
    )
}

export default GarageCar
