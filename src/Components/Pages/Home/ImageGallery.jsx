import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ImageGallery = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])


    return (
        <div className='m-28 border-t'>
            <h1 className='text-center mb-16 text-6xl mt-10 font-serif' data-aos="zoom-in">"Toys are children's words and <span className=' text-orange-300'>play is their language</span>"</h1>
            <div className='lg:grid grid-cols-3 mx-auto w-1/2 gap-3'>

                <img src="https://images.pexels.com/photos/10216073/pexels-photo-10216073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-in"/>
                <img src="https://images.pexels.com/photos/10216074/pexels-photo-10216074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-in"/>
                <img src="https://images.pexels.com/photos/10216070/pexels-photo-10216070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-in"/>
                <img src="https://images.pexels.com/photos/10216072/pexels-photo-10216072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-in"/>
                <img src="https://images.pexels.com/photos/10216083/pexels-photo-10216083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-in"/>
                <img src="https://images.pexels.com/photos/10216075/pexels-photo-10216075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-in"/>

            </div>
        </div>
    );
};

export default ImageGallery;