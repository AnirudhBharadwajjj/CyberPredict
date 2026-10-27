import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BrainCircuit,
  Globe,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <div className="page-kicker">
            <span className="live-dot"></span>
            LIVE SECURITY MONITORING
          </div>

          <h1>Command Center</h1>

          <p>
            Real-time network intelligence and AI-powered threat forecasting.
          </p>
        </div>

        <div className="system-status">
          <ShieldCheck size={18} />
          <div>
            <strong>System Secure</strong>
            <span>AI Engine Online</span>
          </div>
        </div>
      </div>


      {/* METRICS */}
      <div className="metrics-grid">

        <div className="metric-card threat-card">
          <div className="metric-top">
            <span>THREAT SCORE</span>
            <AlertTriangle size={18} />
          </div>

          <div className="metric-value">
            68<span>/100</span>
          </div>

          <div className="metric-bottom warning-text">
            Elevated risk detected
            <ArrowUpRight size={14} />
          </div>
        </div>


        <div className="metric-card">
          <div className="metric-top">
            <span>NETWORK HEALTH</span>
            <Wifi size={18} />
          </div>

          <div className="metric-value health-value">
            94<span>%</span>
          </div>

          <div className="metric-bottom success-text">
            <span className="mini-dot"></span>
            Operating normally
          </div>
        </div>


        <div className="metric-card">
          <div className="metric-top">
            <span>ACTIVE THREATS</span>
            <AlertTriangle size={18} />
          </div>

          <div className="metric-value">
            04
          </div>

          <div className="metric-bottom">
            <span className="danger-text">2 critical</span>
            <span> · </span>
            <span>2 high</span>
          </div>
        </div>


        <div className="metric-card">
          <div className="metric-top">
            <span>LIVE CONNECTIONS</span>
            <Globe size={18} />
          </div>

          <div className="metric-value">
            1,284
          </div>

          <div className="metric-bottom success-text">
            <Activity size={14} />
            +8.4% traffic
          </div>
        </div>

      </div>


      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* NETWORK ACTIVITY */}
        <div className="panel network-panel">

          <div className="panel-header">
            <div>
              <h2>Network Activity</h2>
              <p>Traffic behavior over the last 24 hours</p>
            </div>

            <div className="panel-badge">
              <span className="live-dot"></span>
              LIVE
            </div>
          </div>


          <div className="chart-area">

            <div className="chart-lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="chart-bars">
              <span style={{ height: "28%" }}></span>
              <span style={{ height: "42%" }}></span>
              <span style={{ height: "35%" }}></span>
              <span style={{ height: "58%" }}></span>
              <span style={{ height: "48%" }}></span>
              <span style={{ height: "68%" }}></span>
              <span style={{ height: "54%" }}></span>
              <span style={{ height: "76%" }}></span>
              <span style={{ height: "62%" }}></span>
              <span style={{ height: "88%" }}></span>
              <span style={{ height: "72%" }}></span>
              <span style={{ height: "64%" }}></span>
              <span style={{ height: "82%" }}></span>
              <span style={{ height: "70%" }}></span>
              <span style={{ height: "92%" }}></span>
              <span style={{ height: "78%" }}></span>
              <span style={{ height: "67%" }}></span>
              <span style={{ height: "74%" }}></span>
              <span style={{ height: "58%" }}></span>
              <span style={{ height: "70%" }}></span>
            </div>

          </div>

          <div className="chart-labels">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>NOW</span>
          </div>

        </div>


        {/* AI FORECAST */}
        <div className="panel forecast-panel">

          <div className="panel-header">
            <div>
              <h2>AI Threat Forecast</h2>
              <p>Predicted attack progression</p>
            </div>

            <BrainCircuit size={22} />
          </div>


          <div className="forecast-current">
            <span>CURRENT STAGE</span>
            <strong>Exploitation</strong>
          </div>


          <div className="forecast-arrow">
            <div className="arrow-line"></div>
            <ArrowUpRight size={20} />
          </div>


          <div className="forecast-next">
            <div>
              <span>PREDICTED NEXT STAGE</span>
              <strong>Command & Control</strong>
            </div>

            <div className="confidence">
              <strong>87%</strong>
              <span>confidence</span>
            </div>
          </div>


          <div className="prediction-message">
            <Zap size={16} />
            AI detected a high probability of attack progression.
          </div>

        </div>

      </div>


      {/* ATTACK PROGRESSION */}
      <div className="panel progression-panel">

        <div className="panel-header">
          <div>
            <h2>Attack Progression</h2>
            <p>AI-mapped lifecycle of the current threat</p>
          </div>

          <span className="prediction-tag">
            AI PREDICTION ACTIVE
          </span>
        </div>


        <div className="attack-flow">

          <div className="attack-stage completed">
            <div className="stage-circle">✓</div>
            <strong>Reconnaissance</strong>
            <span>Completed</span>
          </div>

          <div className="stage-line completed-line"></div>

          <div className="attack-stage completed">
            <div className="stage-circle">✓</div>
            <strong>Initial Access</strong>
            <span>Completed</span>
          </div>

          <div className="stage-line active-line"></div>

          <div className="attack-stage current">
            <div className="stage-circle">3</div>
            <strong>Exploitation</strong>
            <span>Current Stage</span>
          </div>

          <div className="stage-line predicted-line"></div>

          <div className="attack-stage predicted">
            <div className="stage-circle">4</div>
            <strong>Command & Control</strong>
            <span>AI Predicted</span>
          </div>

          <div className="stage-line"></div>

          <div className="attack-stage">
            <div className="stage-circle">5</div>
            <strong>Impact</strong>
            <span>Future</span>
          </div>

        </div>

      </div>


      {/* BOTTOM GRID */}
      <div className="bottom-grid">

        {/* RECENT ALERTS */}
        <div className="panel alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Recent Security Alerts</h2>
              <p>Latest events requiring attention</p>
            </div>

            <span className="view-all">View all →</span>
          </div>


          <div className="alert-row">
            <div className="alert-icon critical">
              <AlertTriangle size={17} />
            </div>

            <div className="alert-info">
              <strong>Suspicious outbound traffic</strong>
              <span>10.24.18.42 → 185.220.101.4</span>
            </div>

            <span className="severity critical-text">CRITICAL</span>
          </div>


          <div className="alert-row">
            <div className="alert-icon high">
              <Activity size={17} />
            </div>

            <div className="alert-info">
              <strong>Port scanning detected</strong>
              <span>192.168.1.105 · 24 ports</span>
            </div>

            <span className="severity high-text">HIGH</span>
          </div>


          <div className="alert-row">
            <div className="alert-icon medium">
              <Globe size={17} />
            </div>

            <div className="alert-info">
              <strong>Abnormal traffic spike</strong>
              <span>Network segment 04</span>
            </div>

            <span className="severity medium-text">MEDIUM</span>
          </div>

        </div>


        {/* AI ENGINE */}
        <div className="panel engine-panel">

          <div className="panel-header">
            <div>
              <h2>AI Engine</h2>
              <p>Model activity</p>
            </div>

            <BrainCircuit size={22} />
          </div>


          <div className="engine-status">
            <div className="engine-orb">
              <BrainCircuit size={28} />
            </div>

            <div>
              <strong>Temporal Forecasting Model</strong>
              <span>PyTorch · LSTM</span>
            </div>
          </div>


          <div className="engine-stats">
            <div>
              <span>MODEL ACCURACY</span>
              <strong>94.7%</strong>
            </div>

            <div>
              <span>PREDICTIONS</span>
              <strong>12,842</strong>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;