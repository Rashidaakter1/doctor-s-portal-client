import React from 'react';
import bg from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <div style={{"background":`url(${bg})`,
                        "backgroundSize":"cover"
        
        }} className='flex items-center '>
            <div>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div>
                <h1 className='text-primary'>Appointment</h1>
                <h2 className='text-4xl '>Make an appointment Today</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page  
                </p>
                <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
            
        </div>
    );
};

export default MakeAppointment;