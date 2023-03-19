"use strict";
const pages_utils_request = require("../utils/request.js");
const getBannerApi = ({ url, method, type }) => {
  return pages_utils_request.request({
    url,
    method,
    type
  });
};
exports.getBannerApi = getBannerApi;
