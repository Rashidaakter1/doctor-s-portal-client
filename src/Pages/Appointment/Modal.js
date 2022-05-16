import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Modal = ({ date, treatment ,setTreatment ,refetch}) => {
    const [user, loading, error] = useAuthState(auth);
    const { name, _id, slots } = treatment;
   
    const handleBooking = event =>{
        event.preventDefault()
        const slots = event.target.slot.value
        console.log(_id,slots,name);
        const formattedDate = format(date, 'PP');
       
        const booking ={
            treatmentId:_id,
            treatment: name,
            slots,
            date:formattedDate,
            patient:user.email,
            patientName: user.displayName,
            phone:event.target.phone.value,

        }

        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
          })
          .then(response => response.json())
          .then(data => {
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slots}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slots}`)
            }
            console.log('Success:', data);
            refetch()
            setTreatment(null)
          })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg"> {name}</h3>
                    <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-8 mb-4' >
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-accent w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            <option  disabled selected>{slots[0]}</option>
                            {
                                slots.map((slot,index) => <option
                                    key={index}
                                    value={slot} >{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name'disabled value={user?.displayName || ''} className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} placeholder="Enter Email" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary input-accent w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;