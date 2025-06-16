const config = {
    production: {
      apiUrl: ""
    },
    development: {
      apiUrl: "https://sahntek-backend-production.up.railway.app"
    }
  };

// const currentConfig = import.meta.env.NODE_ENV === 'production'
// ? config.production
// : config.development;
const currentConfig = config.development
export default currentConfig;