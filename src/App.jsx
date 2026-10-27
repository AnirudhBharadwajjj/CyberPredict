import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import NetworkAnalysis from "./pages/NetworkAnalysis";
import AIIntelligence from "./pages/AIIntelligence";
import Explainability from "./pages/Explainability";
import Threats from "./pages/Threats";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/network" element={<NetworkAnalysis />} />
            <Route path="/intelligence" element={<AIIntelligence />} />
            <Route path="/explainability" element={<Explainability />} />
            <Route path="/threats" element={<Threats />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;