"use strict";
const common_vendor = require("../../common/vendor.js");
const baseURl = "http://localhost:3000";
const request = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseURl + options.url,
      method: options.method || "GET",
      data: options.data || {},
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
  }).catch((err) => {
    console.log("111", err);
  });
};
exports.request = request;
