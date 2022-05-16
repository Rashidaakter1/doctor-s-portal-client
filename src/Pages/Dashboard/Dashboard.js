import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content text-2xl font-bold text-primary ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>

                    <Outlet></Outlet>

                    {/* <!-- Page content here --> */}
                    
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointment </Link></li>
                        <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;