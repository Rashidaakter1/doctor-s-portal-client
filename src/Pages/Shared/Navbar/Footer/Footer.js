import React from 'react';
import footer from '../../../../assets/images/footer.png'

const Footer = () => {
    return (

        <div>
            <footer style={{
                'background': `url(${footer})`,
                backgroundSize: 'cover'

            }} class="footer p-10  text-black-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>

            </footer>

            <div className='text-center'>
                Copyright 2022 All Rights Reserved
            </div>
        </div>



    );
};

export default Footer;