import React from 'react';
import Service from '../Service/Service';
import Terms from './Terms';

const Services = () => {
    const data=[
    
    { id:1,
      img:' https://i.ibb.co/dj4SyYj/cavity.png',
      title:'Fluoride Treatment',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos consectetur animi deserunt, numquam earum.",
    },
    { id:2,
      img:'https://i.ibb.co/xMqBgmB/fluoride.png',
      title:'Cavity Filling',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos consectetur animi deserunt, numquam earum.",
    },
    { id:3,
      img:'https://i.ibb.co/0McfRyW/whitening.png',
      title:'Teeth Whitening',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos consectetur animi deserunt, numquam earum.",
    },
]
    return (
        <div className='ml-14 mb-24'>
            <h1 className='text-2xl text-center mb-6'>Our services</h1>
            <h2 className='text-5xl text-center mb-14'>Services We Provide</h2>
        <div className='grid grid-cols-3 gap-5'>
        {
            data.map(service => <Service
            key={service.id}
            service={service}
            
            ></Service>
                )
        }
        </div>
      <Terms></Terms>
        </div>
    );
};

export default Services;