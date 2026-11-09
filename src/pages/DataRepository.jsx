import { Link } from 'react-router-dom';

export default function DataRepository() {
  return (
    <div>
      <h1>Social Impact Lab Data Repository</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Welcome to the open data portal for the <strong>Social Impact Lab</strong>. This repository hosts public research data, codebooks, and replication files associated with our empirical studies.
      </p>

      <h2>Usage & Terms</h2>
      <p>
        Datasets and documentation in this repository are made available under our open-source license.
      </p>
      <ul>
        <li>
          <strong>Citation:</strong> If you use data from this repository in your research, please cite the corresponding paper as noted on each dataset's respective documentation page. The article citation is provided in an example format and may be rendered in the style required by the publication or other venue. Users must also cite the versioned OpenICPSR repository record as the source of the data.
        </li>
        <li>
          <strong>Contact:</strong> For questions regarding data structures or replication codes, please reach out via the primary study contacts.
        </li>
      </ul>

      <h2>Available Datasets</h2>

      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <h3 style={{ marginTop: 0 }}>
          <Link to="/data/tobacco">Population Exposure to Standardized Tobacco Policies</Link>
        </h3>
        <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)' }}>
          E-cigarette taxes, indoor air laws, flavored tobacco sales restrictions, cigar taxes, by state/county and time.
        </p>
      </div>

      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <h3 style={{ marginTop: 0 }}>
          <Link to="/data/hearing">Hearing Healthcare Policy</Link>
        </h3>
        <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)' }}>
          Hearing healthcare policy data, by state and time.
        </p>
      </div>

      <div className="footer" style={{ marginTop: '40px', borderTop: '1px solid var(--border)', paddingTop: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
        Maintained by the <a href="https://github.com/Social-Impact-Lab-SIL" target="_blank" rel="noopener noreferrer">Social Impact Lab</a>.
      </div>
    </div>
  );
}