import { format } from 'date-fns';
import React from 'react';

const Modal = ({ date, treatment ,setTreatment }) => {
    const { name, _id, slots } = treatment;
    const handleBooking = event =>{
        event.preventDefault()
        const slots = event.target.slot.value
        console.log(_id,slots,name);

        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg"> {name}</h3>
                    <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-8 mb-4' >
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-accent w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            <option  disabled selected>{slots[0]}</option>
                            {
                                slots.map(slot => <option value={slot} >{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Enter Email" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary input-accent w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;