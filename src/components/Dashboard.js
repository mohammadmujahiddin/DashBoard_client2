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

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {/* Power BI Dashboard with Green Shadow */}
        <iframe
          title="Power BI Dashboard"
          className="dashboard-frame"
          src="https://app.powerbi.com/reportEmbed?reportId=ec54a816-3afc-4035-bd7e-a129f30ae980&autoAuth=true&ctid=ff335ba2-bb68-489a-bbdd-f49ab4319838"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>

        {/* Insights Section */}
        <div className="insights-section">
          <h3>📊 Key Economic Insights</h3>
          <ul>
            <li>📌 <strong>773.4 patents</strong> per 100,000 inhabitants across 30 cities.</li>
            <li>💰 <strong>R&D expenditure</strong> reached <strong>40% of GDP</strong> in 2024.</li>
            <li>📉 <strong>Unemployment rate</strong> fluctuated between <strong>170% and 300%</strong> (aggregated).</li>
            <li>💻 <strong>Highest ICT sector employment</strong>: <strong>Chennai (24.9%)</strong> in 2019.</li>
            <li>🏛️ <strong>Delhi led with 4.6 patents per 100,000 inhabitants</strong> in 2024.</li>
            <li>📈 <strong>Stock market volatility</strong> remains high in Q1 2024.</li>
            <li>🔋 <strong>Renewable energy adoption</strong> rose by <strong>35%</strong> in 2024.</li>
            <li>🏢 <strong>SME employment trends</strong> linked to youth unemployment rates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
