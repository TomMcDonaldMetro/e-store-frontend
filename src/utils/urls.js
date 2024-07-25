export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isStaging = process.env.NODE_ENV === 'staging'
export const websiteUrl = isProduction
  ? 'https://localhost:8080/api/books'
  : 'http://localhost:3001/books'