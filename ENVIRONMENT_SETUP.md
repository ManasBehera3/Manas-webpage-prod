# Environment Setup Guide

This project supports multiple environments: Development, Staging, and Production.

## Available Scripts

### Development Environment
```bash
npm run start:dev
npm run build:dev
```

### Staging Environment
```bash
npm run start:staging
npm run build:staging
```

### Production Environment
```bash
npm run start:prod
npm run build:prod
```

## Environment Files

- `env.development` - Development environment variables
- `env.staging` - Staging environment variables  
- `env.production` - Production environment variables

## Environment Variables

| Variable | Description | Development | Staging | Production |
|----------|-------------|-------------|---------|------------|
| REACT_APP_ENV | Environment name | development | staging | production |
| REACT_APP_API_URL | API endpoint | localhost:3001 | staging-api | api |
| REACT_APP_DEBUG | Enable debug mode | true | false | false |
| REACT_APP_LOG_LEVEL | Logging level | debug | info | error |
| REACT_APP_ENABLE_ANALYTICS | Enable analytics | false | true | true |
| REACT_APP_APP_NAME | Application name | Manas Webpage (Dev) | Manas Webpage (Staging) | Manas Webpage |

## Using Environment Variables in Components

```javascript
import config, { isDev, log } from './config/environment';

// Access environment variables
console.log(config.apiUrl);
console.log(config.debug);

// Use helper functions
if (isDev()) {
  log('This is development mode');
}

// Conditional rendering based on environment
{config.isDevelopment && <DebugPanel />}
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install env-cmd for environment management:
   ```bash
   npm install --save-dev env-cmd
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

## Notes

- All environment variables must be prefixed with `REACT_APP_` to be accessible in React components
- The `env-cmd` package is used to load environment-specific variables
- Environment files are named without the `.env` prefix to avoid conflicts with Create React App 