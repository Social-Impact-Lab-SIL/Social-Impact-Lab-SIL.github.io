export default function DashboardsHome() {
  return (
    <div>
      <h1>Social Impact Lab Dashboards</h1>
      <p>
        Welcome to the interactive data visualization hub for the Social Impact Lab (SIL) at the University of Missouri. This portal hosts our public policy tracking tools, legal epidemiology surveillance applications, and interactive visualization resources designed for researchers, advocates, and policymakers.
      </p>

      <hr />

      <h2>Active Dashboards</h2>
      <div className="dashboard-box">
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>
            <strong>
              <a href="https://social-impact-lab-sil.github.io/SIL-Hearing-Publication-Dashboard/" target="_blank" rel="noopener noreferrer">
                Hearing Health Policy Tracker
              </a>
            </strong>
            <span className="badge badge-live">Live</span>
            <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)' }}>
              Legal epidemiology surveillance of adult Medicaid hearing aid coverage, private insurance mandates, and population coverage trends across the United States (2003–2023).
            </p>
          </li>
        </ul>
      </div>

      <h2>Upcoming Dashboards</h2>
      <div className="placeholder-box">
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>
            <strong>Tobacco Policy Dashboard</strong>
            <span className="badge badge-soon">Coming Soon</span>
            <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)' }}>
              Interactive tracking and spatial analysis of specialty tobacco retail databases, product standards, and state-level policy environments.
            </p>
          </li>
        </ul>
      </div>

      <hr />

      <h2>Future Expansion</h2>
      <p>
        As the Social Impact Lab continues its empirical work in health economics, spatial econometrics, and public health policy, additional interactive trackers and visualization suites will be integrated into this hub. All source code and open-science replication pipelines remain publicly available via our{' '}
        <a href="https://github.com/Social-Impact-Lab-SIL" target="_blank" rel="noopener noreferrer">
          GitHub organization
        </a>.
      </p>

      <div className="contact-box">
        <h3 style={{ marginTop: 0 }}>Contact & Support</h3>
        <p style={{ marginBottom: 0 }}>
          Email: <a href="mailto:socialimpactlab@missouri.edu" target="_blank" rel="noopener noreferrer">socialimpactlab@missouri.edu</a>
        </p>
      </div>
    </div>
  );
}