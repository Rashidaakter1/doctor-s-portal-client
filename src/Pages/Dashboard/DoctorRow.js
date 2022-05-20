import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty, email } = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {

                if (data.deletedCount) {

                    toast.success(`${name} is deleted `)
                    console.log('data', data);
                    refetch()
                }


            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-xs btn-error">DELETE</button></td>
        </tr>
    );
};

export default DoctorRow;