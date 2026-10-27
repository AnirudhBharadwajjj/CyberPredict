import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Network,
  BrainCircuit,
  Search,
  ShieldAlert,
  FileText,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo-section">
        <div className="logo-icon">CP</div>

        <div>
          <h2>CyberPredict</h2>
          <span>AI SECURITY</span>
        </div>
      </div>

      <nav className="sidebar-nav">

        <p className="nav-label">MONITORING</p>

        <NavLink to="/" className="nav-item">
          <LayoutDashboard size={19} />
          <span>Command Center</span>
        </NavLink>

        <NavLink to="/network" className="nav-item">
          <Network size={19} />
          <span>Network Analysis</span>
        </NavLink>

        <NavLink to="/intelligence" className="nav-item">
          <BrainCircuit size={19} />
          <span>AI Intelligence</span>
        </NavLink>

        <NavLink to="/explainability" className="nav-item">
          <Search size={19} />
          <span>Explainability</span>
        </NavLink>

        <NavLink to="/threats" className="nav-item">
          <ShieldAlert size={19} />
          <span>Threats & Alerts</span>
        </NavLink>

        <NavLink to="/reports" className="nav-item">
          <FileText size={19} />
          <span>Reports</span>
        </NavLink>

        <p className="nav-label settings-label">SYSTEM</p>

        <NavLink to="/settings" className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

      </nav>

      <div className="sidebar-status">
        <div className="status-dot"></div>

        <div>
          <strong>AI Engine Online</strong>
          <span>System operational</span>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;