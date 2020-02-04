import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../util/bootnavbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
import prdImg from "../../../assets/prd-img.png";
import titBg from "../../../assets/bg-tit.png";
$(function() {
  $("#img_test").attr("src", prdImg);
  $("#layout-header").bootnavbar();
});
