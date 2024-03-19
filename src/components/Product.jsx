// import React from 'react'
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Rating from './Rating';

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="div">
            <div className="my-3">
              {/* {product.rating} from {product.numReviews} reviews */}
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8b825'}/>
            </div>
          </Card.Text>

          <Card.Text as="h3">
            ${product.price}
          </Card.Text>
        </a>
      </Card.Body>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product
