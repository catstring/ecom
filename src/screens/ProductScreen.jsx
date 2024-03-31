import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from '../state/detailSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

    function ProductScreen() {
        const { id } = useParams()
        const product = useSelector((state) => state.detail.products)
        const loading = useSelector((state) => state.detail)
        const dispatch = useDispatch()


        useEffect(() => {
            dispatch(fetchDetails(id))
        },[dispatch, id])

    // const { id } = useParams()
    // // const product = products.find((p) => p._id == id)

    // const [product, setProduct] = useState([])

    // useEffect(() => {

    //     async function fetchProduct() {
    //     const { data } = await axios.get(`/api/products/${id}`)
    //     setProduct(data)
    //     }

    //     fetchProduct()

    //     }, [id])

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading.loading ? <Loader />
                : loading.error ? <Message variant='danger'>{loading.error}</Message>
                :
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={`#f8b825`}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price:{product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description:{product.description}
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
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup>
                                <Button className='btn-block' disabled={product.countInStock == 0}>ADD TO CART</Button>
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
