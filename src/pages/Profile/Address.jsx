import { ArrowLeft, Plus } from "lucide-react"

const Address = () => {
    const Address = null
    return (
        <div>
            <header className="header-simple">
                <section><ArrowLeft /></section>
                <section>
                    <div className="plain-header__heading">Address Book</div>
                </section>
                <section></section>
            </header>
            {
                Address ? <></> :
                    <div className="add-addr-container">
                        <div className="flex-center h-100">
                            <button className="btn btn-icon add-address__btn">
                                <Plus /> <span>Add New Address</span>
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Address