import React from 'react';

const Service = ({ service,setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-xl text-secondary">{name}</h2>
                {
                    slots.length > 0
                        ? <>
                            {slots[0]}
                        </>
                        :
                        <>{'Try Again'}</>
                }
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}   Available</p>
                <div class="card-actions justify-center">
                    <label
                    onClick={()=>setTreatment(service)}
                    
                    disabled={slots.length === 0}  for="booking-modal" class=" modal-button btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white">Book Apponiment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;