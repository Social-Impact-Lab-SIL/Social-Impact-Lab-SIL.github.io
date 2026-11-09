import { Link } from 'react-router-dom';

export default function TobaccoData() {
  return (
    <div>
      <div>
        <Link to="/data" className="back-link">← Back to Main Repository Landing Page</Link>
      </div>

      <h1>Population Exposure to Standardized Tobacco Policies</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        This repository hosts standardized datasets detailing population exposure to various tobacco control policies across the United States by state, county, and time. Please see the publications below for additional details on how the measures are constructed. Where multiple versions of the data exist, we recommend using the most recent version for new projects.
      </p>

      <hr />

      <h2>1. E-Cigarette Taxes</h2>
      <p>E-cigarette tax schemes vary significantly across states and localities, making cross-sectional and longitudinal comparisons challenging. This project provides standardized e-cigarette tax rates at the state and local levels in the United States.</p>
      
      <h3>Version 2 (2010–2023)</h3>
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/E-cig%20Tax%20Version%202,%202010-2023.xlsx" download>Download E-Cigarette Tax Data Version 2 (2010-2023)</a></strong> <em>(Excel Workbook)</em>
      </div>
      <p><strong>Data Description:</strong></p>
      <ul>
        <li>Includes Closed System E-cigarette Taxes by State/County from 2010 to 2023, utilizing a 35% retailer markup and time-invariant tax units.</li>
        <li>Includes Open System E-cigarette Taxes by State/County from 2010 to 2023, utilizing a 35% retailer markup and time-invariant tax units.</li>
      </ul>
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication Citation:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Cotti, Chad, Erik Nesson, Michael F. Pesko, and Serena Phillips. "Standardising the measurement of e-cigarette taxes in the USA (2nd edition), 2010–2023." <i>Tobacco Control</i> 35 (2026): 173-178. <a href="https://pubmed.ncbi.nlm.nih.gov/39580153/" target="_blank" rel="noopener noreferrer">PubMed Link</a>
      </blockquote>

      <h3>Version 1 (2010–2020)</h3>
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/E-cig%20Tax%20Version%201,%202010-2020.xlsx" download>Download E-Cigarette Tax Data Version 1 (2010-2020)</a></strong> <em>(Excel Workbook)</em>
      </div>
      <p><strong>Data Description:</strong></p>
      <ul>
        <li>Includes E-cigarette Taxes by State/County from 2010 to 2020 using a 35% retailer markup and time-invariant tax units.</li>
        <li>Includes E-cigarette Taxes by State/County from 2010 to 2020 using a 20% retailer markup and time-invariant tax units.</li>
        <li>Includes E-cigarette Taxes by State/County from 2010 to 2020 using a 35% retailer markup and time-varying tax units.</li>
      </ul>
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication Citation:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Cotti, Chad, Erik Nesson, Michael F. Pesko, Serena Phillips, and Nathan Tefft. "Standardising the measurement of e-cigarette taxes in the USA, 2010–2020." <i>Tobacco Control</i> 32, no. e2 (2023): e251-e254. <a href="https://pubmed.ncbi.nlm.nih.gov/34911814/" target="_blank" rel="noopener noreferrer">PubMed Link</a>
      </blockquote>

      <hr />

      <h2>2. Cigar Taxes</h2>
      <p>This project provides standardized cigar tax rates at the state and local levels in the United States, addressing cross-jurisdictional variations in tax structures.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/Standardized%20Cigar%20Taxes,%20Version%201,%202010-2024.xlsx" download>Download Standardized Cigar Taxes Version 1 (2010-2024)</a></strong> <em>(Excel Workbook)</em>
      </div>
      <p><strong>Data Description:</strong></p>
      <ul>
        <li>Provides standardized longitudinal cigar tax rates across US states and local jurisdictions from 2010 to 2024.</li>
        <li>Standardizes complex ad valorem and specific tax structures into comparable metrics for empirical research.</li>
      </ul>
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication Citation:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Scoblic, Guthrie, Rachel Y. L. Fung, Abigail S. Friedman, and Michael F. Pesko. "Standardising the measurement of cigar tax rates in the USA, 2010–2024." <i>Tobacco Control</i> (2026): tc-2026-060077. <a href="https://pubmed.ncbi.nlm.nih.gov/42425894/" target="_blank" rel="noopener noreferrer">PubMed Link</a>
      </blockquote>

      <hr />

      <h2>3. Flavored Tobacco Product Sales Restrictions</h2>
      <p>This longitudinal dataset describes state and national population coverage and comprehensiveness of flavored tobacco sales from 2010 to 2023 for e-cigarettes, cigarettes, cigars, and smokeless tobacco.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/Flavored%20Tobacco%20Product%20Sales%20Restrictions,%20Version%201,%202010-2023.xlsx" download>Download Flavored Tobacco Product Sales Restrictions Version 1 (2010-2023)</a></strong> <em>(Excel Workbook)</em>
      </div>
      <p><strong>Data Description:</strong></p>
      <ul>
        <li>Covers restrictions from 2010 to 2023 across multiple product categories (e-cigarettes, cigarettes, cigars, and smokeless tobacco).</li>
        <li>Accounts for varying product, flavor, and retailer exemptions when calculating policy comprehensiveness.</li>
      </ul>
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication Citation:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Donovan, Emily M., Karl Braganza, Megan C. Diaz, Andrew B. Seidenberg, Jennifer Kreslake, and Michael F. Pesko. "Population coverage and comprehensiveness of flavoured tobacco sales restrictions in the USA, 2010–2023." <i>Tobacco Control</i> (2025): tc-2025-059293. doi: <a href="https://doi.org/10.1136/tc-2025-059293" target="_blank" rel="noopener noreferrer">10.1136/tc-2025-059293</a>. <a href="https://pubmed.ncbi.nlm.nih.gov/41115799/" target="_blank" rel="noopener noreferrer">PubMed Link</a>
      </blockquote>

      <hr />
      
      <h2>4. Vaping and Smoking Indoor Air Laws</h2>
      <p>This database reports US national- and state-level estimates of population coverage of comprehensive and partial indoor smoking restrictions from 1990 to 2021 for bars, restaurants, and workplaces, and comprehensive indoor vaping restrictions from 2006 to 2021 for the same locations. Estimates were calculated using policy data from the American Nonsmokers' Rights Foundation.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/Vaping%20and%20Smoking%20Indoor%20Air%20Laws%20Version%201,%202010-2021.xlsx" download>Download Vaping and Smoking Indoor Air Laws Version 1 (2010-2021)</a></strong> <em>(Excel Workbook)</em>
      </div>
      <p><strong>Data Description:</strong></p>
      <ul>
        <li>Includes national- and state-level estimates of population coverage for comprehensive and partial indoor smoking restrictions (1990–2021) across bars, restaurants, and workplaces.</li>
        <li>Includes comprehensive indoor vaping restriction coverage (2006–2021) for bars, restaurants, and workplaces.</li>
        <li>Available in Excel format with a separate tab for each state.</li>
      </ul>
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication Citation:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Seidenberg, Andrew B., Karl Braganza, Maxwell Chomas, Megan C. Diaz, Abigail S. Friedman, Serena Phillips, and Michael F. Pesko. "Coverage of Indoor Smoking and Vaping Restrictions in the US, 1990-2021." <i>American Journal of Preventive Medicine</i> 67, no. 4 (2024): 494-502. <a href="https://pubmed.ncbi.nlm.nih.gov/38876294/" target="_blank" rel="noopener noreferrer">PubMed Link</a>
      </blockquote>

      <hr />

      <h2>5. Specialty Tobacco Retail Locations and Visitor Counts</h2>
      <p>This dataset maps specialty tobacco retail locations and consumer foot traffic patterns across the United States. Match rates and visitor counts are restricted to only the top decile by population.</p>
      
      <div className="dashboard-box" style={{ background: 'var(--code-bg)' }}>
        <strong><a href="/data/StateCountyData2024.xlsx" download>Download StateCountyData2024.xlsx</a></strong> <em>(Excel Workbook)</em>
      </div>
      <p><strong>Data Description:</strong></p>
      <ul>
        <li>Contains state-level and county-level cross sections (May 2024) including Google store counts independently queried using a third-party program.</li>
        <li>Includes match rates between Google and Advan stores.</li>
        <li>Includes visit counts from Advan Research foot traffic / monthly patterns data (Advan Research, 2022; Dewey Data).</li>
      </ul>
      <p className="citation-note" style={{ fontWeight: 600, marginTop: '16px' }}>Associated Publication Citation:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Landini, A., Lowenstein, C., &amp; Pesko, M. F. Patterns of specialty tobacco retail locations and visitor counts in the USA. <i>Tobacco Control.</i> Published Online First: 04 August 2026. doi: <a href="https://doi.org/10.1136/tc-2026-060085" target="_blank" rel="noopener noreferrer">10.1136/tc-2026-060085</a>. <a href="https://pubmed.ncbi.nlm.nih.gov/42425894/" target="_blank" rel="noopener noreferrer">PubMed Link</a>
      </blockquote>

      <hr />

      <h2>Overall Project Citation</h2>
      <p className="citation-note" style={{ fontWeight: 600 }}>When utilizing data from this repository, users must cite the overarching openICPSR project record as the data distributor:</p>
      <blockquote style={{ background: 'var(--code-bg)', borderLeft: '4px solid var(--border)', margin: '0 0 15px 0', padding: '12px 16px', color: 'var(--text-muted)', borderRadius: '0 4px 4px 0' }}>
        Pesko, Michael. (2026). <i>Population Exposure to Standardized Tobacco Policies (e-cigarette taxes, indoor air laws, flavored tobacco sales restrictions, cigar taxes, specialty tobacco retail) in the USA, by state/county and time</i> [Data repository]. Inter-university Consortium for Political and Social Research [distributor]. <a href="https://doi.org/10.3886/E204041V8" target="_blank" rel="noopener noreferrer">https://doi.org/10.3886/E204041V8</a>
      </blockquote>
    </div>
  );
}