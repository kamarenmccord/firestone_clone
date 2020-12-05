import React from 'react';
import './FindaStore.css';

function FindaStore() {
    return (
        <div className='findastore'>
            <div className='findastore__wrapper'>
                <div className='uppertext'>
                    FIND THE RIGHT TIRES AT YOUR LOCAL STORE
                </div>
                <div className='lowertext'>
                    <a href='/firestonetires'>FIND A STORE</a> or <a href='/firestonetires'>MAKE AN APPOINTMENT</a>
                </div>
            </div>
        </div>
    )
}

export default FindaStore
