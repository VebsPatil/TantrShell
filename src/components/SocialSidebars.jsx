import React from 'react';

export default function SocialSidebars() {
  return (
    <>
      <div className="social-left">
        <a
          href="https://www.linkedin.com/company/tantrshell/"
          className="social-link"
          aria-label="TantrShell on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <div className="social-line" />
      </div>
      <div className="social-right">
        <a
          href="https://www.instagram.com/tantrshell"
          className="social-link"
          aria-label="TantrShell on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>
        <div className="social-line" />
      </div>
    </>
  );
}
