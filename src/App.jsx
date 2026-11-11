import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Users":
        return (
          <div className="page-placeholder">
            <h1>Users Management</h1>
            <p>Manage and monitor all registered users.</p>
          </div>
        );
      case "Orders":
        return <h1 className="page-placeholder">Orders Management</h1>;

      case "Revenue":
        return <h1 className="page-placeholder">Revenue Analytics</h1>;

      case "Services":
        return <h1 className="page-placeholder">Services Management</h1>;

      case "Reviews":
        return <h1 className="page-placeholder">Customer Reviews</h1>;

      case "Settings":
        return <h1 className="page-placeholder">Admin Settings</h1>;
      case "Invoices":
        return <h1 className="page-placeholder">Invoices Management</h1>;

      case "Reports":
        return <h1 className="page-placeholder">Business Reports</h1>;

      case "Notifications":
        return <h1 className="page-placeholder">Notifications</h1>;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {renderPage()}
    </div>
  );
}

export default App;