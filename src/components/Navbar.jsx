import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#sil-nav-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div id="sil-nav-container" style={{ marginBottom: "24px", position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{
          backgroundColor: "var(--accent-bg, #f1f8ff)",
          color: "var(--accent, #0366d6)",
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: "600",
          border: "1px solid var(--border, #c8e1ff)",
          borderRadius: "6px",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        📁 SIL Navigation {isDropdownOpen ? "▴" : "▾"}
      </button>

      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "100%",
            backgroundColor: "var(--bg, #ffffff)",
            minWidth: "260px",
            boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
            border: "1px solid var(--border, #e1e4e8)",
            borderRadius: "6px",
            zIndex: 1000,
            marginTop: "4px",
            overflow: "hidden",
            textAlign: "left",
          }}
        >
          <Link
            to="/"
            onClick={() => setIsDropdownOpen(false)}
            style={{
              color: "var(--text-h, #24292e)",
              padding: "10px 16px",
              textDecoration: "none",
              display: "block",
              fontSize: "14px",
              borderBottom: "1px solid var(--border, #eaecef)",
            }}
          >
            🏠 SIL Homepage
          </Link>

          <Link
            to="/archive"
            onClick={() => setIsDropdownOpen(false)}
            style={{
              color: "var(--text-h, #24292e)",
              padding: "10px 16px",
              textDecoration: "none",
              display: "block",
              fontSize: "14px",
              borderBottom: "1px solid var(--border, #eaecef)",
            }}
          >
            📚 Publications Archive
          </Link>

          <Link
            to="/data"
            onClick={() => setIsDropdownOpen(false)}
            style={{
              color: "var(--text-h, #24292e)",
              padding: "10px 16px",
              textDecoration: "none",
              display: "block",
              fontSize: "14px",
              borderBottom: "1px solid var(--border, #eaecef)",
            }}
          >
            🏠 Data Repository
          </Link>

          <Link
            to="/dashboards"
            onClick={() => setIsDropdownOpen(false)}
            style={{
              color: "var(--text-h, #24292e)",
              padding: "10px 16px",
              textDecoration: "none",
              display: "block",
              fontSize: "14px",
              borderBottom: "1px solid var(--border, #eaecef)",
            }}
          >
            📊 Dashboard Home
          </Link>

          <a
            href="https://github.com/Social-Impact-Lab-SIL"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDropdownOpen(false)}
            style={{
              color: "var(--text-h, #24292e)",
              padding: "10px 16px",
              textDecoration: "none",
              display: "block",
              fontSize: "14px",
            }}
          >
            🌐 SIL GitHub
          </a>
        </div>
      )}
    </div>
  );
}