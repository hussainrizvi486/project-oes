import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"


const images = [
    {
        "image": "https://images.samsung.com/is/image/samsung/p6pim/pk/qa85qn85aauxmm/gallery/pk-neo-qled-qn85a-qa85qn85aauxmm-532919690?$684_547_PNG$"
    },

    {
        "image": "https://images.samsung.com/is/image/samsung/p6pim/pk/qa85qn85aauxmm/gallery/pk-neo-qled-qn85a-qa85qn85aauxmm-532919984?$684_547_PNG$"
    },
    {
        "image": "https://images.samsung.com/is/image/samsung/p6pim/pk/qa85qn85aauxmm/gallery/pk-neo-qled-qn85a-qa85qn85aauxmm-532919972?$684_547_PNG$"
    },
    {
        "image": "https://images.samsung.com/is/image/samsung/p6pim/pk/qa85qn85aauxmm/gallery/pk-neo-qled-qn85a-qa85qn85aauxmm-532920754?$684_547_PNG$"
    },
    {
        "image": "https://images.samsung.com/is/image/samsung/p6pim/pk/qa85qn85aauxmm/gallery/pk-neo-qled-qn85a-qa85qn85aauxmm-454908863?$2052_1641_PNG$"
    },
    {
        "image": "https://images.samsung.com/is/image/samsung/p6pim/pk/qa85qn85aauxmm/gallery/pk-neo-qled-qn85a-qa85qn85aauxmm-537115052?$2052_1641_PNG$"
    }
]


const Product = () => {
    console.log(images)
    const product = {
        "name": "Samsung Neo QLED 4K Smart TV",
        "category": "LCD/LED",
        "price": "$5,790.00",
    }
    return (
        <main className="product-page_main">
            <section className="product-page__display-section">
                <section className="product-media__section">
                    <Carousel slides={images} />
                </section>

                <section className="product-info__details">
                    <div className="product-name">
                        {product.name}
                    </div>
                    <div className="product-category">
                        {product.category}
                    </div>
                    <div className="product-price">
                        {product.price}
                    </div>
                </section>
            </section>

        </main>
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

                    {slides.map((slide, index) =>
                        <div className="carousel-slide" key={index} >
                            <img src={slide.image} alt="" />
                        </div>
                    )}

                </div>
            </div>

            <button className="carousel-btn carousel-btn--right" onClick={() => moveSlide("next")}>
                <ArrowRight />
            </button>
        </div >
    )
}