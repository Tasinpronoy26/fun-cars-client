import React from 'react';
import Marquee from "react-fast-marquee";

const ExtraSection = () => {
    return (
        <div className='border-t'>
            <h1 className='text-center font-thin text-5xl mt-32'>OUR EMPLOYEES</h1>
            <Marquee>
                <div className='flex items-center justify-center mt-28 mb-28'>
                    {/* Person 1 */}
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="w-52 h-52 rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-600">Abrahar</h2>
                            <p>CO-FOUNDER</p>

                        </div>
                    </div>


                    {/* Person 2 */}

                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="w-52 h-52 rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-600">Alex</h2>
                            <p>CO_FOUNDER</p>

                        </div>
                    </div>


                    {/* Person 3 */}


                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="w-52 h-52 rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-600">Robert</h2>
                            <p>SENIOR DEVELOPER</p>

                        </div>
                    </div>


                    {/* Person 4 */}


                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="w-52 h-52 rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-600">Carlos</h2>
                            <p>SENIOR DESIGNER</p>

                        </div>
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default ExtraSection;