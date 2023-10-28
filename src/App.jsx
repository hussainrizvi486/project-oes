import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import "./styles/global.css"
import "./styles/utils.css"
import "./styles/main.css"
import "./styles/header.css"
import { Header } from "./components"

const Home = lazy(() => import("./pages/Home/Home"))
const Product = lazy(() => import("./pages/Product/Product"))




function App() {
  return (
    <main id="app-container">
      <div className="page-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </main>
  )
}

export default App


