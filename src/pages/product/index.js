import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "../../util/bootnavbar.js";
import "../../util/jquery-rvnm.js";
import common from "../../util/index.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
import "./jquery-rvnm.scss";
import prd_common_temp from "../../tmpl/prd__common_temp.art";
$(function() {
  const prdId = common.getQueryString("prdId");
  const menuId = common.getQueryString("menuId");
  let pageIndex = common.getMenuIndex(menuId)

  $("#layout-header").bootnavbar();
  $(
    $("#layout-header")
      .find(".nav-menu")
      .children(".nav-item")[pageIndex]
  ).addClass("active");
  $("#navbar").rvnm({
    responsive: true,
    searchable: false
  });
  const prdName = common.getPrdName(prdId);
  const menuName = common.getMenuName(menuId);
  const pageParam = {
    menuName: menuName,
    prdName: prdName
  };
  $("#img_title").html(prdName)
  $("#menu_name").html(menuName)
  var html = prd_common_temp(pageParam);
  $("#prd_temp_location")
    .empty()
    .append(html);
});
