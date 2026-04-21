function VIPScreen({ onNav }) {
  const VX = window.VX;
  const [selected, setSelected] = React.useState(2);
  const pkgs = [
    { lvl: 'VIP1', price: '$150', daily: '$4', monthly: '$120', tasks: 8, reward: '$0.50', ref: '$5' },
    { lvl: 'VIP2', price: '$400', daily: '$12', monthly: '$360', tasks: 14, reward: '$0.85', ref: '$15' },
    { lvl: 'VIP3', price: '$1,300', daily: '$44', monthly: '$1,320', tasks: 22, reward: '$2.00', ref: '$50' },
    { lvl: 'VIP4', price: '$4,000', daily: '$150', monthly: '$4,500', tasks: 30, reward: '$5.00', ref: '$180' },
    { lvl: 'VIP5', price: '$12,000', daily: '$520', monthly: '$15,600', tasks: 40, reward: '$13.00', ref: '$600' },
  ];
  const current = 1;

  return (
    <VXScreen>
      <div style={{ padding: '4px 20px 14px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => onNav('dashboard')} style={{
          background: VX.card, border: `1px solid ${VX.stroke}`, width: 40, height: 40,
          borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: VX.text,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4 }}>VIP Packages</div>
          <div style={{ fontSize: 12, color: VX.muted, marginTop: 1 }}>Upgrade to earn more daily</div>
        </div>
      </div>

      <div style={{ margin: '10px 20px 18px', borderRadius: 18, padding: 18, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #1d0f52 0%, #2a1568 100%)',
        border: `1.5px solid ${VX.primary}`,
        boxShadow: `0 0 32px -8px ${VX.primary}`,
      }}>
        <div style={{ position: 'absolute', top: 14, right: 14, padding: '3px 9px', background: VX.green, borderRadius: 99, fontSize: 10, fontWeight: 800, letterSpacing: 0.5 }}>ACTIVE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, color: VX.primaryHi, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>
          CURRENT PLAN
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: -0.8 }}>VIP2</div>
          <div style={{ fontSize: 15, color: VX.muted, fontWeight: 600 }}>Elite</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: VX.muted, marginBottom: 2 }}>Daily earnings</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: VX.green }}>$12.00</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: VX.muted, marginBottom: 2 }}>Tasks / day</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>14</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {pkgs.map((p, i) => {
          const isCurrent = i === current;
          const isLower = i < current;
          const isSelected = selected === i;
          return (
            <div key={i} onClick={() => !isLower && !isCurrent && setSelected(i)} style={{
              position: 'relative', borderRadius: 18, padding: 16,
              background: isCurrent
                ? 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(124,58,237,0.04))'
                : isSelected
                  ? 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(124,58,237,0.06))'
                  : VX.card,
              border: `1.5px solid ${isCurrent ? VX.primary : isSelected ? VX.cyan : VX.stroke}`,
              boxShadow: isCurrent ? `0 0 24px -6px ${VX.primary}` : isSelected ? `0 0 24px -6px ${VX.cyan}` : 'none',
              cursor: (isLower || isCurrent) ? 'default' : 'pointer',
              opacity: isLower ? 0.45 : 1,
              transition: 'all .15s',
            }}>
              {isCurrent && (
                <div style={{ position: 'absolute', top: -1, right: -1, padding: '4px 10px',
                  background: VX.green, borderRadius: '0 18px 0 12px', fontSize: 10,
                  fontWeight: 800, letterSpacing: 0.5,
                }}>ACTIVE</div>
              )}

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '3px 9px', borderRadius: 99, background: VX.gradPurple, fontWeight: 800, fontSize: 11, letterSpacing: 0.5, marginBottom: 8 }}>{p.lvl}</div>
                  <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: -0.6, lineHeight: 1 }}>{p.price}</div>
                  <div style={{ fontSize: 11, color: VX.muted, marginTop: 3 }}>one-time USDT</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: VX.muted }}>Daily</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: VX.green }}>{p.daily}</div>
                  <div style={{ fontSize: 10, color: VX.muted, marginTop: 1 }}>~{p.monthly}/mo</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14, paddingTop: 14, borderTop: `1px solid ${VX.stroke}` }}>
                <div>
                  <div style={{ fontSize: 10, color: VX.muted, marginBottom: 2, letterSpacing: 0.3 }}>TASKS/DAY</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{p.tasks}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: VX.muted, marginBottom: 2, letterSpacing: 0.3 }}>PER TASK</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{p.reward}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: VX.muted, marginBottom: 2, letterSpacing: 0.3 }}>REF BONUS</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: VX.gold }}>{p.ref}</div>
                </div>
              </div>

              {isCurrent ? (
                <div style={{ padding: '12px', borderRadius: 8, background: 'rgba(16,185,129,0.12)', textAlign: 'center', color: VX.green, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Current Plan
                </div>
              ) : isLower ? (
                <div style={{ padding: '12px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', textAlign: 'center', color: VX.dim, fontWeight: 600, fontSize: 13 }}>Lower Tier</div>
              ) : (
                <button style={{
                  width: '100%', padding: '12px', borderRadius: 8, border: 'none',
                  background: isSelected ? VX.gradAccent : VX.gradPurple,
                  color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer',
                }}>Upgrade to {p.lvl}</button>
              )}
            </div>
          );
        })}
      </div>
    </VXScreen>
  );
}

window.VIPScreen = VIPScreen;
