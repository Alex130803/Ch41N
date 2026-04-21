function DashboardScreen({ onNav }) {
  const VX = window.VX;

  const stats = [
    { label: 'Total Earned', value: '$284.50', color: VX.green, accent: VX.green, icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M4 11c0 1.5 1.5 3 4 3s4-1.3 4-3-2-2.5-4-3-4-1.3-4-3 1.5-3 4-3 4 1.5 4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg> },
    { label: 'Tasks Done', value: '1,284', color: VX.cyan, accent: VX.cyan, icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { label: 'Referrals', value: '47', color: VX.gold, accent: VX.gold, icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 7.5L10 10" stroke="currentColor" strokeWidth="1.5"/></svg> },
    { label: 'Available', value: '$142.08', color: VX.primaryHi, accent: VX.primary, icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 9h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  ];

  const tasks = [
    { p: 'ig', user: '@luna_drip', action: 'Like & follow', reward: '+$0.45' },
    { p: 'tt', user: '@rexsounds', action: 'Watch 30s', reward: '+$0.30' },
    { p: 'yt', user: 'Cipher Logs', action: 'Subscribe', reward: '+$0.80' },
  ];

  const weekly = [0.4, 0.7, 0.55, 0.9, 0.6, 1.0, 0.75];
  const weekTotal = '$42.80';

  return (
    <VXScreen>
      <div style={{ padding: '4px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
            background: VX.gradAccent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 17, color: '#fff',
            border: `2px solid ${VX.bg}`, boxShadow: `0 0 0 1.5px ${VX.primary}`,
          }}>AC</div>
          <div>
            <div style={{ fontSize: 12, color: VX.muted, fontWeight: 500 }}>Welcome back,</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Hey, Alex 👋</div>
          </div>
        </div>
        <button style={{
          width: 44, height: 44, borderRadius: 12, background: VX.card,
          border: `1px solid ${VX.stroke}`, color: VX.text, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 15V9a6 6 0 1112 0v6l2 2H2l2-2zM8 18a2 2 0 004 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div style={{ position: 'absolute', top: 10, right: 11, width: 8, height: 8, borderRadius: '50%', background: VX.primaryHi, boxShadow: `0 0 0 2px ${VX.card}` }} />
        </button>
      </div>

      <div style={{ margin: '4px 20px 20px', borderRadius: 20, padding: 20, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #2a1558 0%, #1a0d3f 50%, #0f1a4a 100%)',
        border: '1px solid rgba(124,58,237,0.3)',
      }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)', filter: 'blur(10px)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: VX.gradPurple, padding: '4px 10px', borderRadius: 99,
              fontWeight: 700, fontSize: 12, letterSpacing: 0.5,
            }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="#fff"><path d="M5.5 0l7 4v3l-7 4l-7-4v-3l7-4z"/></svg>
              VIP2 · ELITE
            </div>
            <div style={{ fontSize: 11, color: VX.muted }}>Resets in <span style={{ color: VX.text, fontWeight: 600 }}>06:42:18</span></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 12, color: VX.muted, marginBottom: 4 }}>Today's progress</div>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
                12<span style={{ color: VX.muted }}>/18</span> <span style={{ fontSize: 14, color: VX.muted, fontWeight: 500 }}>tasks</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: VX.muted }}>Earned today</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: VX.green }}>+$8.40</div>
            </div>
          </div>
          <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div style={{ width: '66%', height: '100%', background: VX.gradAccent, borderRadius: 3, boxShadow: `0 0 12px ${VX.primaryHi}` }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 22 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: VX.card, borderRadius: 16, padding: 14, border: `1px solid ${VX.stroke}`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 12, right: 12, height: 2, background: s.accent, opacity: 0.7, borderRadius: 2 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: s.color, marginBottom: 6 }}>
              {s.icon}
              <span style={{ fontSize: 11, color: VX.muted, fontWeight: 500, letterSpacing: 0.3 }}>{s.label}</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, color: VX.text }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontSize: 17, fontWeight: 700 }}>Today's Tasks</div>
          <a onClick={() => onNav('tasks')} style={{ color: VX.primaryHi, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>See all →</a>
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
          {tasks.map((t, i) => (
            <div key={i} style={{ flexShrink: 0, width: 180, padding: 14, borderRadius: 16, background: VX.card, border: `1px solid ${VX.stroke}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <VXPlatformIcon platform={t.p} size={36} />
                <div style={{ color: VX.green, fontWeight: 800, fontSize: 14 }}>{t.reward}</div>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{t.user}</div>
              <div style={{ fontSize: 11, color: VX.muted, marginBottom: 12 }}>{t.action}</div>
              <button onClick={() => onNav('tasks')} style={{
                width: '100%', padding: '8px', borderRadius: 8, background: VX.gradPurple,
                border: 'none', color: '#fff', fontWeight: 700, fontSize: 12, cursor: 'pointer', letterSpacing: 0.3,
              }}>Start →</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: '0 20px 22px', padding: 18, background: VX.card, borderRadius: 18, border: `1px solid ${VX.stroke}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Your Referral Link</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(245,158,11,0.12)', padding: '3px 9px', borderRadius: 99, color: VX.gold, fontSize: 11, fontWeight: 700 }}>
            <span>+10%</span>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px',
          background: VX.bg, borderRadius: 10, border: `1px solid ${VX.stroke}`, marginBottom: 14,
        }}>
          <code style={{ flex: 1, fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 12, color: VX.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            chain.app/ref/ALEX-7K4Q
          </code>
          <button style={{ background: VX.gradPurple, border: 'none', padding: '6px 12px', borderRadius: 7, color: '#fff', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>Copy</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
          {[
            { l: 'Total Refs', v: '47', c: VX.text },
            { l: 'L1 Earned', v: '$84.20', c: VX.cyan },
            { l: 'L2 Earned', v: '$22.60', c: VX.primaryHi },
          ].map((x, i) => (
            <div key={i} style={{ padding: '10px 8px', background: VX.bg, borderRadius: 10, textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: x.c }}>{x.v}</div>
              <div style={{ fontSize: 10, color: VX.muted, marginTop: 2 }}>{x.l}</div>
            </div>
          ))}
        </div>
        <VXButton variant="purple" style={{ padding: '12px', fontSize: 13 }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="3.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="11.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="11.5" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 6.5l5-2.5M5 8.5l5 2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
          Share Link
        </VXButton>
      </div>

      <div style={{ margin: '0 20px 20px', padding: 18, background: VX.card, borderRadius: 18, border: `1px solid ${VX.stroke}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, color: VX.muted, fontWeight: 500, letterSpacing: 0.3 }}>WEEKLY EARNINGS</div>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.4, marginTop: 2 }}>{weekTotal}</div>
          </div>
          <div style={{ padding: '4px 10px', background: 'rgba(16,185,129,0.12)', borderRadius: 99, color: VX.green, fontSize: 12, fontWeight: 700 }}>↑ 18.4%</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 70 }}>
          {weekly.map((v, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: '100%', height: `${v * 100}%`, borderRadius: 4, background: i === 5 ? VX.gradAccent : VX.gradPurple, opacity: i === 5 ? 1 : 0.55 }} />
              <div style={{ fontSize: 10, color: VX.muted, fontWeight: 600 }}>{['M','T','W','T','F','S','S'][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </VXScreen>
  );
}

window.DashboardScreen = DashboardScreen;
