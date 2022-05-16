import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [appointment, setAppointment] = useState([])
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer  ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        
                       
                    }
                    return res.json()
            })
            .then(data => {
                setAppointment(data)
            })
    }, [user])
    return (
        <div className='text-accent text-sm'>
           <h2 className='text-xl '>My Appointments: {appointment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                        <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        { appointment.map((a,index)=> <tr>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slots}</td>
                                <td>{a.treatment}</td>
                        </tr>)
                            }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;