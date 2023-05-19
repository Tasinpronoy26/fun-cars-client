import React from 'react';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import ShopByCategories from './ShopByCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategories></ShopByCategories>
        </div>
    );
};

export default Home;