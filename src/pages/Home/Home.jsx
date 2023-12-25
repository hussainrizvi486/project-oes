import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import axios from 'axios';
import { Header, Spinner } from "../../components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
    {
        "image": "https://i.seadn.io/s/raw/files/b915d9ab2718f1b2d9a3dc4c79c99430.png?auto=format&dpr=1&h=500&fr=1",
        "title": "Arc8 GameFest Pass | November '23",
        "price": 13.60
    },
    {
        "image": "https://i.seadn.io/s/raw/files/19e4902580b6488e6f8da66fbdad5e2d.png?auto=format&dpr=1&h=500&fr=1",
        "title": "zkMon by Polychain Monsters x Modulus Labs",
        "price": 11.45
    },
    {
        "image": "https://i.seadn.io/s/raw/files/108dd149cdb48094ec671e3b4b100c48.png?auto=format&dpr=1&h=500&fr=1",
        "title": "Michelin 3xplorer Club",
        "price": 80.56
    },
    // {
    //     "image": "https://i.seadn.io/s/raw/files/a9b0c35cf9c8929fcd607ba6c0a1c7a3.png?auto=format&dpr=1&h=500&fr=1",
    //     "title": "RESONANCE By Tristan Rettich",
    //     "price": 23
    // },
    {
        "image": "https://i.seadn.io/gcs/files/1ffce3907fbbf9db9c3197074ba27f82.png?auto=format&dpr=1&h=500&fr=1",
        "title": "The Grapes",
        "price": 36.43
    },
    {
        "image": "https://i.seadn.io/gae/ppMol-GqnTJ3-D698dX6hfIk2LBmk-x-bwalMcHrjry0zttv5upSAJY4aYJWLPrmW7ps544qm3TvxoOgNR6hPigIMrZhq3QkrCal?auto=format&dpr=1&h=500&fr=1",
        "title": "Wonky Stonks",
        "price": 44.55
    },
    {
        "image": "https://i.seadn.io/s/raw/files/108dd149cdb48094ec671e3b4b100c48.png?auto=format&dpr=1&h=500&fr=1",
        "title": "Michelin 3xplorer Club",
        "price": 70.00
    }
]

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    // const getData = async () => {
    //     try {
    //         const response = await axios.get("https://fakestoreapi.com/products/")
    //         setProducts(data)
    //         console.log(response.data)
    //     } catch (error) {
    //         alert(error)
    //     }

    // }
    useEffect(() => {
        setLoading(false)
        setProducts(data)
        // getData()
    }, [])

    const slides = [
        "https://icms-image.slatic.net/images/ims-web/52d77700-a938-4cc0-8aa7-6e7bb428a0ac.jpg",
        "https://icms-image.slatic.net/images/ims-web/cd8d8e75-cbc4-4cb2-bfd9-c39eed09adcc.jpg",
        "https://icms-image.slatic.net/images/ims-web/abaa358e-3c50-4772-a7ff-417ef23ab1e8.png"
    ]

    const Loader = <div className="home-spinner-wrapper flex-center" style={{ height: "50vh" }}>
        <Spinner />
    </div>
    const [activeIndex, setActiveIndex] = useState(0)
    const moveSlide = (action) => {
        if (action === "next") {
            activeIndex < (slides.length - 1) ? setActiveIndex((prev) => prev + 1) : setActiveIndex(0)

        } else {
            activeIndex === 0 ? setActiveIndex(slides.length - 1) : setActiveIndex((prev) => prev - 1)
        }

    }
    return (
        <>
            <Header />

            <main>

                <section>

                    <div className="slider-container">
                        <button className="slider-btn slider-btn--left"
                            onClick={() => moveSlide("prev")}
                        ><ChevronLeft /></button>
                        <button className="slider-btn slider-btn--right"
                            onClick={() => moveSlide("next")}
                        ><ChevronRight /></button>


                        <div className="slider-body">
                            <div className="slider-slides-container" style={{
                                transform: `translateX(-${100 * activeIndex}%)`
                            }}>
                                {slides.map((slide, i) => (
                                    <div className="slider-slide" key={i}>
                                        <img src={slide} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="slider-nav">
                            <ul className="slider-nav-elements">
                                {slides.map((slide, i) => (
                                    <li className={i === activeIndex ? "slider-nav-el dot active" : "slider-nav-el dot"} key={slide}
                                        onClick={() => setActiveIndex(i)}
                                    ></li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </section>

                {/* {loading ? Loader :
                    <div className="products-grid">
                        {products.map((val, u) => <ProductCard key={u} price={val.price} name={val.title} image={val.image} />)}
                    </div>
                } */}
                {loading ? Loader :
                    <section className="home-section">
                        <div className="home-section-heading">Trending products</div>
                        <div className="home-section-products products-grid">
                            {products.map((val, u) => <ProductCard key={u} price={val.price} name={val.title} image={val.image} />)}
                        </div>
                    </section>
                }

                {loading ? Loader :
                    <section className="home-section">
                        <div className="home-section-heading">Top Selling</div>
                        <div className="home-section-products products-grid">
                            {products.map((val, u) => <ProductCard key={u} price={val.price} name={val.title} image={val.image} />)}
                        </div>
                    </section>
                }

                {loading ? Loader :
                    <section className="home-section">
                        <div className="home-section-heading">Top Rated</div>
                        <div className="home-section-products products-grid">
                            {products.map((val, u) => <ProductCard key={u} price={val.price} name={val.title} image={val.image} />)}
                        </div>
                    </section>
                }

            </main>
        </>

    )
}

export default Home