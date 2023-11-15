import { Link } from "react-router-dom"

export const ProductCard = ({ name, price, image }) => {
    return (
        <div className="product-card">
            <Link to="/product">
                <div className="product-card__image">
                    <img src={image} />
                </div>
            </Link>
            <div className="product-card__details">
                <div className="card-details__upper">
                    <div className="product-card__category text-sm ">TV/LCD</div>
                    <div className="product-card__name text-sm ">{String(name).slice(0, 40)} </div>

                </div>

                <div className="card-details__lower">
                    <div className="product-card__price font-medium">${parseFloat(price)}</div>
                </div>
            </div>
        </div>
    )
}

