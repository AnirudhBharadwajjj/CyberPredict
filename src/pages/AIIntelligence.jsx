import {
  BrainCircuit,
  TrendingUp,
  ShieldAlert,
  Target,
  Activity,
  Clock,
  Zap,
} from "lucide-react";

function AIIntelligence() {
  return (
    <div className="intelligence-page">

      <div className="intelligence-header">
        <div>
          <p className="page-kicker">AI SECURITY INTELLIGENCE</p>
          <h1>AI Intelligence</h1>
          <p>
            Predictive analysis of network attack progression.
          </p>
        </div>

        <div className="model-status">
          <span></span>
          MODEL ONLINE
        </div>
      </div>


      <div className="ai-metrics">

        <div className="ai-card">
          <BrainCircuit />
          <span>Model Accuracy</span>
          <strong>94.7%</strong>
          <small>Temporal LSTM</small>
        </div>

        <div className="ai-card">
          <Target />
          <span>Prediction Confidence</span>
          <strong>87.4%</strong>
          <small>Current forecast</small>
        </div>

        <div className="ai-card">
          <Activity />
          <span>Predictions</span>
          <strong>12,842</strong>
          <small>Processed events</small>
        </div>

        <div className="ai-card">
          <Zap />
          <span>Inference Time</span>
          <strong>42 ms</strong>
          <small>Average latency</small>
        </div>

      </div>


      <div className="forecast-main-grid">

        <div className="forecast-large-panel">

          <div className="section-heading">
            <div>
              <h2>Attack Forecast</h2>
              <p>AI prediction for the current attack sequence</p>
            </div>

            <BrainCircuit size={21} />
          </div>


          <div className="forecast-main-content">

            <div className="current-stage-box">
              <span>CURRENT STAGE</span>
              <strong>Exploitation</strong>
              <small>Detected with high confidence</small>
            </div>

            <div className="forecast-arrow">→</div>

            <div className="predicted-stage-box">
              <span>PREDICTED NEXT STAGE</span>
              <strong>Command & Control</strong>
              <small>87.4% confidence</small>
            </div>

          </div>


          <div className="forecast-confidence">

            <div className="confidence-top">
              <span>Prediction Confidence</span>
              <strong>87.4%</strong>
            </div>

            <div className="confidence-bar">
              <div></div>
            </div>

          </div>

        </div>


        <div className="risk-panel">

          <div className="section-heading">
            <div>
              <h2>Threat Risk</h2>
              <p>Current AI assessment</p>
            </div>

            <ShieldAlert size={20} />
          </div>

          <div className="risk-circle">
            <strong>68</strong>
            <span>/ 100</span>
          </div>

          <div className="risk-label">
            ELEVATED RISK
          </div>

          <p className="risk-description">
            Network behavior indicates an elevated probability
            of continued malicious activity.
          </p>

        </div>

      </div>


      <div className="attack-probability-panel">

        <div className="section-heading">
          <div>
            <h2>Attack Stage Probabilities</h2>
            <p>Model probability distribution</p>
          </div>

          <TrendingUp size={20} />
        </div>


        <div className="probability-list">

          <div className="probability-row">
            <span>Reconnaissance</span>
            <div><i style={{ width: "8%" }}></i></div>
            <strong>8%</strong>
          </div>

          <div className="probability-row">
            <span>Initial Access</span>
            <div><i style={{ width: "14%" }}></i></div>
            <strong>14%</strong>
          </div>

          <div className="probability-row active">
            <span>Exploitation</span>
            <div><i style={{ width: "82%" }}></i></div>
            <strong>82%</strong>
          </div>

          <div className="probability-row predicted">
            <span>Command & Control</span>
            <div><i style={{ width: "87%" }}></i></div>
            <strong>87%</strong>
          </div>

          <div className="probability-row">
            <span>Impact</span>
            <div><i style={{ width: "21%" }}></i></div>
            <strong>21%</strong>
          </div>

        </div>

      </div>


      <div className="model-info-grid">

        <div className="model-info-card">
          <Clock />
          <div>
            <span>Model Type</span>
            <strong>LSTM Temporal Forecasting</strong>
          </div>
        </div>

        <div className="model-info-card">
          <BrainCircuit />
          <div>
            <span>Framework</span>
            <strong>PyTorch</strong>
          </div>
        </div>

        <div className="model-info-card">
          <Activity />
          <div>
            <span>Input</span>
            <strong>Network Flow Features</strong>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AIIntelligence;