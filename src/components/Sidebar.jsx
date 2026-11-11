import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    Wallet,
    FileText,
    BarChart3,
    Settings,
    Bell
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Orders", icon: ShoppingCart },
    { name: "Revenue", icon: Wallet },
    { name: "Invoices", icon: FileText },
    { name: "Reports", icon: BarChart3 },
    { name: "Notifications", icon: Bell },
    { name: "Settings", icon: Settings },
];

export default function Sidebar({ activePage, setActivePage }) {

    return (
        <aside className="sidebar">

            <div className="logo">
                <h2>BizPanel</h2>
                <span>MANAGEMENT SYSTEM</span>
            </div>

            <p className="menu-title">MAIN MENU</p>

            <nav>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePage === item.name;

                    return (
                        <div
                            key={item.name}
                            className={`menu-item ${isActive ? "active" : ""}`}
                            onClick={() => setActivePage(item.name)}
                            style={{ cursor: "pointer" }}
                        >
                            <Icon size={19} />
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </nav>

            <div className="sidebar-bottom">
                <p>Version 1.0.0</p>
                <p>© 2026 BizPanel</p>
            </div>

        </aside>
    );
}