export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--neutral-900)',
        color: 'var(--neutral-300)',
        
      }}
    >

      {/* Divider */}
      <div
        style={{
          borderTop: '1px solid #444',
          paddingTop: '1rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.875rem', color: '#888' }}>
          © {new Date().getFullYear()} AtlasSpot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}