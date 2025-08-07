// Environment Configuration Utility
const config = {
  // Environment
  env: process.env.REACT_APP_ENV || 'development',
  
  // API Configuration
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  
  // Debug Configuration
  debug: process.env.REACT_APP_DEBUG === 'true',
  logLevel: process.env.REACT_APP_LOG_LEVEL || 'info',
  
  // Analytics
  enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  
  // App Configuration
  appName: process.env.REACT_APP_APP_NAME || 'Manas Webpage',
  
  // Environment-specific configurations
  isDevelopment: process.env.REACT_APP_ENV === 'development',
  isStaging: process.env.REACT_APP_ENV === 'staging',
  isProduction: process.env.REACT_APP_ENV === 'production',
};

// Helper functions
export const isDev = () => config.isDevelopment;
export const isStaging = () => config.isStaging;
export const isProd = () => config.isProduction;

export const log = (message, level = 'info') => {
  if (config.debug || level === 'error') {
    console.log(`[${config.env.toUpperCase()}] ${message}`);
  }
};

export default config; 