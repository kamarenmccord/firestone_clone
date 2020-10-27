import React from 'react';
import './LeftPromo.css';

function LeftPromo({background_img, header, text, subtext, link, video}) {
    // should take props {background_img, header, text, link, video}
    const backdrop=`background-image: url(${background_img})`
    return (
        <div className='leftpromo' style={{ backgroundImage: `url(${background_img})`}}>
            <div className='leftpromo__flexwrapper'>

                <div className='left_content'>
                    <iframe width="393" height="221" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className='right_content'>
                    <h1 className='add__title'>{header}</h1>
                    <div className='description'>{text}</div>
                        <div className='captions'>{subtext}</div>
                        <a href={link}>Learn more</a>
                </div>
                
            </div>
        </div>
    )
}

export default LeftPromo
