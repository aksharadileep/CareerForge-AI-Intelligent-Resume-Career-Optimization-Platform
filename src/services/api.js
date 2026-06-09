const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Helper function for API calls
async function apiCall(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  return response.json();
}

export async function analyzeResume(resumeFile, jobTitle = null) {
  console.log('[API] analyzeResume called');
  // TODO: Connect to FastAPI backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        score: 78,
        overallScore: 78,
        sections: { content: 82, format: 75, keywords: 79, ats: 76 },
        suggestions: ["Add quantifiable achievements", "Include industry keywords", "Optimize for ATS"],
        missingKeywords: ["React", "Node.js", "MongoDB"],
      });
    }, 1500);
  });
}

export async function analyzeJobMatch(resumeText, jobDescription) {
  console.log('[API] analyzeJobMatch called');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        matchPercentage: 85,
        matchedSkills: ["JavaScript", "React", "Python"],
        missingSkills: ["TypeScript", "AWS"],
        recommendations: ["Add TypeScript experience", "Highlight cloud skills"],
      });
    }, 1500);
  });
}

export async function analyzeSkillGap(currentSkills, targetRole) {
  console.log('[API] analyzeSkillGap called');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        missingSkills: [
          { name: "TypeScript", importance: "high", estimatedTime: "2 weeks" },
          { name: "Docker", importance: "high", estimatedTime: "2 weeks" }
        ],
        recommendations: ["Complete TypeScript certification", "Practice Docker"],
        marketDemand: 87,
        salaryImpact: "+15%"
      });
    }, 1500);
  });
}

export async function generateResume(userData, template = "professional") {
  console.log('[API] generateResume called');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        content: "Generated resume content",
        format: "pdf",
        downloadUrl: "/api/resumes/download/123"
      });
    }, 2000);
  });
}