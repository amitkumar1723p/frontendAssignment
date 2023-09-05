import React, { useState } from 'react'
import HomeMenImage from '../../Images/menhome.png'
import './Home.css'
import Logo from '../../Images/Logo.png'
export default function Home() {

    const [top, setTop] = useState('-375px')
    const [background, setBackground] = useState('black')

    return (



        <div className='homecontainer'>
            <ul >

                <div className='logo_line'>
                    <img src={Logo} alt="logo" />

                </div>






                <div className='li_Container' style={{ top: top }}>
                    <li>GMAT</li>
                    <li>GRE</li>
                    <li>Admissions</li>
                    <li>Testimonials</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                    <button className='visible_btn'>Get Demo</button>
                </div>
                <button className='none_btn'>Get Demo</button>

                <div className='Hamburger' onClick={() => {

                    if (top === '-375px') {
                        setBackground('red')
                        setTop('0px')
                    } else {
                        setTop('-375px')
                        setBackground('black')
                    }



                }}>
                    <p style={{ background: background }}></p>
                    <p style={{ background: background }}></p>
                    <p style={{ background: background }}></p>
                </div>

            </ul>

            <div className='home_second'>
                <div className='home_right'>
                    <p className='heading_p'> Beacome the top 1% scorer in <span><span className='Text_G'>G</span>MAT</span></p>
                    <button className='none_btn'> Request a live Demo</button>
                    <p className='none_btn small'>Trusted by 500,000+ students in 150+ countries</p>
                </div>

                <div className='home_left'>
                    <img src={HomeMenImage} alt="men image " />
                    <div>


                        <button className='visible_btn'> Request a live Demo</button>
                        <p className='visible_btn small'> TTrusted by 500,000+ students in 150+ countries</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
