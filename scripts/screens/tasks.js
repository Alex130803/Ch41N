function TasksScreen({ onNav }) {
  const VX = window.VX;
  const [filter, setFilter] = React.useState('all');
  const [done, setDone] = React.useState(new Set([0, 3, 5]));

  const allTasks = [
    { p: 'ig', user: '@luna_drip', action: 'Like latest post & follow', reward: 0.85 },
    { p: 'tt', user: '@rexsounds', action: 'Watch video · 30 seconds', reward: 0.60 },
    { p: 'yt', user: 'Cipher Logs', action: 'Subscribe to channel', reward: 1.20 },
    { p: 'tw', user: '@0xnova', action: 'Retweet pinned thread', reward: 0.85 },
    { p: 'ig', user: '@moon_ops', action: 'Save reel to collection', reward: 0.85 },
    { p: 'tt', user: '@pulse.fm', action: 'Follow & like pinned', reward: 0.60 },
    { p: 'yt', user: 'Decode Weekly', action: 'Watch & comment', reward: 1.20 },
    { p: 'tw', user: '@synthwave', action: 'Follow account', reward: 0.85 },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ig', label: 'Instagram' },
    { id: 'tt', label: 'TikTok' },
    { id: 'yt', label: 'YouTube' },
    { id: 'tw', label: 'Twitter' },
  ];

  const shown = allTasks.map((t, i) => ({ ...t, i })).filter((t) => filter === 'all' || t.p === filter);
  const total = 14;
  const completed = done.size;
  const remaining = total - completed;

  const toggle = (i) => {
    setDone((prev) => {
      const n = new Set(prev);
      if (n.has(i)) n.delete(i); else n.add(i);
      return n;
    });
  };

  return (
    <VXScreen>
      <div className="page-head">
        <div>
          <div className="page-title">Tasks</div>
          <div className="page-sub">Earn per action · Reset daily</div>
        </div>
        <div style={{ padding: '5px 12px', background: 'rgba(124,58,237,0.14)', borderRadius: 99, color: VX.primaryHi, fontSize: 12, fontWeight: 700, border: `1px solid ${VX.strokeHi}` }}>
          {remaining} left today
        </div>
      </div>

      <div style={{ margin: '6px 20px 14px', padding: '14px 16px', background: VX.card, borderRadius: 14, border: `1px solid ${VX.stroke}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontSize: 12, color: VX.muted }}>Progress today</div>
          <div style={{ fontWeight: 800, fontSize: 13 }}>
            {completed}<span style={{ color: VX.muted }}>/{total}</span>
          </div>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
          <div style={{ width: `${(completed / total) * 100}%`, height: '100%', background: VX.gradAccent, borderRadius: 3, boxShadow: `0 0 10px ${VX.cyan}`, transition: 'width .3s' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 20px 14px' }}>
        {filters.map((f) => {
          const on = filter === f.id;
          return (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              flexShrink: 0, padding: '8px 16px', borderRadius: 99,
              background: on ? VX.gradPurple : VX.card,
              border: `1px solid ${on ? 'transparent' : VX.stroke}`,
              color: on ? '#fff' : VX.muted,
              fontSize: 12.5, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.2,
              boxShadow: on ? `0 6px 14px -4px ${VX.primary}` : 'none',
            }}>{f.label}</button>
          );
        })}
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {shown.map((t) => {
          const isDone = done.has(t.i);
          return (
            <div key={t.i} style={{
              padding: 14, borderRadius: 14, background: VX.card,
              border: `1px solid ${VX.stroke}`,
              display: 'flex', alignItems: 'center', gap: 12,
              opacity: isDone ? 0.55 : 1, transition: 'opacity .15s',
            }}>
              <VXPlatformIcon platform={t.p} size={44} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.user}</div>
                <div style={{ fontSize: 12, color: VX.muted, marginBottom: 4 }}>{t.action}</div>
                <div style={{ fontWeight: 800, fontSize: 14, color: VX.green }}>+${t.reward.toFixed(2)}</div>
              </div>
              <button onClick={() => toggle(t.i)} style={{
                padding: isDone ? '8px 12px' : '9px 14px', borderRadius: 8, flexShrink: 0,
                background: isDone ? 'rgba(16,185,129,0.15)' : 'transparent',
                border: isDone ? `1px solid ${VX.green}` : `1.5px solid ${VX.strokeHi}`,
                color: isDone ? VX.green : VX.primaryHi,
                fontWeight: 700, fontSize: 12, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                {isDone ? (
                  <><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Done</>
                ) : 'Start'}
              </button>
            </div>
          );
        })}
        {shown.length === 0 && (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: VX.muted }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>No tasks in this category</div>
            <div style={{ fontSize: 12 }}>Try another filter</div>
          </div>
        )}
      </div>
    </VXScreen>
  );
}

window.TasksScreen = TasksScreen;
