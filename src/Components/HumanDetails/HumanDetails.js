import React from 'react'
import Shloka from '../../Images/Image_Shloka.png'
import Vineetha from '../../Images/Image_Vineetha.png'
import Varija from '../../Images/Varija.png'
import './HumanDetails.css'
export default function HumanDetails() {
    return (
        <>
            <div className='HumanDetails'>
                <div className='left'>

                    <p className='heading'>
                        Which top-one-percent x <span>   b-school / university </span>is your aspiration? </p>
                    <p className='paragraph'>  Kickoff your journey towards your future today and make your dream school a reality with our comprehensive admissions support
                    </p>
                    <div>
                        <div className='checkbox'>
                            <span className='check'> &#10003;  </span>
                            <span className='check_Summery'> Consulting for MBA, Masters and Doctoral programs</span>
                        </div>

                        <div className='checkbox'>
                            <span className='check'> &#10003;  </span>
                            <span className='check_Summery'>  University and courses shortlisting</span>
                        </div>

                        <div className='checkbox'>
                            <span className='check'> &#10003;  </span>
                            <span className='check_Summery'> Application / Pitch and positioning strategy </span>
                        </div>

                        <div className='checkbox'>
                            <span className='check'> &#10003;  </span>
                            <span className='check_Summery'>  Essays, ideations and editing support  </span>
                        </div>

                    </div>

                </div>

                <div className='right'>


                    <div className='box'>
                        <img src={Shloka} alt="shloka" />

                        <div>
                            <p className='Name'> Shloka Singh</p>
                            <p className='surname'> Duke Fuqua</p>
                        </div>

                        <p>
                            “ There was a stark difference in my first draft and the final version that Auttri helped me in. He guided me at every step till my final admit ”
                        </p>



                    </div>


                    <div className='box'>
                        <img src={Varija} alt="Varija" />

                        <div>
                            <p className='Name'> Varija Singh</p>
                            <p className='surname'> Duke Fuqua</p>
                        </div>

                        <p>
                            “ Auttri drove my full process of application starting from identifying the right school to preparing for interviews. He made my essays stand out. ”
                        </p>



                    </div>




                    <div className='box'>
                        <img src={Vineetha} alt="Vineetha" />

                        <div>
                            <p className='Name'> Vineetha Athrey  </p>
                            <p className='surname'> Duke Fuqua</p>
                        </div>

                        <p>
                            “ There was a stark difference in my first draft and the final version that Auttri helped me in. He guided me at every step till my final admit ”
                        </p>



                    </div>


                </div>
            </div>
        </>
    )
}
