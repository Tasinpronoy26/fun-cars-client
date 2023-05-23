import React from 'react';

const ToyDetails = ({ a }) => {

    // console.log(a);



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content border flex-col w-3/4 p-8 lg:flex-row gap-16">
                    <img className='w-1/2' src={a.picture} />
                    <div>
                        <h1 className="text-5xl font-bold">{a.name}</h1>
                        <p className="py-6">{a.price}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;