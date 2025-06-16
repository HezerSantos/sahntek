const config = {
    production: {
      apiUrl: "https://sahntek-api.hallowedvisions.com"
    },
    development: {
      apiUrl: "http://localhost:808"
    }
  };

// const currentConfig = import.meta.env.MODE === 'production'
// ? config.production
// : config.development;
const currentConfig = config.production
export default currentConfig;