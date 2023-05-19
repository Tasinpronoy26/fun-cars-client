import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/Fa';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'

const OffVehicles = ({ toy }) => {

    const { name, picture, price, rating } = toy;

    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])

    return (
        <div className="w-full shadow-xl" data-aos="fade-up">
            <figure><img src={picture} className='w-full h-72' alt="Car" /></figure>
            <div className="card-body text-left">
                <h2 className=' text-2xl'>{name}</h2>
                <p>Price: <span className='font-bold text-orange-400'>{price}</span> </p>


            </div>
            <div className=' text-orange-400 flex justify-between mx-10 mb-10'>
                <Rating className="text-orange-400" placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    readonly
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}></Rating>
                <button><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
            </div>

        </div>
    );
};

export default OffVehicles;