import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/200",
]


const ImageGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350:1 , 750: 2, 900:3}}>

            <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{ width: "100%", display: "block" }}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ImageGallery;