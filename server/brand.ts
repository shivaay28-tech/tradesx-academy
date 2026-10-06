export const BRAND = {
  id: 'tradesx-academy',
  name: 'TradesX Academy',
  shortName: 'TradesX',
  engineName: 'TradesX Engine',
  company: 'TradesX Academy',
  url: 'https://www.tradesxacademy.com',
  host: 'tradesxacademy.com',
  storagePrefix: 'tradesx.academy',
  demoStudentEmail: 'student@tradesxacademy.com',
  demoAdminEmail: 'admin@tradesxacademy.com',
  colors: {
      "navy": "#ddd4ff",
      "navy800": "#c8b8ff",
      "navy700": "#b09bff",
      "navy600": "#efeaff",
      "baazex": "#6d4aff",
      "baazex600": "#5534e0",
      "bright": "#a78bfa",
      "accent": "#4c1d95",
      "ink": "#1a1033",
      "muted": "#6b6284",
      "canvas": "#f7f5ff",
      "line": "#ddd6f5",
      "onButton": "#ffffff",
      "glow": "109 74 255"
  },
} as const

export type Brand = typeof BRAND
