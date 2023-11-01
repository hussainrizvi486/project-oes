import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
// https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/d6af57ef-afbe-4da3-99fc-85026dfa2544/md08003300-DZ-13-jpg
// https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/77c7117d-b652-4c8b-a266-5e36db20a229/md08003300-DZ-06-jpg
// https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/82f45bc8-b8ef-47e1-b700-f6acead88e77/md08003300-DZ-05-jpg
// https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/58011568-5e5f-4c4a-ae7c-56483d871b78/md08003300-DZ-02-jpg
// https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/1367eacc-3d1f-4e79-b8fa-590c9c18b9e4/md08003300-DZ-03-jpg
// https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/514d8a28-2af1-4f88-8c1c-7b50d932dfa5/md08003300-DZ-01-jpg

const images = [
    {
        "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/58011568-5e5f-4c4a-ae7c-56483d871b78/md08003300-DZ-02-jpg"
    },
    {
        "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/1367eacc-3d1f-4e79-b8fa-590c9c18b9e4/md08003300-DZ-03-jpg"
    },
    {
        "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/514d8a28-2af1-4f88-8c1c-7b50d932dfa5/md08003300-DZ-01-jpg"
    },
    {
        "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/d6af57ef-afbe-4da3-99fc-85026dfa2544/md08003300-DZ-13-jpg"
    },
    {
        "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/77c7117d-b652-4c8b-a266-5e36db20a229/md08003300-DZ-06-jpg"
    },
    {
        "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/82f45bc8-b8ef-47e1-b700-f6acead88e77/md08003300-DZ-05-jpg"
    },
]


const Product = () => {
    console.log(images)
    const product = {
        "name": "Samsung Neo QLED 4K Smart TV",
        "category": "Movies & TV",
        "price": "$5,790.00",
    }
    return (
        <main className="product-page_main">
            <section className="product-page__display-section">
                <section className="product-media__section">
                    <Carousel slides={images} />
                </section>

                <section className="product-info__details">
                    <div>

                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-category">
                            {product.category}
                        </div>
                        <div className="product-price" >
                            {product.price}
                        </div>
                    </div>

                    <div className="product-page__actions">
                        <button className="btn btn-primary">Add to Cart</button>
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

