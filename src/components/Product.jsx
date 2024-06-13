/* eslint-disable react/prop-types */
// import React, { FC } from 'react'
import { Card } from 'react-bootstrap';
// import PropTypes from 'prop-types'
import Rating from './Rating';
import { Link } from 'react-router-dom';



// interface ProductProps {
//   product: {
//     _id: string;
//     image: string;
//     name: string;
//     rating: number;
//     numReviews: number;
//     price: number;
//   };
// }

// const Product: FC<ProductProps> = ({ product }) => {
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/ecom/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/ecom/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="div">
            <div className="my-3">
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8b825'}/>
            </div>
          </Card.Text>
          <Card.Text as="h3">
            ${product.price}
          </Card.Text>
        </Link>
      </Card.Body>
    </Card>
  )
}

// Product.propTypes = {
//   product: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     numReviews: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Product
