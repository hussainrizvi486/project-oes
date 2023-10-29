import { Link } from "react-router-dom"

export const ProductCard = () => {
    return (
        <div className="product-card">
            <Link to="/product">
                <div className="product-card__image">
                    <img src="https://static-01.daraz.pk/p/7f10ea52de669d1642d75a569a3367bb.jpg_750x750.jpg_.webp"  />
                </div>
            </Link>
            <div className="product-card__details">
                <div className="card-details__upper">
                    <div className="product-card__category text-sm ">TV/LCD</div>
                    <div className="product-card__name text-sm ">LG OLED Flex 4k 65 inch </div>

                </div>

                <div className="card-details__lower">
                    <div className="product-card__price font-medium">$2,997.55</div>
                </div>
            </div>
        </div >
    )
}

