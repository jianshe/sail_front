import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../util/bootnavbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
import "swiper/css/swiper.css";
import Swiper from "swiper";
$(function() {
  $("#layout-header").bootnavbar();
  new Swiper(".swiper-container", {
    effect: "fade",
    autoplay: {
      disableOnInteraction: false,
      delay: 2500
    },
    loop: true,
    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    fadeEffect: {
      crossFade: true
    }
  });
});
