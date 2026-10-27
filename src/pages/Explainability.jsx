import {
  Search,
  BrainCircuit,
  Activity,
  Network,
  Globe,
  BarChart3,
} from "lucide-react";

function Explainability() {
  return (
    <div className="explain-page">

      <div className="explain-header">
        <div>
          <p className="page-kicker">MODEL TRANSPARENCY</p>
          <h1>Explainability</h1>
          <p>
            Understand why the AI generated its current prediction.
          </p>
        </div>

        <div className="explain-status">
          <Search size={15} />
          ANALYSIS COMPLETE
        </div>
      </div>


      <div className="explain-grid">

        <div className="explain-prediction">

          <div className="section-heading">
            <div>
              <h2>Current Prediction</h2>
              <p>AI decision summary</p>
            </div>

            <BrainCircuit size={20} />
          </div>

          <div className="prediction-result">
            <span>FORECASTED STAGE</span>
            <strong>Command & Control</strong>
            <div>
              Confidence <b>87.4%</b>
            </div>
          </div>

          <div className="prediction-message">
            The model identified a combination of traffic
            characteristics associated with progression toward
            command and control activity.
          </div>

        </div>


        <div className="feature-panel">

          <div className="section-heading">
            <div>
              <h2>Feature Contributions</h2>
              <p>Factors influencing the prediction</p>
            </div>

            <BarChart3 size={20} />
          </div>


          <div className="feature-list">

            <div className="feature">
              <div>
                <span>Packet Rate</span>
                <strong>42%</strong>
              </div>
              <div className="feature-bar">
                <i style={{ width: "42%" }}></i>
              </div>
            </div>

            <div className="feature">
              <div>
                <span>Flow Duration</span>
                <strong>28%</strong>
              </div>
              <div className="feature-bar">
                <i style={{ width: "28%" }}></i>
              </div>
            </div>

            <div className="feature">
              <div>
                <span>Destination Port</span>
                <strong>18%</strong>
              </div>
              <div className="feature-bar">
                <i style={{ width: "18%" }}></i>
              </div>
            </div>

            <div className="feature">
              <div>
                <span>Bytes Transferred</span>
                <strong>12%</strong>
              </div>
              <div className="feature-bar">
                <i style={{ width: "12%" }}></i>
              </div>
            </div>

          </div>

        </div>

      </div>


      <div className="explain-evidence">

        <div className="section-heading">
          <div>
            <h2>Supporting Evidence</h2>
            <p>Observed network characteristics</p>
          </div>
        </div>


        <div className="evidence-grid">

          <div className="evidence-card">
            <Activity />
            <span>Packet Rate</span>
            <strong>8,421/sec</strong>
            <small>Above baseline</small>
          </div>

          <div className="evidence-card">
            <Network />
            <span>Flow Duration</span>
            <strong>14.8 sec</strong>
            <small>Unusual pattern</small>
          </div>

          <div className="evidence-card">
            <Globe />
            <span>External Hosts</span>
            <strong>184</strong>
            <small>Elevated activity</small>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Explainability;