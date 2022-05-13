import React from 'react';
import Infocard from './Infocard';


const Info = () => {
    const data =[
        {
            id:1,
            title:'Opening Hours',        
            description:'lorem30',
            img:'https://i.ibb.co/WWMm9q5/clock-svg.png'
        },
        {
            id:2,
            title:'Visit our location Brooklyn', 
            description:'NY 10036, United States',
            img:'https://i.ibb.co/x6720xj/marker-svg.png' 
            
        },
        {
            id:3,
            title:'Contact us now',
            description:'+000 123 456789 ',
            img:'https://i.ibb.co/LSD0GN2/phone-svg.png'
        }
    ]
    return (
        <div className='grid grid-cols-3 gap-5 text-white mb-24 '>
            {
                data.map(info=> <Infocard 
                key={info.id}
                info={info}
                
                ></Infocard>)
            }
            
        </div>
    );
};

export default Info;