import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "../../util/bootnavbar.js";
import "../../util/jquery-rvnm.js";
import "bootstrap/dist/css/bootstrap.css";
import "./jquery-rvnm.scss";
import "../../styles/index.scss";
import "./index.scss";
$(function() {
  $("#layout-header").bootnavbar();
  var rvnMenu = $("#navbar").rvnm({
    //  mode: 'mobile',
    responsive: true,
    searchable: false,
    theme: "light"
  });
  //                rvnMenu.setMode('minimal');
  rvnMenu.setTheme("light");
});
