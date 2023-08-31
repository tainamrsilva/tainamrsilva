const fetch = require('node-fetch').default;

module.exports = {
  preventSleep: {
    task: () => {
      fetch('https://tainasilvateste.onrender.com');
    },
    options: {
      rule: "*/14 * * * *",
    },
  },
};