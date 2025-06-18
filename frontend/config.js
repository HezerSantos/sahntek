const config = {
    production: {
      apiUrl: "https://sahntek-api.hallowedvisions.com"
    },
    development: {
      apiUrl: "http://localhost:8080"
    }
  };

// const currentConfig = import.meta.env.NODE_ENV === 'production'
// ? config.production
// : config.development;

const currentConfig = config.production
export default currentConfig;