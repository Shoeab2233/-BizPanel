import {
    Users,
    Wallet,
    ShoppingCart,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";

const stats = [
    {
        title: "Total Revenue",
        value: "$48,290",
        change: "+12.5%",
        icon: Wallet,
        positive: true
    },
    {
        title: "Total Users",
        value: "12,840",
        change: "+8.2%",
        icon: Users,
        positive: true
    },
    {
        title: "Total Orders",
        value: "3,642",
        change: "+5.4%",
        icon: ShoppingCart,
        positive: true
    },
    {
        title: "Growth Rate",
        value: "24.8%",
        change: "-2.1%",
        icon: TrendingUp,
        positive: false
    }
];
const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 25000 },
    { month: "May", revenue: 22000 },
    { month: "Jun", revenue: 32000 },
    { month: "Jul", revenue: 28000 },
    { month: "Aug", revenue: 40000 },
    { month: "Sep", revenue: 35000 },
    { month: "Oct", revenue: 48000 },
    { month: "Nov", revenue: 43000 },
    { month: "Dec", revenue: 55000 }
];

const categoryData = [
    { name: "Services", value: 45 },
    { name: "Products", value: 30 },
    { name: "Subscriptions", value: 25 }
];

const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b"];

export default function Dashboard() {
    return (
        <main className="main-content">

            <header className="topbar">
                <div>
                    <h1>Dashboard Overview</h1>
                    <p>Welcome back! Here's what's happening today.</p>
                </div>

                <div className="admin-profile">
                    <span>Admin User</span>
                    <div className="avatar">A</div>
                </div>
            </header>

            <section className="stats-grid">
                {stats.map((item) => {
                    const Icon = item.icon;
                    const ChangeIcon = item.positive
                        ? ArrowUpRight
                        : ArrowDownRight;

                    return (
                        <div className="stat-card" key={item.title}>
                            <div className="stat-top">
                                <span>{item.title}</span>
                                <div className="stat-icon">
                                    <Icon size={21} />
                                </div>
                            </div>

                            <h2>{item.value}</h2>

                            <div className={item.positive ? "positive" : "negative"}>
                                <ChangeIcon size={16} />
                                {item.change}
                                <span> vs last month</span>
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className="charts-grid">

                <div className="chart-card">
                    <h3>Revenue Overview</h3>
                    <p>Monthly revenue performance</p>

                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={280}>
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />

                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#4f46e5"
                                    fill="url(#revenueColor)"
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <section className="transactions-card">
                    <div className="table-header">
                        <div>
                            <h3>Recent Transactions</h3>
                            <p>Latest business transactions</p>
                        </div>
                        <button>View All</button>
                    </div>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>John Smith</td>
                                    <td>#ORD001</td>
                                    <td>11 Nov 2026</td>
                                    <td>$2,500</td>
                                    <td><span className="status paid">Paid</span></td>
                                </tr>

                                <tr>
                                    <td>Sarah Wilson</td>
                                    <td>#ORD002</td>
                                    <td>10 Nov 2026</td>
                                    <td>$1,800</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>

                                <tr>
                                    <td>Michael Brown</td>
                                    <td>#ORD003</td>
                                    <td>09 Nov 2026</td>
                                    <td>$3,200</td>
                                    <td><span className="status paid">Paid</span></td>
                                </tr>

                                <tr>
                                    <td>Emma Davis</td>
                                    <td>#ORD004</td>
                                    <td>08 Nov 2026</td>
                                    <td>$950</td>
                                    <td><span className="status failed">Failed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="chart-card">
                    <h3>Revenue Categories</h3>
                    <p>Business distribution</p>

                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={95}
                                    label
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={entry.name} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </section>

            <section className="welcome-card">
                <h2>Welcome to BizPanel!</h2>
                <p>
                    Manage your business performance, monitor analytics
                    and track your growth from one place.
                </p>
                <button>Explore Dashboard</button>
            </section>

        </main>
    );
}