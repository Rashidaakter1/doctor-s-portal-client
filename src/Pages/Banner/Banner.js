import React from 'react';
import chair from '../../../src/assets/images/chair.png'
import bg from '../../../src/assets/images/bg.png'

const Banner = () => {
    return (
        <div >

            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} class="max-w-xl rounded-lg shadow-2xl flex-1" />
                    <div>
                        <h1 class="text-6xl font-bold flex-1">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <div className='flex items-center'>
                <div><h1 className='text-5xl'>Your New Smile Starts Here</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolores hic mollitia consequuntur! Modi, libero exercitationem deleniti mollitia laboriosam quam.</p>
                <button class="btn btn-primary">Get started</button>
              </div>

            <div>
                <img src={chair} alt="" />
            </div>
         </div> */}


            {/* <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div> */}
        </div>

    );
};

export default Banner;