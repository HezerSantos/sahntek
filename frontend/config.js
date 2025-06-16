const config = {
    production: {
      apiUrl: import.meta.env.VITE_API_URL
    },
    development: {
      apiUrl: "http://localhost:808"
    }
  };

const currentConfig = import.meta.env.MODE === 'production'
? config.production
: config.development;

export default currentConfig;