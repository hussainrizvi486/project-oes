import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Header } from "../../components"

const Cart = () => {
    return (
        <>
            {/* <div className="header-simple">
                <Header />

            </div > */}
            <div className='cart-page'>
                <header className="header-simple">
                    <section>
                        <Link to={"/"}>
                            <ArrowLeft />
                        </Link>
                    </section>
                    <section>
                        <div className="plain-header__heading">Your Cart</div>
                    </section>
                    <section></section>
                </header>


                <div className="cart-items__wrapper">
                    <div className="ci-w2">

                        <div className="cart-items__container">
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                            <CartItemCard />
                        </div>
                    </div>
                </div>

                <div className="cart-summary__wrapper">
                    <OrderSummary />
                </div>
            </div>
        </>

    )
}

export default Cart


const OrderSummary = () => {
    const summary = {
        "total": "$12,670",
        "sub_total": "4",
    }
    return (
        <div className="cart-order-summary-container">
            <div className="order-summary__title">Order Summary</div>
            <div>
                <div className="flex-jbt-atc my-2">
                    <div>Subtotal </div><div> ({summary.sub_total || 0} items)</div>
                </div>
                <div className="flex-jbt-atc my-2 text-lg font-semibold">
                    <div>Total</div><div>{summary.total}</div>
                </div>
            </div>


            <div>
                <button className="btn btn-full btn-primary or-sum-btn-checkt">
                    Checkout
                </button>
            </div>
        </div>
    )
}

const CartItemCard = () => {
    const item = {
        price: "$69,456,56",
        name: "Radeon™ RX 580 GAMING 8G",
        qty: 1
    }
    return (
        <div className="cart-item-card d-flex ">
            <div className="cart-item-card__image-container ">
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6092/6092641cv14d.jpg" alt=""
                    className="h-100 w-100 img-contain"
                />
            </div>
            <div className="cart-item-card__details-container">
                <div>
                    <div className="text-sm">{item.name || ""}</div>
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="font-medium cart-item-price">{item.price || ""}</div>

                    <div className="remove-cart-item">
                        <Trash2 />
                    </div>
                </div>

                <div className="cart-qty-wrapper">
                    <div className="cart-qty-container">
                        <button className="cart-qty-btn"><Minus /></button>
                        <input type="number" className="cart-qty-input" defaultValue={item.qty} />
                        <button className="cart-qty-btn"><Plus /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
