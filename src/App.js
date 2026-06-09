import React, { useState } from 'react';
import { T, css } from './constants/theme';
import { AuthPage } from './components/auth/AuthPage';
import { Shell } from './components/layout/Shell';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import ScoreAnalyzer from './pages/ScoreAnalyzer';
import SkillGap from './pages/SkillGap';
import JobMatch from './pages/JobMatch';
import LinkedInOptimizer from './pages/LinkedInOptimizer';
import MockInterview from './pages/MockInterview';
import './styles/globals.css';

const SCREENS = {
  dashboard: { title: "Dashboard", comp: Dashboard },
  resume: { title: "Resume Builder", comp: ResumeBuilder },
  score: { title: "Resume Score", comp: ScoreAnalyzer },
  skillgap: { title: "Skill Gap", comp: SkillGap },
  jobmatch: { title: "Job Match", comp: JobMatch },
  linkedin: { title: "LinkedIn Optimizer", comp: LinkedInOptimizer },
  interview: { title: "Mock Interview", comp: MockInterview },
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