const baseConfig = require('./tailwind.config.ts');

const trackstackColors = {
  midnight: "#141B22",
  midnight95: "#1d2e3a",
  midnight90: "#2b4556",
  midnight80: "#516275",
  midnight70: "#687188",
  midnight60: "#8f95aa",
  midnight50: "#aaaec4",
  midnight40: "#ccd0da",
  midnight30: "#141B224D",
  midnight20: "#141B2233",
  midnight10: "#141B221A",

  brightGreen: "#7FD6BD",
  darkGreen: "#003D4B",
  brightBlue: "#83A0FB",
  darkBlue: "#1E196A",

  brightPurple: "#667eea",
  midPurple: "#6D00D2",
  darkPurple: "#610091",

  brightCerice: "#F2515D",
  midCerice: "#C52A51",
  darkCerice: "#93023e",

  brightYellow: "#FFC246",

  midOrange: "#FF9000",
  darkOrange: "#f25001",
};

module.exports = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...(baseConfig.theme?.extend || {}),
      colors: {
        ...(baseConfig.theme?.extend?.colors || {}),
        trackstack: trackstackColors,
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
    },
  },
};
