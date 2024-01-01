import { Link } from "react-router-dom"

export const ProductCard = ({ name, price, image, id }) => {
    let NoimageUrl = "encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JU7eEWQUvR9_4K95zTVRLveqLqESvKRJchVdL-lOgg&s"
    return (
        <div className="product-card">
            <Link to={`/product/${id}`}>
                <div className="product-card__image">
                    <img src={image || NoimageUrl} />
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

