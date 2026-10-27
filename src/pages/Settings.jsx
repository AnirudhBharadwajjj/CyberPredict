import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  BrainCircuit,
  Database,
  User,
} from "lucide-react";

function Settings() {
  return (
    <div className="settings-page">

      <div className="settings-header">
        <div>
          <p className="page-kicker">SYSTEM CONFIGURATION</p>
          <h1>Settings</h1>
          <p>Configure CyberPredict AI monitoring and preferences.</p>
        </div>
      </div>


      <div className="settings-grid">

        <div className="settings-card">

          <div className="settings-card-header">
            <User />
            <div>
              <h2>Account</h2>
              <p>User configuration</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Analyst Name</strong>
              <span>Security dashboard user</span>
            </div>

            <input
              type="text"
              value="Security Analyst"
              readOnly
            />
          </div>

        </div>


        <div className="settings-card">

          <div className="settings-card-header">
            <Bell />
            <div>
              <h2>Alerts</h2>
              <p>Threat notification settings</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Critical Alerts</strong>
              <span>Notify when critical threats appear</span>
            </div>

            <div className="toggle active">
              <div></div>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>AI Forecast Alerts</strong>
              <span>Notify when attack stage changes</span>
            </div>

            <div className="toggle active">
              <div></div>
            </div>
          </div>

        </div>


        <div className="settings-card">

          <div className="settings-card-header">
            <BrainCircuit />
            <div>
              <h2>AI Model</h2>
              <p>Forecasting configuration</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Model</strong>
              <span>Temporal attack forecasting</span>
            </div>

            <strong className="setting-value">
              LSTM
            </strong>
          </div>

          <div className="setting-row">
            <div>
              <strong>Framework</strong>
              <span>Machine learning engine</span>
            </div>

            <strong className="setting-value">
              PyTorch
            </strong>
          </div>

        </div>


        <div className="settings-card">

          <div className="settings-card-header">
            <Database />
            <div>
              <h2>Data & Storage</h2>
              <p>Network data configuration</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Database</strong>
              <span>Primary application database</span>
            </div>

            <strong className="setting-value">
              PostgreSQL
            </strong>
          </div>

          <div className="setting-row">
            <div>
              <strong>Data Retention</strong>
              <span>Historical analysis storage</span>
            </div>

            <strong className="setting-value">
              30 Days
            </strong>
          </div>

        </div>


        <div className="settings-card security-settings">

          <div className="settings-card-header">
            <Shield />
            <div>
              <h2>Security</h2>
              <p>Platform security status</p>
            </div>
          </div>

          <div className="security-status">
            <span></span>
            <div>
              <strong>System Secure</strong>
              <p>All security services are operational.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;