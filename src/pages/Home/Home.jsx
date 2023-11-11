import { useEffect, useState } from "react"
import { ProductCard } from "../../components"
import axios from 'axios';
import { Spinner } from "../../components/Loaders/Spinner";
import { Header } from "../../components"

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/")
            setProducts(response.data)
            console.log(response.data)
            setLoading(false)
        } catch (error) {
            alert(error)
        }

    }
    useEffect(() => {
        console.log("Rendered")
        getData()
    }, [])

    const Loader = <div className="home-spinner-wrapper flex-center" style={{ height: "50vh" }}>
        <Spinner />
    </div>

    return (
        <>
            <Header />

            <main>

                {loading ? Loader :
                    <div className="products-grid">
                        {products.map((val) => <ProductCard key={val.id} price={val.price} name={val.title} image={val.image} />)}
                    </div>
                }
            </main>
        </>

    )
}

export default Home