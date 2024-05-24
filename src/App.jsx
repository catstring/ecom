import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
// import TestScreen from './screens/TestScreen'

function App() {
  const baseURL = '/ecom'
  return (
      <Router>
        <Header />
          <main className='py-3'>
            <Container>
              <Routes>
                {/* <Route path='/' element={<TestScreen/>} /> */}
                <Route path={baseURL} element={<HomeScreen/>} exact />
                <Route path={`${baseURL}/login`} element={<LoginScreen/>} />
                <Route path={`${baseURL}/register`} element={<RegisterScreen/>} />
                <Route path={`${baseURL}/product/:id`} element={<ProductScreen/>} />
                <Route path={`${baseURL}/cart/:id?`} element={<CartScreen/>} />
              </Routes>
            </Container>
          </main>
        <Footer />
      </Router>
  )
}

export default App

// 