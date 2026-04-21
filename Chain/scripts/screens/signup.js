function SignupScreen({ onBack, onDone }) {
  const VX = window.VX;
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pw2, setPw2] = React.useState('');
  const [ref, setRef] = React.useState('');
  const [vip, setVip] = React.useState(0);
  const [focus, setFocus] = React.useState(null);

  const strength = pw.length < 4 ? 0 : pw.length < 8 ? 1 : pw.length < 10 ? 2 : 3;
  const strLabels = ['', 'Weak', 'Medium', 'Strong'];
  const strColors = [VX.stroke, VX.red, VX.gold, VX.green];

  const tiers = [
    { name: 'VIP0', price: 'Free', daily: '$0.50', tasks: 3 },
    { name: 'VIP1', price: '$150', daily: '$4', tasks: 8 },
    { name: 'VIP2', price: '$400', daily: '$12', tasks: 14 },
    { name: 'VIP3', price: '$1,300', daily: '$44', tasks: 22 },
  ];

  return (
    <VXScreen hasNav={false}>
      <div style={{ padding: '8px 20px 32px', maxWidth: 440, margin: '0 auto' }}>
        <button onClick={onBack} style={{
          background: VX.card, border: `1px solid ${VX.stroke}`, width: 40, height: 40,
          borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: VX.text,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div style={{ textAlign: 'center', margin: '20px 0 28px' }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.6 }}>
            <VXGradientText>⬡ Chain</VXGradientText>
          </div>
          <div style={{ color: VX.muted, fontSize: 13, marginTop: 4 }}>Create your account</div>
        </div>

        <VXInput label="FULL NAME" value={name} onChange={(e) => setName(e.target.value)}
          focused={focus === 'name'} onFocus={() => setFocus('name')} onBlur={() => setFocus(null)}
          iconLeft={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 16c1.5-3 3.5-4 6-4s4.5 1 6 4" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>} />
        <VXInput label="PHONE NUMBER" value={phone} placeholder="+1 (555) 000 0000" type="tel" onChange={(e) => setPhone(e.target.value)}
          focused={focus === 'ph'} onFocus={() => setFocus('ph')} onBlur={() => setFocus(null)}
          iconLeft={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 2h3l1.5 4-2 1.5a10 10 0 004 4l1.5-2 4 1.5v3a1.5 1.5 0 01-1.5 1.5A13 13 0 012.5 3.5 1.5 1.5 0 014 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>} />

        <VXInput label="PASSWORD" value={pw} type="password" onChange={(e) => setPw(e.target.value)}
          focused={focus === 'pw'} onFocus={() => setFocus('pw')} onBlur={() => setFocus(null)} />
        {pw && (
          <div style={{ marginTop: -10, marginBottom: 14, paddingLeft: 2 }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= strength ? strColors[strength] : VX.stroke }} />
              ))}
            </div>
            <div style={{ fontSize: 11, color: strColors[strength] || VX.muted, fontWeight: 600, letterSpacing: 0.3 }}>{strLabels[strength]}</div>
          </div>
        )}

        <VXInput label="CONFIRM PASSWORD" value={pw2} type="password" onChange={(e) => setPw2(e.target.value)}
          focused={focus === 'pw2'} onFocus={() => setFocus('pw2')} onBlur={() => setFocus(null)} />
        <VXInput label="REFERRAL CODE" value={ref} placeholder="Enter referral code" onChange={(e) => setRef(e.target.value)}
          focused={focus === 'ref'} onFocus={() => setFocus('ref')} onBlur={() => setFocus(null)} />

        <div style={{ marginTop: 18, marginBottom: 22 }}>
          <div style={{ fontSize: 12, color: VX.muted, marginBottom: 10, fontWeight: 500, letterSpacing: 0.3 }}>STARTER PACKAGE</div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
            {tiers.map((t, i) => {
              const sel = vip === i;
              return (
                <div key={i} onClick={() => setVip(i)} style={{
                  flexShrink: 0, width: 120, padding: '14px 12px',
                  background: sel ? 'linear-gradient(180deg, rgba(124,58,237,0.18), rgba(124,58,237,0.04))' : VX.card,
                  border: `1.5px solid ${sel ? VX.primary : VX.stroke}`,
                  borderRadius: 14, cursor: 'pointer',
                  boxShadow: sel ? `0 0 24px -4px ${VX.primary}` : 'none',
                  transition: 'all .15s',
                }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: sel ? VX.primaryHi : VX.text }}>{t.name}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{t.price}</div>
                  <div style={{ fontSize: 11, color: VX.muted, marginTop: 6, lineHeight: 1.4 }}>
                    <div>{t.daily}/day</div>
                    <div>{t.tasks} tasks</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <VXButton variant="primary" glow onClick={onDone} style={{ height: 52 }}>Create Account</VXButton>
        <div style={{ textAlign: 'center', marginTop: 14, fontSize: 11, color: VX.dim, lineHeight: 1.5 }}>
          By signing up you agree to our <span style={{ color: VX.muted }}>Terms</span> and <span style={{ color: VX.muted }}>Privacy Policy</span>
        </div>
      </div>
    </VXScreen>
  );
}

window.SignupScreen = SignupScreen;
