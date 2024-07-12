import React from 'react';
import CustomCarousel from './Carousel'
import ProductListing from './ProductListing'
import products from '../Assets/products';
import NewsLetter from '../Newsletter/Newsletter';
const HomePage = () => {
    const banner = products.Homebanner;
    return (
        <div>
            <CustomCarousel images={banner}/>
            <div className="bg-slate-900 min-h-screen !mt-0 mb-0">
                <ProductListing category="Home"/>
                <NewsLetter/>
            </div>

        </div>
    )
};

export default HomePage;