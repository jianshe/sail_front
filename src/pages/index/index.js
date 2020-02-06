import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "../../util/bootnavbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
import "swiper/css/swiper.css";
import Swiper from "swiper";
$(function() {
  $("#layout-header").bootnavbar();
  $(window).scroll(function() {
    //小屏幕下的导航条折叠
    if ($(window).width() < 768) {
      //点击导航链接之后，把导航选项折叠起来
      $("#navbar a").click(function() {
        $("#navbar").collapse("hide");
      });
      //滚动屏幕时，把导航选项折叠起来
      $(window).scroll(function() {
        $("#navbar").collapse("hide");
      });
    }
  });
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
