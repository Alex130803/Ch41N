function App() {
  const [screen, setScreen] = React.useState(() => {
    try { return localStorage.getItem('chain-screen') || 'login'; }
    catch { return 'login'; }
  });

  React.useEffect(() => {
    try { localStorage.setItem('chain-screen', screen); } catch {}
  }, [screen]);

  const showNav = !['login', 'signup'].includes(screen);
  const nav = (s) => setScreen(s);

  let body;
  if (screen === 'login') body = <LoginScreen onLogin={() => setScreen('dashboard')} onSignup={() => setScreen('signup')} />;
  else if (screen === 'signup') body = <SignupScreen onBack={() => setScreen('login')} onDone={() => setScreen('dashboard')} />;
  else if (screen === 'dashboard') body = <DashboardScreen onNav={nav} />;
  else if (screen === 'vip') body = <VIPScreen onNav={nav} />;
  else if (screen === 'tasks') body = <TasksScreen onNav={nav} />;
  else if (screen === 'withdraw') body = <WithdrawScreen onNav={nav} />;
  else if (screen === 'profile') body = <ProfileScreen onNav={nav} />;

  return (
    <div className="app-root">
      <div className="app-shell">
        {body}
      </div>
      {showNav && <VXBottomNav active={screen} onNav={nav} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
