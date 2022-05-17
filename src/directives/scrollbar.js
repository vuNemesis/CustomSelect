import Vue from "vue";
import "../plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import PerfectScrollbar from "../plugins/perfect-scrollbar";

const scrollbarDirective = (() => {
  let ps = null;
  return {
    inserted: function (el, binding) {
      let options = binding.value ? binding.value : {};
      ps = new PerfectScrollbar(el, options);
    },
    unbind: function () {
      ps.destroy();
      ps = null;
    },
  };
})();

Vue.directive("scrollbar", scrollbarDirective);
