import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Modal from './Modal';
import Service from './Service';

const Booking = ({date}) => {
    // const [services,setServices]=useState([])
    const [treatment ,setTreatment]=useState(null)
    const formattedDate = format(date, 'PP')

    const { isLoading,  data : services,refetch } = useQuery(['available',formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`)
     .then(res =>
       res.json()
     )
   )
 
   if (isLoading){
       return <Loading></Loading>
   }
    



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])
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
            refetch={refetch}
            ></Modal>}
        </div>
    );
};

export default Booking;