// Placeholder data structure for API-ready state
export const INITIAL_STATE = {
  dashboard: {
    stats: [
      { label: "Resume Score", value: "0", change: "+0%", icon: "📄", color: "#0A66C2", key: "resumeScore" },
      { label: "Job Match Rate", value: "0%", change: "+0%", icon: "🎯", color: "#2C7A4D", key: "jobMatchRate" },
      { label: "Skills Gap", value: "0", change: "0", icon: "🔍", color: "#D83A3A", key: "skillsGap" },
      { label: "Interviews Prep", value: "0", change: "New", icon: "🎤", color: "#1E2A3E", key: "interviewsPrep" },
    ],
    careerReadiness: { score: 0, percentage: 0, message: "Upload your resume to get started" },
    recommendations: [],
  },
  
  resume: {
    currentResume: null,
    analysis: null,
    suggestions: [],
    loading: false,
    error: null,
  },
  
  jobMatch: {
    jobDescription: '',
    matchAnalysis: null,
    loading: false,
    error: null,
  },
  
  skillGap: {
    currentSkills: [],
    targetRole: '',
    gapAnalysis: null,
    loading: false,
    error: null,
  },
  
  linkedin: {
    profileUrl: '',
    analysis: null,
    loading: false,
    error: null,
  },
  
  interview: {
    role: '',
    experience: '',
    questions: [],
    loading: false,
    error: null,
  },
};