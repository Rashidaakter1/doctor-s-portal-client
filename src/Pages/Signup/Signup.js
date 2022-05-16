import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Signup = () => {

    const [signInWithGoogle,gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth); 

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token]=useToken(user||gUser)
    
    const navigate = useNavigate();
    let errorElement;
        if (error || gError||updateError) {
            errorElement= <div>
            <p className='text-red-500'> <small>Error: {error?.message || gError?.message||updateError?.message}</small></p>
          </div>
          }
          if (loading||gLoading||updating) {
            return <Loading></Loading>;
          }

    if (token) {
        // console.log(user);
        navigate('/appointment')
    }


    const onSubmit = async data =>{
       await createUserWithEmailAndPassword(data.email, data.password)
         console.log(data)
         await updateProfile({ displayName:data.name });
        console.log('update done');
       
        };
        
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold ">SignUp</h2>
           
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input 
                    type="text" placeholder="Name" 
                    {...register("name", { 
                        required:{
                            value:true,
                            message:'Name is required'
                        }
                     })}
                    className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span> }
                   

                        

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input 
                    type="email" placeholder="Email" 
                    {...register("email", { 
                        required:{
                            value:true,
                            message:'email is required'
                        },
                        pattern:{
                            value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message:'provide a vaild email'
                        }
                     })}
                    className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }

                        

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>

                    </label>
                    <input 
                    type="password" placeholder="Password" 
                    {...register("password", { 
                        required:{
                            value:true,
                            message:'password is required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                     })}
                    className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }

                    </label>

                     {errorElement}
                    <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="Sign Up" />

                    <p className='text-center mt-3'><small>Already have an account? <Link className='text-secondary' to='/login'>Please LogIn</Link></small></p>
                </div>  

                    
                </form>
            </div>
            <div className="divider  mx-5 ">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline mb-5  mx-5  ">Continue with Google</button>
        </div>
    </div>
    );
};

export default Signup;