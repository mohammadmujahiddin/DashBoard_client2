import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import CSS

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Dashboard</h2>
        <div className="nav-links">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Full-Screen Power BI Dashboard */}
      <iframe
        title="Power BI Dashboard"
        className="dashboard-frame"
        src="https://app.powerbi.com/reportEmbed?reportId=ec54a816-3afc-4035-bd7e-a129f30ae980&autoAuth=true&ctid=ff335ba2-bb68-489a-bbdd-f49ab4319838"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>

      

      
    </div>
  );
};

export default Dashboard;
