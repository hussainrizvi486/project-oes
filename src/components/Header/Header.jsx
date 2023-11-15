import { Search, ShoppingCart, User2, BookUser } from "lucide-react"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="page-header header-main__nav">
            <div className="header-left__section">
                <div className="header-text__logo">
                    <Link to={""}>Logo</Link>
                </div>
            </div>

            <div className="header-center__section">
                <div className="search-box__wrapper">
                    <HeaderSearchBox />

                </div>
            </div>

            <div className="header-right__section">
                <nav className="header-nav">

                    <Link className="header-nav__link" to={"/cart"}>
                        <ShoppingCart />
                    </Link>

                    <Link className="header-nav__link" to={"/login"}>
                        <User2 />
                    </Link>

                    <Link className="header-nav__link" to={"/address"}>

                        <BookUser />
                    </Link>


                </nav>
            </div>
        </header>
    )
}


const HeaderSearchBox = ({ placeholder = "Type somthing here." }) => {
    return (
        <form className="header-search-box">
            <div className="search-box__input">
                <input type="text" placeholder={placeholder} />
                <button >
                    <Search />
                </button>
            </div>

            <div className="search-results__container">
                <ul className="search-results__list">
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum </li>
                    <li>Lorem ipsum Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </form>
    )
}