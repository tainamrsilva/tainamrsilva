const axios = require('axios');
const api = new axios.Axios();

module.exports = {
  preventSleep: {
    task: ({ env }) => {
      api.get(env('SITE_URL'));
    },
    options: {
      rule: "*/14 * * * *",
    },
  },
};