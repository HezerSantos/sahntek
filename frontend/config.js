const config = {
    production: {
      apiUrl: ""
    },
    development: {
      apiUrl: "sahntek-api.hallowedvisions.com"
    }
  };

// const currentConfig = import.meta.env.NODE_ENV === 'production'
// ? config.production
// : config.development;
const currentConfig = config.development
export default currentConfig;