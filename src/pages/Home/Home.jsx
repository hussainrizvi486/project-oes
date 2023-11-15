import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import axios from 'axios';
import { Header, Spinner } from "../../components";

const data = [
    {
        "image": "https://i.seadn.io/s/raw/files/b915d9ab2718f1b2d9a3dc4c79c99430.png?auto=format&dpr=1&h=500&fr=1",
        "title": "Arc8 GameFest Pass | November '23",
        "price": 7
    },
    {
        "image": "https://i.seadn.io/s/raw/files/19e4902580b6488e6f8da66fbdad5e2d.png?auto=format&dpr=1&h=500&fr=1",
        "title": "zkMon by Polychain Monsters x Modulus Labs",
        "price": 11
    },
    {
        "image": "https://i.seadn.io/s/raw/files/108dd149cdb48094ec671e3b4b100c48.png?auto=format&dpr=1&h=500&fr=1",
        "title": "Michelin 3xplorer Club",
        "price": 80
    },
    {
        "image": "https://i.seadn.io/s/raw/files/a9b0c35cf9c8929fcd607ba6c0a1c7a3.png?auto=format&dpr=1&h=500&fr=1",
        "title": "RESONANCE By Tristan Rettich",
        "price": 23
    },
    {
        "image": "https://i.seadn.io/gcs/files/1ffce3907fbbf9db9c3197074ba27f82.png?auto=format&dpr=1&h=500&fr=1",
        "title": "The Grapes",
        "price": 36
    },
    {
        "image": "https://i.seadn.io/gae/ppMol-GqnTJ3-D698dX6hfIk2LBmk-x-bwalMcHrjry0zttv5upSAJY4aYJWLPrmW7ps544qm3TvxoOgNR6hPigIMrZhq3QkrCal?auto=format&dpr=1&h=500&fr=1",
        "title": "Wonky Stonks",
        "price": 44
    },
    {
        "image": "https://i.seadn.io/s/raw/files/108dd149cdb48094ec671e3b4b100c48.png?auto=format&dpr=1&h=500&fr=1",
        "title": "Michelin 3xplorer Club",
        "price": 70
    }
]


const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/")
            setProducts(data)
            console.log(response.data)
            setLoading(false)
        } catch (error) {
            alert(error)
        }

    }
    useEffect(() => {
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