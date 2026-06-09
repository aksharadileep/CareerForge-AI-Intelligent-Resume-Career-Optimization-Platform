import { useState } from "react";

// ─── FONTS & GLOBAL STYLES (PROFESSIONAL, MATURE) ─────────────────
function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Manrope:wght@300;400;500;600;700&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: #F8FAFF;
        color: #1A1F36;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Professional scrollbar */
      ::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-track { background: #E8EDF5; border-radius: 10px; }
      ::-webkit-scrollbar-thumb { background: #B9C2D4; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: #8E9AB0; }
      
      /* Smooth focus rings */
      input:focus, textarea:focus, button:focus {
        outline: none;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-in {
        animation: fadeIn 0.4s ease-out forwards;
      }
      
      /* Responsive container */
      .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 24px;
      }
      
      @media (max-width: 768px) {
        .container {
          padding: 0 16px;
        }
      }
    `}</style>
  );
}

// ─── PROFESSIONAL DESIGN SYSTEM ──────────────────────────────────
const T = {
  // Core colors - corporate, trustworthy
  primary: "#0A66C2",      // LinkedIn blue - trustworthy, professional
  primaryDark: "#004182",
  primaryLight: "#E8F0FE",
  secondary: "#1E2A3E",
  accent: "#2C7A4D",       // Success green
  warning: "#D83A3A",      // Alert red
  warningLight: "#FEF2F2",
  
  // Neutrals - clean, modern
  bg: "#F8FAFF",
  bgWhite: "#FFFFFF",
  surface: "#FFFFFF",
  surfaceAlt: "#F0F4FA",
  border: "#E2E8F0",
  borderDark: "#CBD5E1",
  
  text: "#1A2C3E",
  textLight: "#4A5B6E",
  textMuted: "#8A99AE",
  
  // Gradients
  gradientPrimary: "linear-gradient(135deg, #0A66C2 0%, #1E88E5 100%)",
};

const css = {
  card: {
    background: T.bgWhite,
    border: `1px solid ${T.border}`,
    borderRadius: 16,
    padding: "28px 32px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)",
    transition: "box-shadow 0.2s, border-color 0.2s",
  },
  cardHover: {
    cursor: "pointer",
    transition: "all 0.2s",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    background: T.bgWhite,
    border: `1.5px solid ${T.border}`,
    borderRadius: 12,
    fontSize: 15,
    color: T.text,
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: T.textLight,
    marginBottom: 8,
    display: "block",
  },
  btnPrimary: {
    background: T.gradientPrimary,
    color: "#FFFFFF",
    border: "none",
    borderRadius: 40,
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.1s",
  },
  btnSecondary: {
    background: "transparent",
    color: T.primary,
    border: `1.5px solid ${T.primary}`,
    borderRadius: 40,
    padding: "11px 27px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnGhost: {
    background: "transparent",
    color: T.textLight,
    border: `1px solid ${T.borderDark}`,
    borderRadius: 40,
    padding: "11px 27px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  tag: (type = "default") => {
    const styles = {
      default: { background: "#F0F4FA", color: T.textLight },
      success: { background: "#E3F7EC", color: T.accent },
      warning: { background: "#FEF2F2", color: T.warning },
      info: { background: T.primaryLight, color: T.primary },
    };
    return {
      ...styles[type],
      borderRadius: 30,
      padding: "4px 12px",
      fontSize: 12,
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
    };
  },
};

// ═══════════════════════════════════════════════════════════════════
// MEANINGFUL LOGO COMPONENT
// ═══════════════════════════════════════════════════════════════════
function Logo({ size = "md", variant = "default" }) {
  const sizes = { sm: 32, md: 40, lg: 48 };
  const fontSize = { sm: 18, md: 22, lg: 26 };
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: sizes[size],
        height: sizes[size],
        background: T.gradientPrimary,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(10,102,194,0.2)",
      }}>
        <span style={{ color: "white", fontSize: fontSize[size], fontWeight: 700 }}>CF</span>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: fontSize[size] - 2, color: T.text, letterSpacing: "-0.3px" }}>
          Career<span style={{ color: T.primary }}>Forge</span>
        </div>
        <div style={{ fontSize: 10, color: T.textMuted, letterSpacing: "0.3px", marginTop: -2 }}>CAREER INTELLIGENCE</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// AUTH PAGE — Professional, Clean, Trustworthy
// ═══════════════════════════════════════════════════════════════════
function AuthPage({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    if (!form.email || !form.password) { setError("Email and password are required"); return; }
    if (mode === "signup" && form.password !== form.confirm) { setError("Passwords do not match"); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuth(form.name || form.email.split("@")[0]);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className="animate-in" style={{ width: "100%", maxWidth: 480 }}>
        {/* Logo centered */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block" }}>
            <Logo size="lg" />
          </div>
          <p style={{ marginTop: 16, fontSize: 14, color: T.textLight, maxWidth: 320, marginLeft: "auto", marginRight: "auto" }}>
            AI-powered career tools trusted by 10,000+ professionals
          </p>
        </div>

        {/* Auth Card */}
        <div style={css.card}>
          {/* Tab switcher */}
          <div style={{ display: "flex", gap: 12, background: T.surfaceAlt, borderRadius: 48, padding: 4, marginBottom: 28 }}>
            <button
              onClick={() => { setMode("login"); setError(""); }}
              style={{
                flex: 1, padding: "10px 0", borderRadius: 40, border: "none",
                background: mode === "login" ? T.primary : "transparent",
                color: mode === "login" ? "white" : T.textLight,
                fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => { setMode("signup"); setError(""); }}
              style={{
                flex: 1, padding: "10px 0", borderRadius: 40, border: "none",
                background: mode === "signup" ? T.primary : "transparent",
                color: mode === "signup" ? "white" : T.textLight,
                fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              Create Account
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {mode === "signup" && (
              <div>
                <label style={css.label}>Full Name</label>
                <input
                  placeholder="James Wilson"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={css.input}
                  onFocus={e => e.target.style.borderColor = T.primary}
                  onBlur={e => e.target.style.borderColor = T.border}
                />
              </div>
            )}
            <div>
              <label style={css.label}>Email Address</label>
              <input
                type="email" placeholder="hello@company.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={css.input}
                onFocus={e => e.target.style.borderColor = T.primary}
                onBlur={e => e.target.style.borderColor = T.border}
              />
            </div>
            <div>
              <label style={css.label}>Password</label>
              <input
                type="password" placeholder="••••••••"
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                style={css.input}
                onFocus={e => e.target.style.borderColor = T.primary}
                onBlur={e => e.target.style.borderColor = T.border}
              />
            </div>
            {mode === "signup" && (
              <div>
                <label style={css.label}>Confirm Password</label>
                <input
                  type="password" placeholder="••••••••"
                  value={form.confirm}
                  onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                  style={css.input}
                  onFocus={e => e.target.style.borderColor = T.primary}
                  onBlur={e => e.target.style.borderColor = T.border}
                />
              </div>
            )}
          </div>

          {error && (
            <div style={{ marginTop: 16, padding: "12px 16px", background: T.warningLight, borderRadius: 12, fontSize: 13, color: T.warning, borderLeft: `3px solid ${T.warning}` }}>
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            style={{ ...css.btnPrimary, width: "100%", marginTop: 24, opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Processing..." : mode === "login" ? "Sign In" : "Create Free Account"}
          </button>

          {mode === "login" && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <span style={{ fontSize: 14, color: T.textLight }}>New to CareerForge? </span>
              <button onClick={() => setMode("signup")} style={{ background: "none", border: "none", color: T.primary, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                Start free →
              </button>
            </div>
          )}
        </div>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 12, color: T.textMuted }}>
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SIDEBAR — Professional Navigation
// ═══════════════════════════════════════════════════════════════════
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "📊", group: "main" },
  { id: "resume", label: "Resume Builder", icon: "📄", group: "tools" },
  { id: "score", label: "Resume Score", icon: "📈", group: "tools" },
  { id: "skillgap", label: "Skill Gap Analysis", icon: "🔍", group: "tools" },
  { id: "jobmatch", label: "Job Match", icon: "🎯", group: "tools" },
  { id: "linkedin", label: "LinkedIn Optimizer", icon: "🔗", group: "tools" },
  { id: "interview", label: "Mock Interview", icon: "🎤", group: "tools" },
];

function Sidebar({ active, onNav, user, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside style={{
        width: 280, flexShrink: 0, background: T.bgWhite, borderRight: `1px solid ${T.border}`,
        display: "flex", flexDirection: "column", padding: "28px 20px",
      }}>
        <div style={{ paddingLeft: 12, marginBottom: 40 }}>
          <Logo size="md" />
        </div>

        <nav style={{ flex: 1 }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.5px", color: T.textMuted, paddingLeft: 12, marginBottom: 12 }}>
              MAIN
            </div>
            {NAV_ITEMS.filter(i => i.group === "main").map(item => (
              <NavItem key={item.id} item={item} active={active} onNav={onNav} />
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.5px", color: T.textMuted, paddingLeft: 12, marginBottom: 12 }}>
              CAREER TOOLS
            </div>
            {NAV_ITEMS.filter(i => i.group === "tools").map(item => (
              <NavItem key={item.id} item={item} active={active} onNav={onNav} />
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 20, marginTop: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: T.primaryLight,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 600, fontSize: 16, color: T.primary,
            }}>
              {user.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: T.text }}>{user}</div>
              <div style={{ fontSize: 12, color: T.textMuted }}>Member since 2024</div>
            </div>
            <button onClick={onLogout} style={{ background: "none", border: "none", color: T.textMuted, fontSize: 18, cursor: "pointer" }}>↪</button>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ item, active, onNav }) {
  return (
    <button
      onClick={() => onNav(item.id)}
      style={{
        display: "flex", alignItems: "center", gap: 12, width: "100%",
        padding: "10px 14px", borderRadius: 12, border: "none",
        background: active === item.id ? T.primaryLight : "transparent",
        color: active === item.id ? T.primary : T.textLight,
        fontSize: 14, fontWeight: 500, cursor: "pointer", marginBottom: 4,
      }}
      onMouseEnter={e => { if (active !== item.id) { e.currentTarget.style.background = "#F0F4FA"; e.currentTarget.style.color = T.text; } }}
      onMouseLeave={e => { if (active !== item.id) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.textLight; } }}
    >
      <span style={{ fontSize: 18 }}>{item.icon}</span>
      {item.label}
    </button>
  );
}

// ─── Shell Layout (Responsive) ────────────────────────────────────
function Shell({ active, onNav, user, onLogout, title, children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: T.bg }}>
      <Sidebar active={active} onNav={onNav} user={user} onLogout={onLogout} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top Bar */}
        <div style={{
          background: T.bgWhite, borderBottom: `1px solid ${T.border}`,
          padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: T.text }}>{title}</h1>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ ...css.btnSecondary, padding: "8px 20px", fontSize: 13 }}>📤 Upload Resume</button>
            <button style={{ ...css.btnGhost, padding: "8px 20px", fontSize: 13 }}>Help</button>
          </div>
        </div>
        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px" }} className="animate-in">
          <div className="container" style={{ maxWidth: "100%", padding: 0 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// DASHBOARD — Professional, Metrics-Driven
// ═══════════════════════════════════════════════════════════════════
function Dashboard({ onNav }) {
  const stats = [
    { label: "Resume Score", value: "78", change: "+12%", icon: "📄", color: T.primary },
    { label: "Job Match Rate", value: "85%", change: "+5%", icon: "🎯", color: T.accent },
    { label: "Skills Gap", value: "3", change: "-2", icon: "🔍", color: T.warning },
    { label: "Interviews Prep", value: "2", change: "New", icon: "🎤", color: T.secondary },
  ];

  const recommendations = [
    { title: "Optimize Resume for ATS", description: "Add more keywords from your target job description", action: "Improve Score", type: "warning" },
    { title: "Complete LinkedIn Profile", description: "Your profile is 64% complete - boost recruiter visibility", action: "Optimize", type: "info" },
    { title: "Skill Development", description: "3 missing skills for Data Analyst roles", action: "View Gap", type: "success" },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: T.text, marginBottom: 8 }}>Welcome back, James</h2>
        <p style={{ fontSize: 15, color: T.textLight }}>Your career readiness score is 68/100 · 30% higher chance of getting hired</p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{ ...css.card, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: s.change.includes("+") ? T.accent : T.warning }}>
                {s.change}
              </span>
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 24 }}>
        {/* Quick Actions */}
        <div style={css.card}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Resume Builder</h3>
          <p style={{ fontSize: 14, color: T.textLight, marginBottom: 20 }}>Create an ATS-friendly resume in minutes with AI-powered content suggestions.</p>
          <div style={{ background: T.primaryLight, borderRadius: 12, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>42% higher recruiter response rate‡</div>
            <div style={{ fontSize: 13, color: T.textLight }}>Based on 18,449 customer reviews</div>
          </div>
          <button onClick={() => onNav("resume")} style={css.btnPrimary}>Build My Resume →</button>
        </div>

        {/* Recommendations */}
        <div style={css.card}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>AI Recommendations</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {recommendations.map((rec, i) => (
              <div key={i} style={{ padding: "12px 0", borderBottom: i < recommendations.length - 1 ? `1px solid ${T.border}` : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{rec.title}</div>
                    <div style={{ fontSize: 13, color: T.textLight }}>{rec.description}</div>
                  </div>
                  <button style={{ background: "none", border: "none", color: T.primary, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>{rec.action} →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>All Career Tools</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {["Resume Score", "Skill Gap", "Job Match", "LinkedIn Optimizer", "Mock Interview"].map((tool, i) => (
            <div key={tool} style={{ ...css.card, ...css.cardHover, padding: "20px" }} className="glass-card"
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.primary; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>{["📊", "🔍", "🎯", "🔗", "🎤"][i]}</div>
              <h4 style={{ fontWeight: 600, marginBottom: 6 }}>{tool}</h4>
              <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 16 }}>Professional analysis and optimization</p>
              <span style={css.tag("info")}>Get Started →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Placeholder Components (Professional)
// ═══════════════════════════════════════════════════════════════════
function ResumeBuilder() { return <div style={css.card}><h2 style={{ marginBottom: 16 }}>Resume Builder</h2><p>Build your professional resume with ATS-optimized templates.</p></div>; }
function ScoreAnalyzer() { return <div style={css.card}><h2 style={{ marginBottom: 16 }}>Resume Score Analyzer</h2><p>Your resume scores 78/100 · 5 improvements suggested.</p></div>; }
function SkillGap() { return <div style={css.card}><h2 style={{ marginBottom: 16 }}>Skill Gap Analysis</h2><p>Identify missing skills and get learning recommendations.</p></div>; }
function JobMatch() { return <div style={css.card}><h2 style={{ marginBottom: 16 }}>Job Match Tool</h2><p>Paste job description to see your match percentage.</p></div>; }
function LinkedIn() { return <div style={css.card}><h2 style={{ marginBottom: 16 }}>LinkedIn Optimizer</h2><p>Boost your profile visibility to recruiters.</p></div>; }
function Interview() { return <div style={css.card}><h2 style={{ marginBottom: 16 }}>Mock Interview</h2><p>Practice with AI-powered interview simulation.</p></div>; }

// ═══════════════════════════════════════════════════════════════════
// ROOT APP
// ═══════════════════════════════════════════════════════════════════
const SCREENS = {
  dashboard: { title: "Dashboard", comp: Dashboard },
  resume: { title: "Resume Builder", comp: ResumeBuilder },
  score: { title: "Resume Score", comp: ScoreAnalyzer },
  skillgap: { title: "Skill Gap", comp: SkillGap },
  jobmatch: { title: "Job Match", comp: JobMatch },
  linkedin: { title: "LinkedIn Optimizer", comp: LinkedIn },
  interview: { title: "Mock Interview", comp: Interview },
};

export default function App() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [screen, setScreen] = useState("dashboard");

  const login = (name) => { setUser(name); setAuthed(true); };
  const logout = () => { setAuthed(false); setUser(""); setScreen("dashboard"); };

  const { title, comp: Comp } = SCREENS[screen];

  return (
    <>
      <FontLoader />
      {!authed ? (
        <AuthPage onAuth={login} />
      ) : (
        <Shell active={screen} onNav={setScreen} user={user} onLogout={logout} title={title}>
          <Comp onNavigate={setScreen} user={user} />
        </Shell>
      )}
    </>
  );
}