import React from 'react';
import CustomCarousel from '../Components/Homepage/Carousel';
import products from '../Components/Assets/products';
import ProductListing from '../Components/Homepage/ProductListing'
const MenPage = () => {
  const menProducts = products.mens;

  return (
    <>
    <CustomCarousel images={menProducts} />
    <div className="w-full m-0 p-0">
      <div className="bg-gray-100 min-h-screen">
            <ProductListing/>
        </div>
    </div>
    </>
  );
};

export default MenPage;