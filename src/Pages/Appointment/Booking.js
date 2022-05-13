import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const Booking = ({date}) => {
    const [services,setServices]=useState([])
    const [treatment ,setTreatment]=useState(null)
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mt-16 mb-16'>
            <p className='text-center text-secondary text-2xl  mb-16 '> Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service 
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <Modal 
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            ></Modal>}
        </div>
    );
};

export default Booking;