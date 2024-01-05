/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight, CopySlash, ToggleLeft, Turtle } from "lucide-react"
import { useEffect, useState } from "react"
import { Header } from "../../components"
import axios from "axios"
import { API_URL } from "../../redux/store"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

const Product = () => {
    const [productData, setProductData] = useState(null)
    const [productImages, setProductImages] = useState([])
    let _404 = false
    const token = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens"))["access"] : ""
    const { id } = useParams();


    const getProductDetail = async () => {
        try {
            const req = await axios.get(`${API_URL}api/product/details/${id}`)
            const req2 = await axios.get(`${API_URL}api/get-cart`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (req.status === 200) {
                setProductData(req.data)
                setProductImages(req.data.images)
            }

        } catch (error) {
            _404 = true
        }
    }

    useEffect(() => {
        getProductDetail()

    }, [])

    const addToCart = async (product_id) => {
        console.log(product_id)
        try {
            const req = await axios.post(`${API_URL}/api/add-to-cart`, { product_id: product_id }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            if (req.status === 200) {
                toast.success("Cart Updated ")
                console.log(req.data)
            }

        } catch (error) {
            console.error(error)
        }
    }

    const product = {
        "name": "Samsung Neo QLED 4K Smart TV",
        "category": "Movies & TV",
        "price": "$5,790.00",
    }

    return (
        <>
            <Header />
            <main className="product-page_main">
                <section className="product-page__display-section">
                    <section className="product-media__section">
                        <Carousel slides={productImages} />
                    </section>

                    <section className="product-info__details">
                        <div>

                            <div className="product-name">
                                {productData?.product_name}
                            </div>
                            <div className="product-category">
                                {productData?.category || "Test Category"}
                            </div>
                            <div className="product-price" >
                                {productData?.price}
                            </div>
                        </div>

                        <div className="product-page__actions">
                            <button className="btn btn-primary" onClick={() => addToCart(productData?.id)}>Add to Cart</button>
                        </div>

                    </section>
                </section>

                <div className="product-page__description-section">
                    <div style={{ fontSize: "1.25rem", fontWeight: "600" }}>Description</div>
                    <br />

                    <div dangerouslySetInnerHTML={{ __html: productData?.description || "" }}>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Product




export const Carousel = ({ slides = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const moveSlide = (action) => {
        if (action === "next") {
            activeIndex < (slides.length - 1) ? setActiveIndex((prev) => prev + 1) : setActiveIndex(0)

        } else {
            activeIndex === 0 ? setActiveIndex(slides.length - 1) : setActiveIndex((prev) => prev - 1)
        }
    }


    return (
        <div className="carousel-container">
            <button className="carousel-btn carousel-btn--left" onClick={() => moveSlide("prev")}>
                <ArrowLeft />
            </button>

            <div className="carousel-body">
                <div className="carousel-slides__container" style={{ transform: `translateX(-${100 * activeIndex}%)` }}>

                    {slides ? slides.map((slide, index) =>
                        <div className="carousel-slide" key={index} >
                            <img src={slide} alt="" />
                        </div>
                    ) : <></>}

                </div>
            </div>

            <button className="carousel-btn carousel-btn--right" onClick={() => moveSlide("next")}>
                <ArrowRight />
            </button>
        </div >
    )
}

