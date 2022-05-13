import React from 'react';

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-center font-bold">LogIn</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                           
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>
                            
                        </label>
                    </div>
                </div>
                <div class="divider">OR</div>
                <button class="btn btn-outline mb-5 mx-5 ">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;