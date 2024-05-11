// import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../state/productSlice"

function TestScreen() {
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProducts())
  },[dispatch])

  return (
    <div>
      Test
    </div>
  )
}

export default TestScreen
