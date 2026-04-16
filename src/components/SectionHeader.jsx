import React from 'react';

export function SectionHeader({ tag, title, accentWord, desc }) {
  return (
    <div className="section-header visible">
      <span className="section-tag mono">{tag}</span>
      <h2 className="section-title">{title} <span className="accent">{accentWord}</span></h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}
