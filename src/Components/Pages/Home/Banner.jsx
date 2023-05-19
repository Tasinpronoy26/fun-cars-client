import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'




const Banner = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])

    return (
        <div>

            <div className="lg:flex my-20">

                <div className="avatar w-1/2 flex items-center justify-center" data-aos="fade-right">
                    <div className="w-64 rounded-full">
                        <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </div>

                <div className='w-1/2 me-20' data-aos="fade-left">

                    <h1 className='text-center mb-5 font-bold text-6xl font-serif'>FUN CAR</h1>
                    <p>Fun car toys can be educational as well, as they can introduce children to different car models, colors, and basic concepts related to cars and transportation. They can also help develop fine motor skills, hand-eye coordination, and spatial awareness as children manipulate and maneuver the toys.</p>
                    <br />
                    <p>Additionally, some fun car toys may incorporate elements of racing, track systems, or even virtual experiences that simulate driving, offering an enhanced level of excitement and entertainment.</p>

                </div>
            </div>

        </div>


    );
};

export default Banner;