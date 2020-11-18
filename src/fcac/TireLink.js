import React from 'react';
import './TireLink.css';

const TireLink = ({link, title, src}) => {
    return (
        <div className='tirelink'>
            <a href={link}>
                <img
                    src={src}
                    alt=''
                />
                <h3>{title}</h3>
            </a>
        </div>
    )
}

export default TireLink
