import React from 'react';

import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const AddDoctor = () => {


    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    const imageStorage = '74e5c723ad8c8f24be7ea70a54d7e813'

    const onSubmit = async data => {
        const img = data.img[0]
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage}`
        const formData = new FormData();
        formData.append('image', img);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {

                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img,
                    }

                    //send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if(data.insertedId){
                                toast.success('doctor added')
                            }
                            else{
                                toast.error('not Added a doctor')
                            }
                            reset()
                            console.log('Success:', data);
                        })

                }
                console.log(result);
            })

    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold ">Add Doctors</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input
                            type="text" placeholder="Name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}




                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input
                            type="email" placeholder="Email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a vaild email'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}



                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Speciality</span>

                        </label>
                        <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                            }

                        </select>







                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">photo</span>

                        </label>
                        <input
                            type="file" placeholder="photo"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}




                        </label>
                    </div>
                    <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="add" />


                </form>
            </div>
        </div>
    );
};

export default AddDoctor;