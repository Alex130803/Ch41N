function WithdrawScreen({ onNav }) {
  const VX = window.VX;
  const [amount, setAmount] = React.useState('');
  const [addr, setAddr] = React.useState('');
  const [network, setNetwork] = React.useState('sol');
  const [focus, setFocus] = React.useState(null);
  const balance = 142.08;
  const canSubmit = parseFloat(amount) > 0 && addr.length >= 20;

  const history = [
    { amt: 100, net: 'SOL', date: 'Apr 18', status: 'Completed' },
    { amt: 75, net: 'TRC20', date: 'Apr 12', status: 'Completed' },
    { amt: 50, net: 'SOL', date: 'Apr 10', status: 'Pending' },
    { amt: 200, net: 'TRC20', date: 'Apr 3', status: 'Completed' },
  ];

  return (
    <VXScreen>
      <div className="page-head">
        <div>
          <div className="page-title">Withdraw</div>
          <div className="page-sub">Send USDT to your wallet</div>
        </div>
        <div style={{ padding: '6px 12px', background: 'rgba(16,185,129,0.14)', borderRadius: 99, color: VX.green, fontSize: 12, fontWeight: 700, border: '1px solid rgba(16,185,129,0.3)' }}>
          ${balance.toFixed(2)}
        </div>
      </div>

      <div style={{ margin: '6px 20px 20px', borderRadius: 20, padding: 22, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #2a1558 0%, #1a0d3f 60%, #083a4a 100%)',
        border: `1px solid ${VX.strokeHi}`,
      }}>
        <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.35), transparent 70%)', filter: 'blur(12px)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11, color: VX.muted, letterSpacing: 0.4, fontWeight: 600, marginBottom: 6 }}>AVAILABLE BALANCE</div>
          <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1.2, lineHeight: 1 }}>
            142.08 <span style={{ fontSize: 20, color: VX.muted, fontWeight: 700 }}>USDT</span>
          </div>
          <div style={{ fontSize: 13, color: VX.muted, marginTop: 6 }}>≈ $142.08 USD</div>
        </div>
      </div>

      <div className="h-pad">
        <div style={{ fontSize: 12, color: VX.muted, marginBottom: 8, fontWeight: 500, letterSpacing: 0.3 }}>SELECT NETWORK</div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
          {[
            { id: 'sol', name: 'Solana', sub: 'SOL', color: '#9945FF' },
            { id: 'trc', name: 'Tron', sub: 'TRC20', color: '#ff060a' },
          ].map((n) => {
            const on = network === n.id;
            return (
              <button key={n.id} onClick={() => setNetwork(n.id)} style={{
                flex: 1, padding: '14px 12px', borderRadius: 12,
                background: on ? 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(124,58,237,0.04))' : VX.card,
                border: `1.5px solid ${on ? VX.primary : VX.stroke}`,
                color: VX.text, cursor: 'pointer', textAlign: 'left',
                display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: on ? `0 0 18px -4px ${VX.primary}` : 'none',
                transition: 'all .15s',
              }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: n.color, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 11 }}>
                  {n.sub[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{n.name}</div>
                  <div style={{ fontSize: 11, color: VX.muted }}>{n.sub}</div>
                </div>
                {on && (
                  <div style={{ marginLeft: 'auto', width: 18, height: 18, borderRadius: '50%', background: VX.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="field">
          <label className="field-label">AMOUNT</label>
          <div className={'field-wrap' + (focus === 'amt' ? ' is-focused' : '')}>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              onFocus={() => setFocus('amt')}
              onBlur={() => setFocus(null)}
              inputMode="decimal"
              placeholder="0.00"
              style={{ fontWeight: 800, fontSize: 22 }}
            />
            <span style={{ color: VX.muted, fontSize: 14, fontWeight: 600, marginRight: 10 }}>USDT</span>
            <button onClick={() => setAmount(balance.toFixed(2))} style={{
              background: 'rgba(124,58,237,0.14)', border: `1px solid ${VX.strokeHi}`,
              color: VX.primaryHi, padding: '5px 10px', borderRadius: 7,
              fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.3,
            }}>MAX</button>
          </div>
        </div>

        <VXInput
          label="WALLET ADDRESS"
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
          placeholder={network === 'sol' ? 'Enter SOL address...' : 'Enter TRC20 address...'}
          focused={focus === 'addr'}
          onFocus={() => setFocus('addr')}
          onBlur={() => setFocus(null)}
          iconRight={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 5V3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 4px 14px', fontSize: 12, color: VX.muted }}>
          <span>Network fee</span>
          <span>~$0.01 · Arrives in ~30s</span>
        </div>

        <VXButton variant="primary" glow={canSubmit} disabled={!canSubmit} style={{ height: 52 }}>
          Withdraw Now
        </VXButton>

        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Recent Withdrawals</div>
          <div style={{ background: VX.card, borderRadius: 14, border: `1px solid ${VX.stroke}`, overflow: 'hidden' }}>
            {history.map((h, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', padding: '12px 14px',
                borderTop: i > 0 ? `1px solid ${VX.stroke}` : 'none',
              }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: VX.green, marginRight: 10, flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11V3M7 3l-3 3M7 3l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>${h.amt.toFixed(2)} <span style={{ color: VX.muted, fontWeight: 500, fontSize: 11 }}>· {h.net}</span></div>
                  <div style={{ fontSize: 11, color: VX.muted }}>{h.date}, 2026</div>
                </div>
                <div style={{
                  padding: '3px 9px', borderRadius: 99, fontSize: 10, fontWeight: 700, letterSpacing: 0.3,
                  background: h.status === 'Completed' ? 'rgba(16,185,129,0.14)' : 'rgba(245,158,11,0.14)',
                  color: h.status === 'Completed' ? VX.green : VX.gold,
                }}>{h.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VXScreen>
  );
}

window.WithdrawScreen = WithdrawScreen;
