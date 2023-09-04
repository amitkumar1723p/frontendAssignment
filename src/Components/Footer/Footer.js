import React from 'react'
import Logo from '../../Images/Logo.png'
import Twiter from '../../Images/twiter.png'
import BallLogo from '../../Images/ball.png'
import Github from '../../Images/Github.png'
import Linkedin from '../../Images/Linkden.png'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer_Container_Main'>
            <div className='footer_Container'>
                <div className='left'>
                    <img src={Logo} alt="logo" />
                    <p className='email'>
                        info@top-one-percent.com
                    </p>
                    <p className='contact'>
                        +91 97395-61394
                    </p>
                </div>

                <div className='right'>
                    <div className='table' >
                        <p className='heading'>Courses</p>
                        <p className='r_w'>GRE</p>
                        <p className='r_w'> GMAT</p>
                        <p className='r_w'>Admission</p>
                    </div>
                    <div className='table'>
                        <p className='heading'>Company</p>
                        <p className='r_w'>About us</p>
                        <p className='r_w'>Testimonials</p>
                        <p className='r_w'>Contact Us</p>
                        <p className='r_w'> Blogs</p>



                    </div>
                    <div className='table'>
                        <p className='heading'>Courses</p>
                        <p className='r_w'>Privacy Policy</p>


                    </div>

                </div>



            </div>


            <div className='icon_Container'>
                <p> Copyright© 2022 BOLD Education Pvt. Ltd. All Rights Reserved.</p>
                <div className='icon'>
                    <img src={Twiter} alt="Twiter" />
                    <img src={BallLogo} alt="Balllogo" />
                    <img src={Github} alt="Github" />
                    <img src={Linkedin} alt="Linkedin" />
                </div>


            </div>






        </div>
    )
}
