import React, {useContext} from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCarousel from './ProductCarousel'; 
import { ShopContext } from '../../Context/ShopContext';
import RoundCarousel from './RoundCarousel'

const ProductListing = () => {
  const {all_product} = useContext(ShopContext);
  return (
    <Container className="mt-0 mb-0 pt-3 pb-3">
      <h2 className="text-center mb-4 italic">Deals of the Day</h2>
      <ProductCarousel category="men" />
      <br/>
      <hr/>
      <br/>
      <h2 className="text-center mt-15 mb-4 italic">Best Sellers</h2>
      <ProductCarousel category="kid" />
      <br/>
      <hr/>
      <br/>
      <h2 className="text-center mt-15 mb-4 italic">Brands You Love</h2>
      <RoundCarousel/>
      <br/>
      <hr/>
      <br/>
      <h2 className="text-center mt-15 mb-4 italic">Latest Collection</h2>
      <ProductCarousel category="newarrivals" />
      <br/>
    </Container>
  );
};

export default ProductListing;