const config = {
    production: {
      apiUrl: ""
    },
    development: {
      apiUrl: "http://localhost:8080"
    }
  };

// const currentConfig = import.meta.env.NODE_ENV === 'production'
// ? config.production
// : config.development;
const currentConfig = config.development
export default currentConfig;