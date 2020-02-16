import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "../../util/bootnavbar.js";
import "../../util/jquery-paginator.js";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.scss";
import "./index.scss";
$(function() {
  $("#layout-header").bootnavbar();
  $(
    $("#layout-header")
      .find(".nav-menu")
      .children(".nav-item")[5]
  ).addClass("active");
  $("#myTab a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $('#pagination').Paging({pagesize:10,count:85,toolbar:true,callback: function(current, pagesize, pagecount) {
    console.log(current, pagesize, pagecount)
  }});
});
