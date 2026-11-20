import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Social Impact Lab (SIL)</h1>
      <p>
        The Social Impact Lab is a dynamic, multidisciplinary research community dedicated to turning innovative ideas into rigorous research that improves population health and well-being. Our research frequently utilizes policy and population-level datasets, quasi-experimental study designs, and advanced statistical methods to produce causal insights that inform decision-making and policy development. Our efforts are guided by commitments to open dialogue, rigor, integrity, ingenuity, and knowledge-sharing. The lab includes a well-resourced research team housed at the University of Missouri, as well as a national affiliate program. The lab is funded by the University of Missouri.
      </p>

      <hr />

      <h2>Lab Portals & Repositories</h2>
      <div className="portals-box">
        <ul style={{ marginBottom: 0 }}>
          <li>
            <strong><Link to="/archive">SIL Publications Archive</Link></strong> — Replication materials for publications and submitted manuscripts.
          </li>
          <li style={{ marginTop: '8px' }}>
            <strong><Link to="/data">SIL Data Repository</Link></strong> — Data and codebooks associated with our empirical studies.
          </li>
          <li style={{ marginTop: '8px' }}>
            <strong><Link to="/dashboards">Lab Dashboard & Tools</Link></strong> — Interactive publication data visualization.
          </li>
        </ul>
      </div>

      <hr />

      <h2>Our Research Cores</h2>
      <p>
        The lab is structured into three core areas—Economics, Law & Policy, and Public Health—each of which supports independent research while contributing expertise across cores to foster collaboration, enhance research outputs, and broaden impact.
      </p>

      <h3>Economics</h3>
      <p>
        The Economics Core primarily uses observational data and natural experiments to identify causal parameters of relationships that can ultimately improve population health and wellbeing.
      </p>

      <h3>Public Health</h3>
      <p>
        The Public Health Core studies how policies, systems, and environments impact health and well-being by drawing upon diverse methodologies. The Core curates a wide array of datasets, synthesizes evidence for dissemination, and conducts research that enriches insights into complex issues.
      </p>

      <h3>Law & Policy</h3>
      <p>
        The Law & Policy Core studies how policies and laws impact health and well-being through legal mapping, policy surveillance, legal epidemiology, and other related methods.
      </p>

      <hr />

      <h2>People</h2>
      <div className="portals-box">
        <ul style={{ marginBottom: 0 }}>
          <li>
            <strong>
              <a href="https://economics.missouri.edu/social-impact-lab#:~:text=Our%20Leadership" target="_blank" rel="noopener noreferrer">
                SIL People
              </a>
            </strong>
          </li>
        </ul>
      </div>

      <hr />

      <h2>Our Approach</h2>

      <h3>Evidence Generation</h3>
      <p>
        At the core of our work is a commitment to rigorous, evidence-based research. Lab-supported research prioritizes quality over speed or volume. We strive to produce research on timely and under-explored topics, and encourage exploration of high-risk, high-reward questions that are often under-incentivized but hold the potential for transformative impact.
      </p>

      <h3>Facilitating Collaboration, Community, and Network</h3>
      <p>
        The Lab brings together a community of researchers from a variety of disciplines that are united by a shared interest in social and population impacts. A hallmark of the lab is a structured discussion series to sharpen early-stage research ideas. The lab fosters an atmosphere of respect and mutual support through a code of conduct that emphasizes research best practices and safeguarding research contributions. Each core—Economics, Law & Policy, and Public Health—offers core-specific programming to meet unique needs of different affiliates.
      </p>

      <h3>Sharing Research</h3>
      <p>
        We believe in the power of knowledge-sharing to catalyze change. Our Lab is committed to disseminating research findings, fostering dialogue, and engaging with diverse audiences, including policymakers, practitioners, and the public. By doing so, we aim to inform and inspire evidence-based decision-making and policy development. We make our research, databases and resources publicly accessible to demystify our research for the public and to empower the broader research community to build upon our work.
      </p>

      <hr />

      <h2>Licensing & Usage</h2>
      <p>
        Unless otherwise specified, code and data repositories within the Social Impact Lab organization are made available under open-source licenses (such as the MIT License). Please refer to individual repository documentation for specific citation requirements.
      </p>

      <div className="contact-box">
        <h3 style={{ marginTop: 0 }}>Contact</h3>
        <p style={{ marginBottom: 0 }}>
          Email: <a href="mailto:socialimpactlab@missouri.edu" target="_blank" rel="noopener noreferrer">socialimpactlab@missouri.edu</a>
        </p>
      </div>
    </div>
  );
}