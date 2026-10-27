import {
  FileText,
  Download,
  Calendar,
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
} from "lucide-react";

function Reports() {
  const reports = [
    {
      id: "CP-2026-0926",
      name: "Network Security Analysis",
      date: "26 Sep 2026",
      threats: 27,
      status: "Completed",
    },
    {
      id: "CP-2026-0925",
      name: "Attack Forecast Report",
      date: "25 Sep 2026",
      threats: 14,
      status: "Completed",
    },
    {
      id: "CP-2026-0924",
      name: "Traffic Intelligence Report",
      date: "24 Sep 2026",
      threats: 8,
      status: "Completed",
    },
  ];

  return (
    <div className="reports-page">

      <div className="reports-header">
        <div>
          <p className="page-kicker">SECURITY REPORTING</p>
          <h1>Reports</h1>
          <p>Review and export network security analysis.</p>
        </div>

        <button className="generate-button">
          <FileText size={16} />
          Generate Report
        </button>
      </div>


      <div className="report-overview">

        <div className="report-overview-card">
          <FileText />
          <span>Total Reports</span>
          <strong>24</strong>
        </div>

        <div className="report-overview-card">
          <AlertTriangle />
          <span>Threats Analyzed</span>
          <strong>186</strong>
        </div>

        <div className="report-overview-card">
          <BrainCircuit />
          <span>AI Predictions</span>
          <strong>142</strong>
        </div>

        <div className="report-overview-card">
          <ShieldCheck />
          <span>Reports Completed</span>
          <strong>24</strong>
        </div>

      </div>


      <div className="reports-panel">

        <div className="section-heading">
          <div>
            <h2>Recent Reports</h2>
            <p>Generated security intelligence reports</p>
          </div>

          <Calendar size={19} />
        </div>


        <div className="reports-list">

          {reports.map((report, index) => (

            <div className="report-row" key={index}>

              <div className="report-icon">
                <FileText size={18} />
              </div>

              <div className="report-details">
                <strong>{report.name}</strong>
                <span>
                  {report.id} · {report.date}
                </span>
              </div>

              <div className="report-threats">
                <span>Threats</span>
                <strong>{report.threats}</strong>
              </div>

              <span className="report-complete">
                {report.status}
              </span>

              <button className="download-button">
                <Download size={16} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Reports;