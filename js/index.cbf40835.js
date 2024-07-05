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
    p = 0;
  for (e = 0; e < l.length; e++)
    if (n === l[e] || i === l[e]) {
      for (s = 0; s < l.length; s++) t.removeClass(l[s]);
      t.addClass(l[e]), (n = l[e]);
    }
  for (e = 0; e < l.length; e++) n === l[e] && (p = 1);
  0 === p && (t.addClass("en"), (n = "en")),
    l.forEach(function (e) {
      t.removeClass(e).addClass(n);
    }),
    $('.lang_list_item[data-lang="' + n + '"]')
      .addClass("curr")
      .siblings()
      .removeClass("curr"),
    a.html($('.lang_list_item[data-lang="' + n + '"]').html());
  var _ = $(".lang_switcher"),
    c = $(".lang_list"),
    w = $(".lang_list_item");
  _.click(function () {
    c.toggleClass("act");
  }),
    w.click(function () {
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
      _.is(e.target) || 0 !== _.has(e.target).length || c.removeClass("act");
    });
  var m = document.getElementById("popup"),
    u = document.getElementById("popup-btn"),
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
          m.classList.add("popup__show"),
            g.classList.add("popup__window_show"),
            (localStorage.spin_75002 = "spin_1");
        }, 3500));
    }),
    u.addEventListener("click", function () {
      d.classList.remove("wheel__spinner_win_1"),
        m.classList.remove("popup__show"),
        g.classList.remove("popup__window_show"),
        d.classList.add("wheel__spinner_win_2"),
        (r = 2),
        setTimeout(function () {
          m.classList.add("popup__show"),
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
        m.classList.add("popup__show"),
        g.classList.add("popup__window_show"),
        (r = 1);
      break;
    case "spin_2":
      (o.disabled = !0),
        d.classList.remove("wheel__spinner_animated"),
        (d.style.transform = "rotate(1570deg)"),
        m.classList.add("popup__show"),
        h.classList.add("popup__window_show"),
        (r = 2);
  }
}),
  (window.showHidePassword = function (e) {
    let s = document.getElementById("password-input");
    return (
      "password" == s.getAttribute("type")
        ? (e.classList.add("view"), s.setAttribute("type", "text"))
        : (e.classList.remove("view"), s.setAttribute("type", "password")),
      !1
    );
  });
//# sourceMappingURL=index.cbf40835.js.map
