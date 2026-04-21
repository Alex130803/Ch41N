function LoginScreen({ onLogin, onSignup }) {
  const VX = window.VX;
  const [phone, setPhone] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  const [focus, setFocus] = React.useState(null);

  return (
    <VXScreen hasNav={false}>
      <div style={{ position: 'relative', padding: '24px 20px 40px', maxWidth: 440, margin: '0 auto' }}>
        <div style={{
          position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)',
          width: 340, height: 340, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)',
          filter: 'blur(20px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 42 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <defs><linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7c3aed"/><stop offset="1" stopColor="#06b6d4"/></linearGradient></defs>
                <path d="M17 2L30 9.5v15L17 32L4 24.5v-15L17 2z" stroke="url(#logoG)" strokeWidth="2.2" fill="none"/>
                <path d="M17 10L24 14v7l-7 4l-7-4v-7l7-4z" fill="url(#logoG)" opacity="0.25"/>
                <circle cx="17" cy="17" r="3" fill="url(#logoG)"/>
              </svg>
              <span style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>
                <VXGradientText>Chain</VXGradientText>
              </span>
            </div>
            <div style={{ color: VX.muted, fontSize: 13, letterSpacing: 0.4 }}>Web3 Engagement Platform</div>
          </div>

          <VXInput
            label="PHONE NUMBER"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000 0000"
            type="tel"
            focused={focus === 'phone'}
            onFocus={() => setFocus('phone')}
            onBlur={() => setFocus(null)}
            iconLeft={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 2h3l1.5 4-2 1.5a10 10 0 004 4l1.5-2 4 1.5v3a1.5 1.5 0 01-1.5 1.5A13 13 0 012.5 3.5 1.5 1.5 0 014 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>}
          />
          <VXInput
            label="PASSWORD"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            type={showPw ? 'text' : 'password'}
            placeholder="••••••••"
            focused={focus === 'pw'}
            onFocus={() => setFocus('pw')}
            onBlur={() => setFocus(null)}
            iconLeft={<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="8" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5.5 8V5.5a3.5 3.5 0 017 0V8" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>}
            iconRight={
              <span onClick={() => setShowPw((s) => !s)} style={{ cursor: 'pointer', display: 'flex' }}>
                {showPw
                  ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 3l12 12" stroke="currentColor" strokeWidth="1.5"/></svg>}
              </span>
            }
          />

          <div style={{ textAlign: 'right', marginTop: -4, marginBottom: 22 }}>
            <a style={{ color: VX.muted, fontSize: 13, textDecoration: 'none', cursor: 'pointer' }}>Forgot password?</a>
          </div>

          <VXButton variant="primary" glow onClick={onLogin} style={{ height: 52 }}>
            Connect & Login
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"><path d="M1 7h13M9 2l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </VXButton>

          <div style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: VX.muted }}>
            Don't have an account?{' '}
            <a onClick={onSignup} style={{ color: VX.primaryHi, fontWeight: 600, cursor: 'pointer' }}>Sign Up</a>
          </div>
        </div>
      </div>
    </VXScreen>
  );
}

window.LoginScreen = LoginScreen;
