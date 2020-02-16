let common = {
  //错误提示
  getQueryString: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },
  getPrdName: function(prdId) {
    let prdName = "";
    switch (prdId) {
      case "afm":
        prdName = "原子力显微镜";
        break;
      case "snom":
        prdName = "扫描近场光学显微镜";
        break;
      case "spectra":
        prdName = "原子力显微镜与拉曼联用系统";
        break;
      case "litescope":
        prdName = "电镜下原子力显微镜";
        break;
      case "wli":
        prdName = "白光干涉仪";
        break;
      case "basalt":
        prdName = "摩擦磨损试验机";
        break;
      case "ima":
        prdName = "Photonetc荧光高光谱成像系统";
        break;
      case "zephir":
        prdName = "Photonec高光谱相机";
        break;
      case "cytoviva":
        prdName = "Cytoviva高光谱显微镜";
        break;
      case "x-ray-zone-plate":
        prdName = "X射线波带片";
        break;
      case "x-ray-grating":
        prdName = "校准标样";
        break;
      case "soi":
        prdName = "SOI芯片订制";
        break;
      default:
        prdName = "原子力显微镜";
    }
    return prdName;
  },
  getMenuName: function(menuId) {
    let menuName = "";
    switch (menuId) {
      case "surface":
        menuName = "表面分析";
        break;
      case "medical":
        menuName = "生物医学";
        break;
      case "xray":
        menuName = "X-Ray相关";
        break;
      case "processing":
        menuName = "加工定制";
        break;
      default:
        menuName = "表面分析";
    }
    return menuName;
  },
  getMenuIndex(menuId) {
    let menuIndex = 1
    switch (menuId) {
      case "surface":
        menuIndex = 1;
        break;
      case "medical":
        menuIndex = 2;
        break;
      case "xray":
        menuIndex = 3;
        break;
      case "processing":
        menuIndex = 4;
        break;
      default:
        menuIndex = 1;
    }
    return menuIndex;
  }
};
export default common;
