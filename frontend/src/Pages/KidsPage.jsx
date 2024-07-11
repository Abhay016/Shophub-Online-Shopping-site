import React from 'react'
import CustomCarousel from '../Components/Homepage/Carousel';
import products from '../Components/Assets/products';
import ProductListing from '../Components/Homepage/ProductListing'

const KidsPage = () => {
    const kidsProducts = products.kids;
    return(
        <>
            <CustomCarousel images={kidsProducts} />
            <div className="w-full">
            <div className="bg-gray-100 min-h-screen py10">
                        <ProductListing/>
                </div>
            </div>
        </>
    )
}

export default KidsPage