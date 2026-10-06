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
    navy: '#06152B',
    baazex: '#0066FF',
    bright: '#00A3FF',
    canvas: '#F4F8FC',
    ink: '#172033',
  },
} as const

export type Brand = typeof BRAND
