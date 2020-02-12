import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "../../util/bootnavbar.js";
import "../../util/jquery-rvnm.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
import "./jquery-rvnm.scss";
$(function() {
  $("#layout-header").bootnavbar();
  var rvnMenu = $("#navbar").rvnm({
    //  mode: 'mobile',
    responsive: true,
    searchable: false
  });
  //                rvnMenu.setMode('minimal');
  rvnMenu.setTheme("light");
});
