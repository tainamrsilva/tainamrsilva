const axios = require('axios');
const api = new axios.Axios();

module.exports = {
  preventSleep: {
    task: () => {
      api.get('https://tainasilvateste.onrender.com');
    },
    options: {
      rule: "*/14 * * * *",
    },
  },
};