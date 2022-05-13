import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from '../Shared/Navbar/Footer/Footer';
import { format } from 'date-fns';
import Booking from './Booking';

const Appointment = () => {
    const [date,setDate]=useState(new Date() )
    return (
        <div>
            <div style={{
                'background': `url(${bg})`,
                 'backgroundSize':'cover' 
            }} class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        
                        />
                        
                    </div>
                </div>

            </div>
            <Booking date={date} setDate={setDate} ></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;