import React from 'react'
// import PosterImg from '../../../Images/poster.png'
import PosterImg from '../../Images/poster.png'
import SmallPoster from '../../Images/smallPoster.png'
import SmallImage from '../../Images/smallImage.png'
import './Poster.css'

export default function Poster() {
    return (
        <>
            <div className='posterContainer'>

                <div className='poster'>
                    <div className='contentContainer'>
                        <div className='content'>
                            <button>
                                Impact across India
                            </button>
                            <h3> Christ Main Campus</h3>
                            <p>   Captivating the crowd, Sandeep conducted a remarkable event, and the fully packed auditorium hung onto Sandeep's every word, embracing the promise of top-one-percent excellence in life."
                                Captivating the crowd, Sandeep conducted a remarkable event, and the fully packed auditorium hung onto Sandeep's every word, embracing the promise of top-one-percent excellence in life."
                                28-06-2023
                                500+ Attendees </p>

                        </div>
                    </div>
                    <img src={PosterImg} alt="PosterImage" />
                </div>

                <div className='seminarDetail_Container'>
                    <h2>Look out for exclusive events and webinars</h2>

                    <div className='seminarDetail'>




                        <div className='left'>


                            <img src={SmallPoster} alt="" />
                            <div className='button_box'>
                                <button className='liveButton' > <span ></span>LIVE</button>
                                <span className='sesstion_Time'>  SAT, JUL 7 3:00PM</span>
                            </div>


                            <p>Live Sessions with Sandeep Gupta: Plan your way into B-schools</p>

                            <div className='hostContainer'>
                                <div>
                                    <small>Hosted by </small>
                                    <div className='smallImageContainer'>
                                        <img src={SmallImage} alt=" Small Image " />
                                        <span className='Name'> Sandeep Gupta</span>
                                    </div>

                                </div>
                                <button>Attend for Free </button>
                            </div>

                        </div>
                        <div className='right'>


                            <div className='box'>

                                <button className='time_btn firt_time_btn' >
                                    <p>17 JUN</p>
                                    <small>5:30pm</small>

                                </button>
                                <div>
                                    <p className='headingP' > GMAT vs GMAT Focus Edition: What should you choose</p>
                                    <div className='hostContainer'>
                                        <div>
                                            <small>Hosted by </small>
                                            <div className='smallImageContainer'>
                                                <img src={SmallImage} alt=" Small Image " />
                                                <span className='Name'> Sandeep Gupta</span>
                                            </div>

                                        </div>
                                        <button>Attend for Free </button>
                                    </div>

                                </div>
                            </div>
                            <div className='box'>

                                <button className='time_btn'>
                                    <p>17 JUN</p>
                                    <small>5:30pm</small>

                                </button>
                                <div>
                                    <p className='headingP'> GMAT vs GMAT Focus Edition: What should you choose</p>
                                    <div className='hostContainer'>
                                        <div>
                                            <small>Hosted by </small>
                                            <div className='smallImageContainer'>
                                                <img src={SmallImage} alt=" Small Image " />
                                                <span className='Name'> Sandeep Gupta</span>
                                            </div>

                                        </div>
                                        <button>Attend for Free </button>
                                    </div>



                                </div>
                            </div>
                            <div className='box'>

                                <button className='time_btn'>
                                    <p>17 JUN</p>
                                    <small>5:30pm</small>

                                </button>
                                <div>
                                    <p className='headingP'> GMAT vs GMAT Focus Edition: What should you choose</p>
                                    <div className='hostContainer'>
                                        <div>
                                            <small>Hosted by </small>
                                            <div className='smallImageContainer'>
                                                <img src={SmallImage} alt=" Small Image " />
                                                <span className='Name'> Sandeep Gupta</span>
                                            </div>

                                        </div>
                                        <button>Attend for Free </button>
                                    </div>

                                </div>
                            </div>






                        </div>


                    </div>
                </div>

            </div>

            <div className='sehedulePoster'>

                <div className='headingMain_Container'>

                    <p className='heading'> Schedule a Demo Session with Sandeep </p>

                    <p className='paragraph'>
                        Still got questions ? Jump on a call with Sandeep tackling some of the challenging GMAT questions with his unique copyrighted techniques
                    </p>
                </div>

                <button> Request a Live Demo</button>

            </div>


        </>
    )
}
