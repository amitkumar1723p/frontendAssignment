import React from 'react'
import ImageOne from '../../Images/1.jpg'
import ImageTwo from '../../Images/2.jpg'
import ImageThree from '../../Images/3.jpg'
import Imagefour from '../../Images/4.jpg'
import './Inspiring_stories.css'

export default function Inspiring_stories() {
    return (
        <div className='Inspiring_StoriesContainer'>
            <h2 className='InspiringHeading'> Inspiring stories </h2>
            <p className='InspiringPara'> If they can do it, so can you, Let us embark on a journey together to greatness </p>



            <div className='imageContainer'>
                <div className='image_box'>
                    <img src={ImageOne} alt="imageone" />
                    <h3>Purely hindi-medium village man scores GMAT 770 with 45 in Verbal</h3>
                    <p>
                        I cannot speak English; I can only read. I was scared of GMAT as I have a Hindi Medium Background. In just 3 months, I scored Verbal 45
                    </p>

                </div>


                <div className='image_box'>
                    <img src={ImageTwo} alt="imagetwo" />
                    <h3> Purely hindi-medium village man scores GMAT 770 with 45 in Verbal</h3>
                    <p> I cannot speak English; I can only read. I was scared of GMAT as I have a Hindi Medium Background. In just 3 months, I scored Verbal 45</p>
                </div>
                <div className='image_box'>
                    <img src={ImageThree} alt="imagethree" />
                    <h3> 33 years old | Mother of 2 | 12 hrs work shift | GMAT 770 in 4 weeks</h3>
                    <p> I cannot speak English; I can only read. I was scared of GMAT as I have a Hindi Medium Background. In just 3 months, I scored Verbal 45</p>
                </div>
                <div className='image_box'>
                    <img src={Imagefour} alt="imagefour" />
                    <h3> Purely hindi-medium village man scores GMAT 770 with 45 in Verbal</h3>
                    <p>I had Covid during my preparation. I was below average to start with but I was able to score GMAT 770 in 4 weeks.</p>
                </div>






            </div>



        </div>
    )
}
