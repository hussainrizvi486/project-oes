import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import "./styles/global.css"
import "./styles/utils.css"
import "./styles/main.css"
import "./styles/header.css"
import "./styles/components.css"
import { Header, Spinner } from "./components"

const Home = lazy(() => import("./pages/Home/Home"))
const Product = lazy(() => import("./pages/Product/Product"))
const Login = lazy(() => import("./pages/Login/Login"))
const Cart = lazy(() => import("./pages/Cart/Cart"))

import { HomeRoute, LoginRoute } from "./Routes"


function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <main id="app-container">
        <div className="page-container">
          <Routes>
            {/* <Header /> */}
            <Route path={HomeRoute} element={<Home />} />

            <Route path="/product" element={<Product />} />
            <Route path={LoginRoute} element={<Login />} />
          </Routes>

          <Routes>
            <Route path="/cart" element={<Cart />} />

          </Routes>

        </div>
      </main>
    </Suspense>

  )
}

export default App


