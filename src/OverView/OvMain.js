import React from 'react';
import "./OvMain.css";

function OvMain() {
    return (
        <div className='ovmain'>
            <div className='ovmain__header'>
                <div className='ovmain__headtext'>
                    <span className='ovmain__uppertext'>MAKE YOUR CAR A</span>
                    <span className='ovmain__lowertext'>FIRESTONE</span>
                </div>
                <button className='ovmain__upperbutton'>
                    <div className='ovmain__uppertext'>Go To</div>
                    <div className='ovmain__lowertext'>FIRESTONE<br />TIRES</div>
                </button>
                <button className='ovmain__lowerbutton'>
                    <div className='ovmain__uppertext'>Go To</div>
                    <div className='ovmain__lowertext'>FIRESTONE COMPLETE AUTO CARE</div>
                </button>
            </div>

            <div className='ovmain__companyinfo'>
                <h3>ALL FIRESTONE COMPANIES</h3>
                <div className='ovmain__autocare'>
                    <h2>AUTO CARE & TIRES</h2>
                    <ul>
                        <li>Firestone Complete Auto Care Stores</li>
                        <li>Firestone Consumer Tires</li>
                        <li>Firestone Commericial Truck Tires</li>
                        <li>Firestone Agricultural Tires</li>
                        <li>Firestone Off-The-Road Tires</li>
                        <li>Bridgestone Americas</li>
                    </ul>
                </div>
                <div className='ovmain__manufacturing'>
                    <h2>MANUFACTURING & PRODUCTION</h2>
                    <ul>
                        <li>Firestone Natural Rubber</li>
                        <li>Firestone Fibers & Textiles</li>
                        <li>Firestone Building Products</li>
                        <li>Firestone Industrial Products</li>
                        <li>Firestone Polymers</li>
                        <li>Firestone Tubes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OvMain
