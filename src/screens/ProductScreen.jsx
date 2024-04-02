import {
    Row,
    Col,
    Image,
    ListGroup,
    Button,
    Card,
    Form,
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../state/detailSlice";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductScreen() {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const { id } = useParams();
    const detail = useSelector((state) => state.detail);
    const { products } = detail;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDetails(id));
    }, [dispatch, id]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            {detail.detail ? (
                <Loader />
            ) : detail.error ? (
                <Message variant="danger">{detail.error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={products.image} alt={products.name} fluid />
                    </Col>

                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{products.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating
                                    value={products.rating}
                                    text={`${products.numReviews} reviews`}
                                    color={`#f8b825`}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price:{products.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description:{products.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${products.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {products.countInStock > 0
                                                ? "In Stock"
                                                : "Out of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {products.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col xs="auto" className="my-1">
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={(e) =>
                                                        setQty(e.target.value)
                                                    }
                                                >
                                                    {[
                                                        ...Array(
                                                            detail.products
                                                                .countInStock
                                                        ).keys(),
                                                    ].map((x) => (
                                                        <option
                                                            key={x + 1}
                                                            value={x + 1}
                                                        >
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup>
                                    <Button
                                        onClick={addToCartHandler}
                                        className="btn-block"
                                        disabled={products.countInStock == 0}
                                    >
                                        ADD TO CART
                                    </Button>
                                </ListGroup>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default ProductScreen;
