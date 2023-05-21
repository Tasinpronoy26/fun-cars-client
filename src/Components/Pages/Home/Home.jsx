import React from 'react';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import ShopByCategories from './ShopByCategories';
import ExtraSection from './ExtraSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategories></ShopByCategories>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;