import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "../../util/bootnavbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
$(function() {
  $("#layout-header").bootnavbar();
  $(
    $("#layout-header")
      .find(".nav-menu")
      .children(".nav-item")[6]
  ).addClass("active");
});
