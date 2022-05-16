import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle,gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
      const [token]=useToken(user|| gUser)
   
  let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
        let errorElement;
        if (error || gError) {
            errorElement= <div>
            <p className='text-red-500'> <small>Error: {error?.message || gError?.message}</small></p>
          </div>
          }
          if (loading||gLoading) {
            return <Loading></Loading>;
          }

    if (token) {
        // console.log(user,gUser);
        navigate(from, { replace: true });
    }

    const onSubmit = data =>{
        signInWithEmailAndPassword(data.email, data.password)

        
        //  console.log(data)
        };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">LogIn</h2>
               
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="Login" />

                        <p className='text-center mt-3'><small>New to Doctor's Portal? <Link className='text-secondary' to='/signup'>Create an Account</Link></small></p>
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

export default Login;