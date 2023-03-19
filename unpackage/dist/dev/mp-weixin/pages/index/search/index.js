"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  (_component_van_icon + _component_van_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let isShow = common_vendor.ref(false);
    function controlPopup() {
      isShow.value = !isShow.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(controlPopup),
        b: common_vendor.p({
          name: "search",
          size: "50rpx"
        }),
        c: common_vendor.p({
          name: "scan",
          size: "40rpx"
        }),
        d: common_vendor.o(controlPopup),
        e: common_vendor.p({
          show: common_vendor.unref(isShow),
          position: "left",
          overlay: "{{ true }}"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-205fdbfe"], ["__file", "D:/Vue/Vue3/YXLmusic/pages/index/search/index.vue"]]);
wx.createPage(MiniProgramPage);
