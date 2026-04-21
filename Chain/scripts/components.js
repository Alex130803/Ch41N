// Shared components — attached to window for cross-file access.
const VX = window.VX;

function VXScreen({ children, hasNav = true }) {
  return (
    <div className={'app-content' + (hasNav ? '' : ' no-nav')}>
      <div className="screen-shell">
        {children}
      </div>
    </div>
  );
}

function VXGradientText({ children, grad = VX.gradAccent, style = {} }) {
  return (
    <span className="grad-text" style={{ backgroundImage: grad, ...style }}>
      {children}
    </span>
  );
}

function VXButton({ children, variant = 'primary', onClick, style = {}, disabled, glow = false }) {
  const cls = ['btn', variant, glow ? 'glow-primary' : ''].join(' ');
  return (
    <button onClick={onClick} disabled={disabled} className={cls} style={style}>
      {children}
    </button>
  );
}

function VXInput({ label, value, onChange, type = 'text', placeholder, iconLeft, iconRight, focused, onFocus, onBlur, inputMode }) {
  return (
    <div className="field">
      {label && <label className="field-label">{label}</label>}
      <div className={'field-wrap' + (focused ? ' is-focused' : '')}>
        {iconLeft && <div className="field-icon left">{iconLeft}</div>}
        <input
          type={type}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          inputMode={inputMode}
        />
        {iconRight && <div className="field-icon right">{iconRight}</div>}
      </div>
    </div>
  );
}

function VXPlatformIcon({ platform, size = 40 }) {
  const common = {
    width: size, height: size, borderRadius: size * 0.28,
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  };
  if (platform === 'ig') return (
    <div style={{ ...common, background: 'linear-gradient(135deg, #fdf497 0%, #fd5949 45%, #d6249f 70%, #285AEB 100%)' }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#fff"/>
      </svg>
    </div>
  );
  if (platform === 'tt') return (
    <div style={{ ...common, background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
        <path d="M14 4v11.5a3.5 3.5 0 11-3.5-3.5" stroke="#25F4EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4v11.5a3.5 3.5 0 11-3.5-3.5M15 4c.5 2.5 2 4 4.5 4.2" stroke="#FE2C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translate(1.5px,1px)' }}/>
        <path d="M14 4c.5 2.5 2 4 4.5 4.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
  if (platform === 'yt') return (
    <div style={{ ...common, background: '#FF0000' }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="#fff">
        <path d="M9 17V7l8 5-8 5z"/>
      </svg>
    </div>
  );
  if (platform === 'tw') return (
    <div style={{ ...common, background: '#0a0a0a' }}>
      <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="#fff">
        <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-9L2 3h6l4 5 6-5z"/>
      </svg>
    </div>
  );
  return <div style={common} />;
}

function VXBottomNav({ active, onNav }) {
  const items = [
    { id: 'dashboard', label: 'Home', icon: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 9l8-6 8 6v10a1 1 0 01-1 1h-4v-7h-6v7H4a1 1 0 01-1-1V9z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/></svg> },
    { id: 'tasks', label: 'Tasks', icon: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.5 6 6.5.5-5 4.5 1.5 6.5L11 16l-5.5 3.5L7 13 2 8.5 8.5 8 11 2z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg> },
    { id: 'vip', label: 'VIP', icon: (c) => <svg width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M12 2l10 6v6l-10 6L2 14V8l10-6z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg> },
    { id: 'withdraw', label: 'Withdraw', icon: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 16V4M11 4l-5 5M11 4l5 5M3 18h16" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'profile', label: 'Profile', icon: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7.5" r="3.5" stroke={c} strokeWidth="1.7"/><path d="M4 19c1.5-3.5 4.2-5 7-5s5.5 1.5 7 5" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg> },
  ];
  return (
    <div className="nav">
      <div className="nav-inner">
        {items.map((it) => {
          const isOn = active === it.id;
          const color = isOn ? VX.primaryHi : VX.muted;
          return (
            <button
              key={it.id}
              onClick={() => onNav(it.id)}
              className={'nav-item' + (isOn ? ' is-active' : '')}
            >
              {isOn && <div className="nav-item-pip" />}
              {it.icon(color)}
              <span>{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { VXScreen, VXGradientText, VXButton, VXInput, VXPlatformIcon, VXBottomNav });
