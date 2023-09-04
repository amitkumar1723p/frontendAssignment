import React from 'react'
import HomeMenImage from '../../Images/menhome.png'
import './Home.css'
import Logo from '../../Images/Logo.png'
export default function Home() {
    return (



        <div className='homecontainer'>
            <ul>

                <div className='logo_line'>
                    <img src={Logo} alt="logo" />
                    {/* <li> Top One PERCENT</li>
                    <li>99<sup><small>th</small></sup> PERCENTILE CLUB</li> */}
                </div>






                <div className='li_Container'>
                    <li>GMAT</li>
                    <li>GRE</li>
                    <li>Admissions</li>
                    <li>Testimonials</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </div>
                <button>Get Demo</button>

            </ul>

            <div className='home_second'>
                <div className='home_right'>
                    <p className='heading_p'> Beacome the top 1% scorer in <span>GMAT</span></p>
                    <button> Request a live Demo</button>
                    <small>Trusted by 500,000+ students in 150+ countries</small>
                </div>
                <div className='home_left'>
                    <img src={HomeMenImage} alt="men image " />

                </div>
            </div>

        </div>
    )
}
