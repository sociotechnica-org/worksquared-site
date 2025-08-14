import React from 'react';

export default function Button({ children, href, className = '' }) {
  return (
    <a
      href={href}
      className={`button ${className}`}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export function ButtonGroup({ children }) {
  return (
    <div className="button-group">
      {children}
      <style jsx>{`
        .button-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
