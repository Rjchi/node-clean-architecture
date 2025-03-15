const axios = require("axios");

const httpClientAxiosPlugin = {
  get: async (url) => {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  },
};

module.exports = {
  httpAxios: httpClientAxiosPlugin,
};
