import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Partner = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])


    return (
        <div>
            <h1 className='text-center text-5xl font-serif'>Our Partners</h1>
            <div className='border-b border-t my-10 mx-24'>

                <div className=' lg:flex justify-center gap-5 my-24'>
                    <img data-aos='zoom-in' className=' w-24 h-24' src="https://images.pexels.com/photos/14453703/pexels-photo-14453703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img data-aos='zoom-in' className=' w-24 h-24' src="https://images.pexels.com/photos/10496354/pexels-photo-10496354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img data-aos='zoom-in' className=' w-24 h-24' src="https://images.pexels.com/photos/7919417/pexels-photo-7919417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img data-aos='zoom-in' className=' w-24 h-24' src="https://images.pexels.com/photos/13867440/pexels-photo-13867440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Partner;