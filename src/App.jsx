import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import "./styles/global.css"
import "./styles/utils.css"
import "./styles/main.css"
import "./styles/header.css"
import "./styles/components.css"
import "./styles/reset.css"
import "./styles/pages/home.css"

import { Spinner } from "./components"

const Home = lazy(() => import("./pages/Home/Home"))
const Product = lazy(() => import("./pages/Product/Product"))
const Login = lazy(() => import("./pages/Login/Login"))
const Cart = lazy(() => import("./pages/Cart/Cart"))
const Address = lazy(() => import("./pages/Profile/Address"))

import { HomeRoute, LoginRoute } from "./Routes"
import { useSelector } from "react-redux"


function App() {
  const user = useSelector((state) => state.auth.user)
  console.log(user)
  return (
    <Suspense fallback={<Spinner />}>
      <main id="app-container">
        <div className="page-container">
          <Routes>
            {/* <Header /> */}
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<Address />} />
            <Route path="*" element={<p>Path not resolved</p>} />

          </Routes>


        </div>
      </main>
    </Suspense>

  )
}

export default App


