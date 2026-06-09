// Professional design system - extracted from your styles
export const T = {
  // Core colors - corporate, trustworthy
  primary: "#0A66C2",
  primaryDark: "#004182",
  primaryLight: "#E8F0FE",
  secondary: "#1E2A3E",
  accent: "#2C7A4D",
  warning: "#D83A3A",
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

export const css = {
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