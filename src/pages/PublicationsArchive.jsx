import { useState } from 'react';
import { publications } from '../data/publicationsData';

export default function PublicationsArchive() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (index) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredPubs = publications.filter(pub => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || pub.status.toLowerCase().includes(statusFilter.toLowerCase());

    return matchesSearch && matchesStatus;
  });

  const sortedPubs = [...filteredPubs].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date || 0) - new Date(a.date || 0);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'author') {
      const getFirstAuthorLastName = (authorStr) => {
        const firstAuthor = authorStr.split(',')[0].trim();
        const parts = firstAuthor.split(' ');
        return parts[parts.length - 1];
      };
      return getFirstAuthorLastName(a.authors).localeCompare(getFirstAuthorLastName(b.authors));
    }
    return 0;
  });

  const buttonBaseStyle = {
    padding: '8px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    textDecoration: 'none',
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
    display: 'block'
  };

  const primaryStyle = {
    ...buttonBaseStyle,
    background: 'var(--accent)',
    color: '#fff'
  };

  const secondaryStyle = {
    ...buttonBaseStyle,
    background: 'var(--code-bg)',
    color: 'var(--text-main)',
    border: '1px solid var(--border)'
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
        <h1>SIL Publications Archive</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '16px' }}>
          Explore code repositories, data documentation, working papers, and interactive dashboards for completed and ongoing research by the Social Impact Lab.
        </p>
      </div>

      {/* Search, Filter, and Sort Controls */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: '1',
            minWidth: '240px',
            padding: '12px 16px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            background: '#ffffff',
            color: 'var(--text-main)',
            fontSize: '15px',
            outline: 'none'
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: '12px 16px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            background: '#ffffff',
            color: 'var(--text-main)',
            fontSize: '15px',
            outline: 'none'
          }}
        >
          <option value="All">All Statuses</option>
          <option value="Published">Published</option>
          <option value="Working">Working</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '12px 16px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            background: '#ffffff',
            color: 'var(--text-main)',
            fontSize: '15px',
            outline: 'none'
          }}
        >
          <option value="default">Sort by:</option>
          <option value="date">Sort by: Date</option>
          <option value="title">Sort by: Title</option>
          <option value="author">Sort by: First Author</option>
        </select>
      </div>

      {/* Publications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {sortedPubs.length > 0 ? (
          sortedPubs.map((pub, index) => {
            const isPublishedOrAccepted = pub.status.toLowerCase().includes('published') || pub.status.toLowerCase().includes('accepted');

            return (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  padding: '24px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <h2 style={{ fontSize: '1.25em', marginTop: 0, borderBottom: 'none', paddingBottom: 0 }}>
                  {pub.title}
                </h2>

                <p style={{ fontSize: '15px', marginBottom: '8px', color: 'var(--text-main)' }}>
                  <strong>Authors:</strong> {pub.authors}
                </p>

                {/* Status & Date Line */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <p style={{ fontSize: '14px', margin: 0 }}>
                    <strong>Status:</strong>{' '}
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      background: 'var(--accent-bg)',
                      color: 'var(--accent)',
                      borderRadius: '4px',
                      border: '1px solid var(--accent-border)',
                      fontSize: '13px',
                      fontWeight: '500',
                      marginLeft: '4px'
                    }}>
                      {pub.status}
                    </span>
                  </p>
                  {pub.date && pub.status !== 'Working' && (
                    <p style={{ fontSize: '14px', margin: 0, color: 'var(--text-muted)' }}>
                      <strong>Date:</strong> {pub.date}
                    </p>
                  )}
                </div>

                {/* Abstract Toggle */}
                {isPublishedOrAccepted && (
                  <div style={{ marginBottom: '12px' }}>
                    <button
                      onClick={() => toggleAbstract(index)}
                      style={{
                        background: expandedAbstracts[index] ? 'var(--accent-bg)' : 'var(--code-bg)',
                        color: expandedAbstracts[index] ? 'var(--accent)' : 'var(--text-main)',
                        border: `1px solid ${expandedAbstracts[index] ? 'var(--accent-border)' : 'var(--border)'}`,
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>📄</span>
                      <span>{expandedAbstracts[index] ? 'Hide Abstract' : 'Abstract'}</span>
                      <span style={{ fontSize: '11px', marginLeft: '2px' }}>{expandedAbstracts[index] ? '▴' : '▾'}</span>
                    </button>
                  </div>
                )}

                {isPublishedOrAccepted && expandedAbstracts[index] && (
                  <p style={{ fontSize: '15px', marginBottom: '16px', marginTop: '12px', background: 'var(--code-bg)', padding: '12px', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>
                    {pub.abstract}
                  </p>
                )}

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '16px',
                  marginTop: '16px'
                }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Contact: <a href={`mailto:${pub.contact}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{pub.contact}</a>
                  </span>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(130px, 160px))',
                    gap: '10px',
                    alignItems: 'start'
                  }}>
                    {pub.pubLink ? (
                      <a href={pub.pubLink} target="_blank" rel="noopener noreferrer" style={primaryStyle}>
                        DOI Link
                      </a>
                    ) : (
                      <div aria-hidden="true" style={{ ...buttonBaseStyle, visibility: 'hidden', pointerEvents: 'none' }}>DOI Link</div>
                    )}

                    {pub.pubMedLink ? (
                      <a href={pub.pubMedLink} target="_blank" rel="noopener noreferrer" style={primaryStyle}>
                        PubMed
                      </a>
                    ) : (
                      <div aria-hidden="true" style={{ ...buttonBaseStyle, visibility: 'hidden', pointerEvents: 'none' }}>PubMed</div>
                    )}

                    {pub.repoLink ? (
                      <a href={pub.repoLink} target="_blank" rel="noopener noreferrer" style={secondaryStyle}>
                        GitHub Repo
                      </a>
                    ) : (
                      <div aria-hidden="type" style={{ ...buttonBaseStyle, visibility: 'hidden', pointerEvents: 'none' }}>GitHub Repo</div>
                    )}

                    {pub.dataRepoLink ? (
                      <a href={pub.dataRepoLink} target="_blank" rel="noopener noreferrer" style={secondaryStyle}>
                        Data Repo
                      </a>
                    ) : (
                      <div aria-hidden="true" style={{ ...buttonBaseStyle, visibility: 'hidden', pointerEvents: 'none' }}>Data Repo</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <p style={{ color: 'var(--text-muted)' }}>No matching publications found.</p>
          </div>
        )}
      </div>
    </div>
  );
}