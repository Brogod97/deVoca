// temp

(function () {
  var doms = "";
  var $m = $(".progress");
  var $data = $m.find("span");
  var data = $m.data("percent");
  var com = Math.round((data / 100) * 360);
  var dur = 2000;

  var getVendorPrefix = function () {
    var body = document.body || document.documentElement,
      style = body.style,
      transition = "Transition",
      vendor = ["Moz", "Webkit", "ms"],
      lastGage,
      i = 0;
    while (i < vendor.length) {
      if (typeof style[vendor[i] + transition] === "string") {
        return vendor[i];
      }
      i++;
    }
    return false;
  };
  var prefix = getVendorPrefix();
  var transform = prefix + "Transform";

  for (var i = 0; i <= com; i++) {
    doms = '<div class="gage-bar"></div>';
    $m.append(doms);
    $(".gage-bar:last").css(transform, "rotate(" + i + "deg)");
  }

  //$m.append(doms);

  $m.find("div").each(function (index, item) {
    $(item)
      .stop()
      .delay(index * 5)
      .fadeIn(50);
  });

  for (var j = 0; j <= data; j++) {
    (function (index) {
      var time = (360 / 100) * index * 5;
      setTimeout(function () {
        $data.text(index + "%");
      }, time);
    })(j);
  }
})();
