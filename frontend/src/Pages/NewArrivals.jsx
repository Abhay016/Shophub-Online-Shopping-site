import React from 'react'
import CustomCarousel from '../Components/Homepage/Carousel';
import products from '../Components/Assets/products';
import ProductListing from '../Components/Homepage/ProductListing';

const NewArrivals = () => {
    const newArrivalsProducts = products.newArrivals;

    return (
        <>
            <CustomCarousel images={newArrivalsProducts} />
            <div className="w-full">
                <div className="bg-slate-800 min-h-screen py10">
                    <ProductListing category="new arrivals"/>
                </div>
            </div>
        </>
    );
}

export default NewArrivals