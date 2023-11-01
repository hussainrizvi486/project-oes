import { useEffect, useState } from "react"
import { ProductCard } from "../../components"
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/")
            setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            alert(error)
        }

    }
    useEffect(() => {
        console.log("Rendered")
        getData()
    }, [])
    return (
        <main>
            <div className="products-grid">
                {
                    products.map((val) => <ProductCard key={val.id} price={val.price} name={val.title} image={val.image} />)
                }
            </div>

        </main>
    )
}

export default Home