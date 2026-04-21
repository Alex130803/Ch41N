function ProfileScreen({ onNav }) {
  const VX = window.VX;
  const rows = [
    { label: 'Account settings', icon: '⚙' },
    { label: 'Connected wallets', icon: '◆' },
    { label: 'Security & 2FA', icon: '🔒' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Help & support', icon: '?' },
    { label: 'Log out', icon: '↗', danger: true },
  ];

  return (
    <VXScreen>
      <div className="page-head">
        <div className="page-title">Profile</div>
      </div>
      <div style={{ padding: '12px 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18, background: VX.card, borderRadius: 18, border: `1px solid ${VX.stroke}`, marginBottom: 14 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: VX.gradAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 22, color: '#fff', flexShrink: 0 }}>AC</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Alex Cipher</div>
            <div style={{ fontSize: 12, color: VX.muted, overflow: 'hidden', textOverflow: 'ellipsis' }}>+1 (415) 555 0182</div>
            <div style={{ display: 'inline-block', marginTop: 6, padding: '2px 8px', borderRadius: 99, background: VX.gradPurple, fontSize: 10, fontWeight: 800, letterSpacing: 0.5 }}>VIP2 · ELITE</div>
          </div>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
            background: VX.card, border: `1px solid ${VX.stroke}`,
            borderRadius: 12, marginBottom: 8, cursor: 'pointer',
            color: r.danger ? VX.red : VX.text,
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(124,58,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: r.danger ? VX.red : VX.primaryHi, fontSize: 14, fontWeight: 700 }}>{r.icon}</div>
            <div style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>{r.label}</div>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M2 2l5 5-5 5" stroke={VX.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        ))}
      </div>
    </VXScreen>
  );
}

window.ProfileScreen = ProfileScreen;
