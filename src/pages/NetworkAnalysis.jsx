import {
  Activity,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Globe,
  Network,
  ShieldAlert,
  Wifi,
  Zap,
} from "lucide-react";

function NetworkAnalysis() {
  return (
    <div className="network-page">

      {/* PAGE HEADER */}
      <div className="network-header">
        <div>
          <p className="page-kicker">NETWORK INTELLIGENCE</p>
          <h1>Network Analysis</h1>
          <p className="network-subtitle">
            Monitor traffic patterns, connections and network behavior.
          </p>
        </div>

        <div className="analysis-status">
          <span className="status-pulse"></span>
          LIVE TRAFFIC
        </div>
      </div>


      {/* TRAFFIC OVERVIEW */}
      <section className="network-metrics">

        <div className="network-metric-card">
          <div className="network-metric-icon blue">
            <Activity size={20} />
          </div>

          <div>
            <span>Total Packets</span>
            <strong>842,391</strong>
            <small>
              <ArrowUp size={12} /> 8.4% from last hour
            </small>
          </div>
        </div>


        <div className="network-metric-card">
          <div className="network-metric-icon purple">
            <Network size={20} />
          </div>

          <div>
            <span>Active Flows</span>
            <strong>12,482</strong>
            <small>
              <ArrowUp size={12} /> 4.2% from last hour
            </small>
          </div>
        </div>


        <div className="network-metric-card">
          <div className="network-metric-icon cyan">
            <Wifi size={20} />
          </div>

          <div>
            <span>Bandwidth</span>
            <strong>1.8 GB</strong>
            <small>Current traffic volume</small>
          </div>
        </div>


        <div className="network-metric-card">
          <div className="network-metric-icon red">
            <ShieldAlert size={20} />
          </div>

          <div>
            <span>Anomalies</span>
            <strong>27</strong>
            <small className="danger-text">
              Requires investigation
            </small>
          </div>
        </div>

      </section>


      {/* MAIN ANALYTICS GRID */}
      <section className="network-analysis-grid">

        {/* TRAFFIC TIMELINE */}
        <div className="network-panel traffic-panel">

          <div className="network-panel-header">
            <div>
              <h2>Traffic Timeline</h2>
              <p>Network traffic volume over time</p>
            </div>

            <div className="traffic-legend">
              <span>
                <i className="legend-normal"></i>
                Normal
              </span>

              <span>
                <i className="legend-threat"></i>
                Anomaly
              </span>
            </div>
          </div>


          <div className="traffic-chart">

            <div className="chart-y-labels">
              <span>100K</span>
              <span>75K</span>
              <span>50K</span>
              <span>25K</span>
              <span>0</span>
            </div>


            <div className="chart-content">

              <div className="chart-grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>


              <div className="traffic-bars">

                <div className="traffic-bar" style={{ height: "42%" }}></div>
                <div className="traffic-bar" style={{ height: "55%" }}></div>
                <div className="traffic-bar" style={{ height: "48%" }}></div>
                <div className="traffic-bar" style={{ height: "67%" }}></div>
                <div className="traffic-bar" style={{ height: "61%" }}></div>
                <div className="traffic-bar" style={{ height: "74%" }}></div>
                <div className="traffic-bar anomaly" style={{ height: "91%" }}></div>
                <div className="traffic-bar" style={{ height: "70%" }}></div>
                <div className="traffic-bar" style={{ height: "63%" }}></div>
                <div className="traffic-bar" style={{ height: "78%" }}></div>
                <div className="traffic-bar anomaly" style={{ height: "94%" }}></div>
                <div className="traffic-bar" style={{ height: "69%" }}></div>

              </div>


              <div className="chart-x-labels">
                <span>12:00</span>
                <span>12:10</span>
                <span>12:20</span>
                <span>12:30</span>
                <span>12:40</span>
                <span>12:50</span>
                <span>13:00</span>
              </div>

            </div>

          </div>

        </div>


        {/* PROTOCOL DISTRIBUTION */}
        <div className="network-panel protocol-panel">

          <div className="network-panel-header">
            <div>
              <h2>Protocol Distribution</h2>
              <p>Traffic by protocol</p>
            </div>

            <BarChart3 size={19} />
          </div>


          <div className="protocol-list">

            <div className="protocol-item">
              <div className="protocol-info">
                <span className="protocol-dot http"></span>
                <span>HTTPS</span>
                <strong>46%</strong>
              </div>

              <div className="protocol-track">
                <div className="protocol-fill http-fill"></div>
              </div>
            </div>


            <div className="protocol-item">
              <div className="protocol-info">
                <span className="protocol-dot tcp"></span>
                <span>TCP</span>
                <strong>28%</strong>
              </div>

              <div className="protocol-track">
                <div className="protocol-fill tcp-fill"></div>
              </div>
            </div>


            <div className="protocol-item">
              <div className="protocol-info">
                <span className="protocol-dot udp"></span>
                <span>UDP</span>
                <strong>14%</strong>
              </div>

              <div className="protocol-track">
                <div className="protocol-fill udp-fill"></div>
              </div>
            </div>


            <div className="protocol-item">
              <div className="protocol-info">
                <span className="protocol-dot dns"></span>
                <span>DNS</span>
                <strong>8%</strong>
              </div>

              <div className="protocol-track">
                <div className="protocol-fill dns-fill"></div>
              </div>
            </div>


            <div className="protocol-item">
              <div className="protocol-info">
                <span className="protocol-dot other"></span>
                <span>Other</span>
                <strong>4%</strong>
              </div>

              <div className="protocol-track">
                <div className="protocol-fill other-fill"></div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* NETWORK BEHAVIOR */}
      <section className="network-behavior-grid">

        <div className="network-panel behavior-panel">

          <div className="network-panel-header">
            <div>
              <h2>Network Behavior</h2>
              <p>Current traffic characteristics</p>
            </div>

            <Zap size={19} />
          </div>


          <div className="behavior-items">

            <div className="behavior-item">
              <div className="behavior-icon">
                <ArrowUp size={17} />
              </div>

              <div>
                <span>Outbound Traffic</span>
                <strong>624 MB</strong>
              </div>

              <em>Normal</em>
            </div>


            <div className="behavior-item">
              <div className="behavior-icon">
                <ArrowDown size={17} />
              </div>

              <div>
                <span>Inbound Traffic</span>
                <strong>1.2 GB</strong>
              </div>

              <em>Normal</em>
            </div>


            <div className="behavior-item">
              <div className="behavior-icon warning">
                <Globe size={17} />
              </div>

              <div>
                <span>External Connections</span>
                <strong>184</strong>
              </div>

              <em className="warning-text">Elevated</em>
            </div>

          </div>

        </div>


        {/* ANOMALY SUMMARY */}
        <div className="network-panel anomaly-panel">

          <div className="network-panel-header">
            <div>
              <h2>Anomaly Detection</h2>
              <p>AI-detected network irregularities</p>
            </div>

            <ShieldAlert size={19} />
          </div>


          <div className="anomaly-score">
            <div className="anomaly-circle">
              <strong>27</strong>
              <span>ANOMALIES</span>
            </div>

            <div className="anomaly-description">
              <strong>Network activity requires attention</strong>
              <p>
                Multiple unusual traffic patterns have been
                detected by the monitoring engine.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* SUSPICIOUS CONNECTIONS */}
      <section className="network-panel connections-panel">

        <div className="network-panel-header">
          <div>
            <h2>Suspicious Network Connections</h2>
            <p>Connections flagged by the security engine</p>
          </div>

          <button className="connection-filter">
            <ShieldAlert size={15} />
            4 flagged
          </button>
        </div>


        <div className="connections-table">

          <div className="table-header">
            <span>Source</span>
            <span>Destination</span>
            <span>Protocol</span>
            <span>Port</span>
            <span>Risk</span>
            <span>Status</span>
          </div>


          <div className="connection-row">
            <span className="ip-address">192.168.1.24</span>
            <span className="ip-address">185.220.101.4</span>
            <span>TCP</span>
            <span>443</span>
            <span className="risk-high">92%</span>
            <span className="status-danger">Critical</span>
          </div>


          <div className="connection-row">
            <span className="ip-address">192.168.1.87</span>
            <span className="ip-address">45.155.205.12</span>
            <span>HTTPS</span>
            <span>8080</span>
            <span className="risk-medium">71%</span>
            <span className="status-warning">Suspicious</span>
          </div>


          <div className="connection-row">
            <span className="ip-address">10.0.0.42</span>
            <span className="ip-address">91.92.242.17</span>
            <span>UDP</span>
            <span>53</span>
            <span className="risk-medium">64%</span>
            <span className="status-warning">Suspicious</span>
          </div>


          <div className="connection-row">
            <span className="ip-address">192.168.1.51</span>
            <span className="ip-address">103.27.186.8</span>
            <span>TCP</span>
            <span>22</span>
            <span className="risk-low">42%</span>
            <span className="status-monitoring">Monitoring</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default NetworkAnalysis;