import React from 'react';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import ShopByCategories from './ShopByCategories';
import ExtraSection from './ExtraSection';
import Partner from './Partner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategories></ShopByCategories>
            <ExtraSection></ExtraSection>
            <Partner></Partner>
            
        </div>
    );
};

export default Home;