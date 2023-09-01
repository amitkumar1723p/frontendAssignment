import React from 'react'
import './Second.css'
import Sandeep from '../../Images/sandeep.png'

export default function Second() {
    return (
        <>
            <div className='secondMain'>
                <p className='firstp'> Why millions of students love us</p>
                <div className='uppersection'>
                    <div className='box'>
                        <p> 27+</p>
                        <small>Years Experience </small>
                    </div>
                    <div className='box'>
                        <p>1000+</p>
                        <small>99th Percentile Scores</small>
                    </div>
                    <div className='box'>
                        <p>850 +</p>
                        <small>lvy league + M7 Admits</small>
                    </div>

                    <div className='box'>
                        <p> 10,000+</p>
                        <small>Other Top B School Admits </small>
                    </div>
                    <div className='box'>
                        <p>&#36;8 Million</p>
                        <small> Raised In Scholarship </small>
                    </div>
                </div>

                <div className='secondchild'>

                    <div className='left'>
                        <h2>Hi, This is Sandeep Gupta </h2>
                        <p>The foremost GMAT / GRE Trainer in Asia . I am the only Trainer in Asia with  perfect scores on both me exams. Check my last reports below </p>
                        <button className='firstbutton'>
                            <p>GMAT</p>
                            <small> Perfect Score 800</small>
                        </button>
                        <button className='secondbutton'>
                            <p>GMAT</p>
                            <small> Perfect 300</small>
                        </button>
                    </div>
                    <div className='right'>
                        <img src={Sandeep} alt="Sandeep Image" />

                    </div>
                </div>
                <div className='thirdchild'>
                    <p>For the last 25+ years (since 1996), I have dedicated my life to making the dream of a GMAT / GRE 99th percentile score and of an Ivy League Education come true for thousands of my students (from places like Harvard, Stanford, MIT, and every other top university in the world) for MBA, MS, and PhD programs.The highest GMAT / GRE scores obtained by our students: 800 (GMAT) / 340 (GRE).</p>

                </div>
                <div className='fourth_child'>
                    <div className='left'>
                        <button className='small_btn '>GMAT</button>

                        <h2> Master the GMAT</h2>
                        <p>

                            The most thorough and independent GMAT program. Dedicated to helping you reach the highest scores – from the 99th percentile (760 – 800 range)
                            Start Prepping Now
                        </p>
                        <button className='circle_btn'>
                            Start Prepping Now  &#8594;
                        </button>

                    </div>
                    <div className='right' >
                        <button className='small_btn small_btn_second'> GRE</button>
                        <h2> GRE 335+ Blue print</h2>
                        <p>Designed for ambitious individuals who are determined to achieve an exceptional GRE score ,this course focuses on attaining a remarkable 335+ score</p>
                        <button className='circle_btn'>
                            Start Prepping Now  &#8594;
                        </button>
                    </div>
                </div>

                <div className='fivth_child'>
                    <div className='left'>
                        <h1> <span className='G'>G</span><sub>MAT</sub></h1>
                        <p>Focus Edition</p>

                    </div>
                    <div className='right'>
                        <button className='newbtn'> New</button>
                        <h2>
                            The GMAT<sup>tm</sup> Focus edition is here
                        </h2>

                        <p>Be the One Percent: Join Top one percent's GMAT Focus Edition course and kickstart your journey to your dream university today !</p>
                        <button className='circle_btn'>
                            Learn More  &#8594;
                        </button>
                    </div>

                </div>
            </div>


        </>
    )
}
