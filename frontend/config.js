const config = {
    production: {
      apiUrl: ""
    },
    development: {
      apiUrl: "http://localhost:8080"
    }
  };

const currentConfig = process.env.NODE_ENV === 'production'
? config.production
: config.development;

export default currentConfig;