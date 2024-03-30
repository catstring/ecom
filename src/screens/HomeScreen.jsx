import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { fetchProducts } from '../state/productSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen() {
const product = useSelector((state) => state.product)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchProducts())
},[dispatch])

    return (
        <div>
        <h1>Latest Products</h1>
        {product.loading ? <Loader />
            : product.error ? <Message variant='danger'>{product.error}</Message>
            :
            <Row>
            {product.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* <Product product={{...product, _id: product._id.toString()}}/> */}
                <Product product={product}/>
                </Col>
                ))}
            </Row>
            }
        
        </div>
    )
}

export default HomeScreen