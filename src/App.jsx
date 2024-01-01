import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import "./styles/global.css"
import "./styles/utils.css"
import "./styles/main.css"
import "./styles/header.css"
import "./styles/components.css"
import "./styles/reset.css"
import "./styles/layout.css"
import "./styles/pages/home.css"
import "./styles/pages/cart.css"

import { Spinner } from "./components"

const Home = lazy(() => import("./pages/Home/Home"))
const Product = lazy(() => import("./pages/Product/Product"))
const Login = lazy(() => import("./pages/Login/Login"))
const Cart = lazy(() => import("./pages/Cart/Cart"))
const Address = lazy(() => import("./pages/Profile/Address"))
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Register = lazy(() => import("./pages/Register/Register"))
import { getUser } from "./redux/slices/authSlice"
import { useSelector } from "react-redux"
import { Footer } from "./layouts"


function App() {
  const user = useSelector((state) => state.auth.user)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  console.log(isAuthenticated)
  console.log(user)
  return (
    <Suspense fallback={<Spinner />}>
      <main id="app-container">
        <div className="page-container">
          <Routes>
            {/* <Header /> */}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/address" element={<Address />} /> */}

            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/address" element={<Address />} />
            {/* <Route path="orders" element={<Profile />} /> */}
            {/* </Route> */}

            <Route path="*" element={<p>Path not resolved</p>} />

          </Routes>
          <Footer />

        </div>
      </main>
    </Suspense>

  )
}

export default App


