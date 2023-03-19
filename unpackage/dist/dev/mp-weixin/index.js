"use strict";
const common_vendor = require("./common/vendor.js");
const pages_api_index = require("./pages/api/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let interval = common_vendor.ref(4e3);
    let duration = common_vendor.ref(500);
    let banners = common_vendor.reactive([]);
    let params = common_vendor.reactive({
      url: "/banner",
      method: "GET",
      type: "2"
    });
    async function getBanner() {
      const res = await pages_api_index.getBannerApi(params);
      let arr = res.data.banners;
      arr.forEach((item) => {
        banners.push(item);
      });
    }
    getBanner();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(banners), (item, k0, i0) => {
          return {
            a: item.imageUrl,
            b: item.encodeId
          };
        }),
        b: common_vendor.unref(interval),
        c: common_vendor.unref(duration)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ecc1c07"], ["__file", "D:/Vue/Vue3/YXLmusic/pages/index/banner/index.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
