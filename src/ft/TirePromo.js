import React from 'react';
import "./TirePromo.css";
import Promo from './Promo';

function TirePromo() {
    const spacer = <div className='body__spacer' />
    return (
        <div className='tirepromo'>
            <Promo
                side='right'
                background_img='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/Brands/LE3_TireTreadBG_darker2.jpg'

                header='Firestone Destination LE3'
                text="Light Truck/SUV, All Season
                Drive with Firestone Destination LE3 tires, and the seasons can change. Your plans don't have to The Destination LE3 is an all-season truck and SUV tire built. for maximum comfort and reliability in wet or dry conditions. Backed by a 70,000-mile warranty* and a 90-day buy and try guarantee, the Firestone Destination LE3 is an all-season tire you can count on year-round."
                subtext="*Certain conditions and limitations apply. See warranty manual for details."
                link="https://www.firestonetire.com/tire/destination-le3"
                video="https://www.youtube.com/embed/6RpizVPeRn8"
            />
            {spacer}
            <Promo
                side='left'
                background_img="https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/Brands/weathergrip/weathergrip_video_background.jpg"

                header='TAKE ON ANY FORECAST'
                text="The Firestone WeatherGrip is an all-weather touring tire built to keep you in control, no matter the weather. Designed for Cars, Minivans and CUVs, the WeatherGrip is engineered to deliver confident wet performance year round and comes backed by a 65,000 mile limited mileage warranty*. Take on any forecast with the Firestone WeatherGrip. *Certain conditions and limitations apply. See Firestone.com/Warranty for details. "
                link="https://www.firestonetire.com/tire/weathergrip"
                video="https://www.youtube.com/embed/BdA1uIcOg8g"
            />
            {spacer}
            <Promo
                side='right'
                background_img='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/Brands/Destination/FST_destination_allweathertires_bg1.jpg'

                header='Firestone Destination A/T2'
                text="Light/Medium Truck, All Season
                The Firestone Destination A/T2 is an all-terrain truck & SUV tire built for dependable and longer-lasting performance.* Backed by a 55,000 mile limited warranty, the Firestone Destination A/T2 is built tough for dependability on or off road. "
                subtext="*as compared to the Destination A/T "
                link="https://www.firestonetire.com/tire/destination-at2"
                video="https://www.youtube.com/embed/IE597YH1L4o"
            />
            {spacer}
            <Promo
                side='left'
                background_img='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/Brands/Destination/FST_destination_heavydutytires_bg1.jpg'

                header='Firestone Destination X/T'
                text="Light/Medium Truck, All Season
                The Firestone Destination X/T is an all-terrain light truck and SUV tire built for dependable off-road traction and heavy-duty toughness that lasts. Backed by a 50,000 mile limited warranty, this all-weather tire delivers year-round performance.  "
                link="https://www.firestonetire.com/tire/destination-xt"
                video="https://www.youtube.com/embed/eiCJwlx8qfk"
            />
            {spacer}
        </div>
    )
}

export default TirePromo
