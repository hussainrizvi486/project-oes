import { Search, ShoppingCart, User2 } from "lucide-react"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="page-header header-main__nav">
            <div className="header-left__section">
                <div className="header-text__logo">
                    <Link to={"/"}>Logo</Link>
                </div>
            </div>

            <div className="header-center__section">
                <div className="search-box__wrapper">
                    <HeaderSearchBox />

                </div>
            </div>

            <div className="header-right__section">
                <nav className="header-nav">

                    <Link className="header-nav__link">
                        <ShoppingCart />
                    </Link>

                    <Link className="header-nav__link">
                        <User2 />
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
        </form>
    )
}