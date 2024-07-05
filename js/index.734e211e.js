!(function () {
  "use strict";
  window.addEventListener("load", function () {
    var e,
      s,
      t = $("html"),
      a = ($(".preloader"), $(".curr_lang")),
      n = localStorage.lang,
      i = new URLSearchParams(window.location.search).get("lang"),
      l = ["en", "tr"],
      o = document.getElementById("wheel-btn"),
      d = document.getElementById("wheel-spinner"),
      r = (d.getAttribute("data-img"), 0),
      c = 0;
    for (e = 0; e < l.length; e++)
      if (n === l[e] || i === l[e]) {
        for (s = 0; s < l.length; s++) t.removeClass(l[s]);
        t.addClass(l[e]), (n = l[e]);
      }
    for (e = 0; e < l.length; e++) n === l[e] && (c = 1);
    0 === c && (t.addClass("en"), (n = "en")),
      l.forEach(function (e) {
        t.removeClass(e).addClass(n);
      }),
      $('.lang_list_item[data-lang="' + n + '"]')
        .addClass("curr")
        .siblings()
        .removeClass("curr"),
      a.html($('.lang_list_item[data-lang="' + n + '"]').html());
    var p = $(".lang_switcher"),
      _ = $(".lang_list"),
      u = $(".lang_list_item");
    p.click(function () {
      _.toggleClass("act");
    }),
      u.click(function () {
        var e = $(this).data("lang"),
          s = $(".lang_list_item")
            .map(function (e, s) {
              return $(s).data("lang");
            })
            .toArray()
            .join(" ");
        t.removeClass(s).addClass(e),
          (localStorage.lang = e),
          $('.lang_list_item[data-lang="' + e + '"]')
            .addClass("curr")
            .siblings()
            .removeClass("curr"),
          a.html($(this).html());
      }),
      $(document).mouseup(function (e) {
        p.is(e.target) || 0 !== p.has(e.target).length || _.removeClass("act");
      });
    var w = document.getElementById("popup"),
      m = document.getElementById("popup-btn"),
      g = document.getElementById("popup-window-1"),
      h = document.getElementById("popup-window-2");
    switch (
      (o.addEventListener("click", function () {
        0 == r &&
          ((o.disabled = !0),
          d.classList.remove("wheel__spinner_animated"),
          d.classList.add("wheel__spinner_win_1"),
          r++,
          setTimeout(function () {
            w.classList.add("popup__show"),
              g.classList.add("popup__window_show"),
              (localStorage.spin_75002 = "spin_1");
          }, 3500));
      }),
      m.addEventListener("click", function () {
        d.classList.remove("wheel__spinner_win_1"),
          w.classList.remove("popup__show"),
          g.classList.remove("popup__window_show"),
          d.classList.add("wheel__spinner_win_2"),
          (r = 2),
          setTimeout(function () {
            w.classList.add("popup__show"),
              h.classList.add("popup__window_show"),
              (localStorage.spin_75002 = "spin_2");
          }, 3500);
      }),
      localStorage.spin_75002)
    ) {
      case "spin_1":
        (o.disabled = !0),
          d.classList.remove("wheel__spinner_animated"),
          (d.style.transform = "rotate(810deg)"),
          w.classList.add("popup__show"),
          g.classList.add("popup__window_show"),
          (r = 1);
        break;
      case "spin_2":
        (o.disabled = !0),
          d.classList.remove("wheel__spinner_animated"),
          (d.style.transform = "rotate(1570deg)"),
          w.classList.add("popup__show"),
          h.classList.add("popup__window_show"),
          (r = 2);
    }
  }),
    (window.showHidePassword = function (e) {
      var s = document.getElementById("password-input");
      return (
        "password" == s.getAttribute("type")
          ? (e.classList.add("view"), s.setAttribute("type", "text"))
          : (e.classList.remove("view"), s.setAttribute("type", "password")),
        !1
      );
    });
})();
//# sourceMappingURL=index.734e211e.js.map
