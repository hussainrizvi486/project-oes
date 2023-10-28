export const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src="https://www.lg.com/us/images/promotion/thumbnail/he_promo_monitors_ultragear_tile[20230623_022244].jpg" alt="" />
            </div>
            <div className="product-card__details">
                <div className="card-details__upper">
                    <div className="product-card__category text-sm ">TV/LCD</div>
                    <div className="product-card__name text-sm ">LG OLED Flex 4k 65 inch </div>

                </div>

                <div className="card-details__lower">
                    <div className="product-card__price font-medium">$2,997.55</div>
                </div>
            </div>
        </div>
    )
}

