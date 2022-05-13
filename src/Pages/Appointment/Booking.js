import { format } from 'date-fns';
import React from 'react';

const Booking = ({date}) => {
    return (
        <div>
            <p className='text-center text-secondary text-2xl'> Available Appointments on {format(date, 'PP')}</p>

        </div>
    );
};

export default Booking;