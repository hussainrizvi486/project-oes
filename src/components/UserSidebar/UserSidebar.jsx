import { Link } from "lucide-react"

const UserSidebar = () => {
    const sidebarLinks = [
        { "label": "Account Settings" , "url": "/"},
        { "label": "Address Book" , "url": "/"},
        { "label": "Pending Orders" , "url": "/"},
        { "label": "All Orders" , "url": "/"},
    ]

    return (
        <div className="user-sidebar">
            <nav className="sidebar-nav">

                <div className="sidebar-nav-element">
                    <Link to={"/"}>

                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default UserSidebar

const SidebarNavElement = () => {
    return (
        <>
        </>
    )
}