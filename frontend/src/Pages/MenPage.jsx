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
      <div className="bg-slate-800 min-h-screen">
            <ProductListing category="Mens"/>
        </div>
    </div>
    </>
  );
};

export default MenPage;