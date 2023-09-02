import React from 'react'
import ImageOne from '../../Images/1.jpg'
import ImageTwo from '../../Images/2.jpg'
import ImageThree from '../../Images/3.jpg'
import Imagefour from '../../Images/4.jpg'
import Imagefive from '../../Images/5.jpg'
import Imagesix from '../../Images/6.jpg'
import './Inspiring_stories.css'

export default function Inspiring_stories() {
    return (
        <div className='Inspiring_StoriesContainer'>
            <h2 className='InspiringHeading'> Inspiring stories </h2>
            <p className='InspiringPara'> If they can do it, so can you, Let us embark on a journey together to greatness </p>



            <div className='imageContainer'>
                <div className='image_box'>
                    <img src={ImageOne} alt="imageone" />


                </div>


                <div className='image_box'>
                    <img src={ImageTwo} alt="imagetwo" />

                </div>
                <div className='image_box'>
                    <img src={ImageThree} alt="imagethree" />

                </div>
                <div className='image_box'>
                    <img src={Imagefour} alt="imagefour" />

                </div>
                <div className='image_box'>
                    <img src={Imagefive} alt="imagefive" />

                </div>
                <div className='image_box'>
                    <img src={Imagesix} alt="imagesix" />

                </div>






            </div>



        </div>
    )
}
