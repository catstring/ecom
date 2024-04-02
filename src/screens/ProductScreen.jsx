import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from '../state/detailSlice'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

    function ProductScreen() {
        const navigate = useNavigate()
        const [qty, setQty] = useState(1)

        const { id } = useParams()
        const detailProduct = useSelector((state) => state.detail.products)
        const detail = useSelector((state) => state.detail)
        const dispatch = useDispatch()


        useEffect(() => {
            dispatch(fetchDetails(id))
        },[dispatch, id])

        const addToCartHandler = () => {
            navigate(`/cart/${id}?qty=${qty}`)
        }

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {detail.detail ? <Loader />
                : detail.error ? <Message variant='danger'>{detail.error}</Message>
                :
                <Row>
                <Col md={6}>
                    <Image src={detailProduct.image} alt={detailProduct.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{detailProduct.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={detailProduct.rating} text={`${detailProduct.numReviews} reviews`} color={`#f8b825`}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price:{detailProduct.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description:{detailProduct.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${detailProduct.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {detailProduct.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                    
                                </Row>
                            </ListGroup.Item>
                            {detailProduct.countInStock > 0 && 
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(detail.products.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            }
                            <ListGroup>
                                <Button
                                    onClick={addToCartHandler}
                                    className='btn-block' 
                                    disabled={detailProduct.countInStock == 0}>
                                    ADD TO CART
                                </Button>
                            </ListGroup>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            }

            
        </div>
    )
}


export default ProductScreen
