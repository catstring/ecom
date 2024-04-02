import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../state/cartSlice'

function CartScreen() {
    const { id } = useParams()
    const searchParams = new URLSearchParams(window.location.search)
    const qty = searchParams.get('qty')

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(id && qty) {
            dispatch(addToCart( id, qty ))
        }
    }), [dispatch, id, qty]

  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen
