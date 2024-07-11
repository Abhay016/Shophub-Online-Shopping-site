import React from 'react';
import CustomCarousel from '../Components/Homepage/Carousel';
import products from '../Components/Assets/products';
import ProductListing from '../Components/Homepage/ProductListing';

const WomenPage = () => {
    const womenProducts = products.womens;

    return (
        <>
            <CustomCarousel images={womenProducts} />
            <div className="w-full">
                <div className="bg-gray-100 min-h-screen py10">
                    <ProductListing />
                </div>
            </div>
        </>
    );
};

export default WomenPage;