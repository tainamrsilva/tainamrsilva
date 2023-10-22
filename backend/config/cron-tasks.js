const fetch = require('node-fetch').default;

module.exports = {
  preventSleep: {
    task: () => {
      fetch('https://tainasilvateste.onrender.com/heartbeat');
    },
    options: {
      rule: "*/14 * * * *",
    },
  },
};