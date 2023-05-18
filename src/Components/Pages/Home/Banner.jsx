import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Banner = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])

    return (
        <div>

           


        </div>
    );
};

export default Banner;