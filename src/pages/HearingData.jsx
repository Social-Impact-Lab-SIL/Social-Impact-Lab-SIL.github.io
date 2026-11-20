import { Link } from 'react-router-dom';

export default function HearingData() {
  return (
    <div>
      <div>
        <Link to="/data" className="back-link">← Back to Main Repository Landing Page</Link>
      </div>

      <h1>Hearing Healthcare Policy Data</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        When using any of this project's data, please reference the correct peer-reviewed publication listed below. Please see the publication for methodological details. Where multiple versions of the data exist, we recommend using the most recent version for new projects.
      </p>

      <hr />

      <h2>1. Private Insurance Hearing Aid Mandates</h2>
      <p>Private insurance hearing aid mandates have been adopted by an increasing number of states and vary in age eligibility and generosity. This project describes the details of private insurance hearing aid mandates for each state over time.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/hear_priv_v1.xlsx" download>Download hear_priv_v1.xlsx</a></strong> <em>(Excel Workbook)</em>
      </div>
      
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Arnold, M. L., Heslin, B. J., Dowdy, M., Kershner, S. P., Phillips, S., Lipton, B., & Pesko, M. F. (2024). Longitudinal Policy Surveillance of Private Insurance Hearing Aid Mandates in the United States: 1997-2022. <i>American Journal of Public Health</i>, 114(4), 407–414. <a href="https://doi.org/10.2105/AJPH.2023.307551" target="_blank" rel="noopener noreferrer">https://doi.org/10.2105/AJPH.2023.307551</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/38478867/" target="_blank" rel="noopener noreferrer">PubMed</a>
      </blockquote>

      <p><strong>Data Description:</strong> The downloadable Excel file contains:</p>
      <ul>
        <li>“Private Insurance Hearing Aid Coverage Mandates Effective Dates and Details, as of January 1, 2023: United States”</li>
        <li>“Status of Private Insurance Hearing Aid Coverage Mandates, by State and Month”</li>
      </ul>

      <hr />

      <h2>2. Key Policy Features of State Medicaid Hearing Aid Coverage for Adults, 2023</h2>
      <p>This dataset tracks cross-sectional parameters of state Medicaid hearing aid coverage provisions for adults.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/hear_mcaidcross_v1.1.xlsx" download>Download hear_mcaidcross_v1.1.xlsx</a></strong> <em>(Excel Workbook)</em>
      </div>

      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Arnold, M. L., Tonti, L., Phillips, S., Kershner, S. P., Lipton, B. J., Heslin, B., Ukert, B. D., & Pesko, M. F. (2025). Number Of States Providing Medicaid Hearing Aid Coverage For Adults Increased; Variability Was Substantive, 2017-23. <i>Health Affairs</i>, 44(12), 1522–1529. <a href="https://doi.org/10.1377/hlthaff.2025.00270" target="_blank" rel="noopener noreferrer">https://doi.org/10.1377/hlthaff.2025.00270</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/41329893/" target="_blank" rel="noopener noreferrer">PubMed</a>
      </blockquote>

      <p><strong>Data Description:</strong> The downloadable Excel file contains: “Key Policy Features of State Medicaid Hearing Aid Coverage for Adults, 2023”</p>

      <hr />

      <h2>3. Longitudinal Trends in Medicaid Hearing Aid Coverage for Adults in the United States: 2003-2023</h2>
      <p>This longitudinal dataset provides monthly tracking of state Medicaid hearing aid coverage determinations.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/hear_mcaidlong_V1.xlsx" download>Download hear_mcaidlong_V1.xlsx</a></strong> <em>(Excel Workbook)</em>
      </div>

      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Arnold, M., Tonti, L., Phillips, S., Kershner, S., Lipton, B., Heslin, B., Ukert, B., Hebert, R., & Pesko, M. F. (2026). Longitudinal Trends in Medicaid Hearing Aid Coverage for Adults in the United States: 2003-2023. <i>American Journal of Audiology</i>. <a href="https://doi.org/10.1044/2026_AJA-25-00204" target="_blank" rel="noopener noreferrer">https://doi.org/10.1044/2026_AJA-25-00204</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/42172530/" target="_blank" rel="noopener noreferrer">PubMed</a>
      </blockquote>

      <p><strong>Data Description:</strong> This Excel workbook contains the following sheets:</p>
      <ul>
        <li>Data View: Status of Medicaid Hearing Aid Coverage, by State and Month</li>
        <li>State View: Coverage Determination from 01/2003 to 12/2023</li>
      </ul>

      <hr />

      <h2>4. Hearing Health Care Professional Workforce</h2>
      <p>This dataset provides state-level counts and supply-demand metrics mapping the hearing healthcare professional workforce.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/hear_prof_V1.xlsx" download>Download hear_prof_V1.xlsx</a></strong> <em>(Excel Workbook)</em>
      </div>

      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Garuccio, J., Ukert, B., Arnold, M., Phillips, S., & Pesko, M. F. (2025). Using supply and demand to identify shortages in the hearing health care professional workforce. <i>JAMA Otolaryngology–Head & Neck Surgery</i>. Published online July 31, 2025. <a href="https://doi.org/10.1001/jamaoto.2025.2112" target="_blank" rel="noopener noreferrer">https://doi.org/10.1001/jamaoto.2025.2112</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/40742737/" target="_blank" rel="noopener noreferrer">PubMed</a>
      </blockquote>

      <p><strong>Data Description:</strong> This Excel workbook contains the following sheets:</p>
      <ul>
        <li>State-level Counts of Audiologists</li>
        <li>State Count of Hearing Instrument Specialists</li>
        <li>State Count of Audiologists and Hearing Instrument Specialists</li>
      </ul>

      <hr />

      <h2>Overall Project Citation</h2>
      <p className="citation-note" style={{ fontWeight: 600 }}>When utilizing data from this repository, users must cite the overarching openICPSR project record as the data distributor:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Pesko, Michael. (2026). <i>Hearing Healthcare Policy Data, by state and time</i> [Data repository]. Inter-university Consortium for Political and Social Research [distributor]. <a href="https://doi.org/10.3886/E244765V3" target="_blank" rel="noopener noreferrer">https://doi.org/10.3886/E244765V3</a>
      </blockquote>
    </div>
  );
}