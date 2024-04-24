/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { fetchUsers } from "../state/userSlice";

function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.search ? location.search.split('=')[1] : '/'

    const user = useSelector(state => state.user) //userLogin
    const { loading, userInfo, error } = user

    useEffect(() => {
        if (userInfo) {
            navigate(redirectPath)
        }
    },[userInfo, navigate, redirectPath])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchUsers({email, password}))
    };

    return (
        <FormContainer>
            <h1>Sign in</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >  
                    </Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                    Sign In
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                    New Customer?
                    <Link to={redirectPath ? `/register?redirect=${redirectPath}` : "/register"}>
                        Register
                    </Link>
                </Col>
            </Row>

        </FormContainer>
    );
}

export default LoginScreen;
