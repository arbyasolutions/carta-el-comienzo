(function () {
  function rand(seed) {
    var x = Math.sin(seed * 921.31) * 10000;
    return x - Math.floor(x);
  }
  function makeDrips(el, color, seed) {
    if (!el) return;
    var path = "M0 0 H1000 V";
    var x = 1000,
      i = 0;
    while (x > 0) {
      var w = 34 + rand(seed + i) * 70,
        l = 18 + rand(seed + i + 10) * 105;
      x -= w;
      path +=
        " 0 H" +
        Math.max(0, x + w * 0.6) +
        " V" +
        l +
        " Q" +
        Math.max(0, x + w * 0.3) +
        " " +
        (l + 14) +
        " " +
        Math.max(0, x + w * 0.1) +
        " " +
        l +
        " V0 H" +
        Math.max(0, x);
      i++;
    }
    path += " H0 Z";
    el.innerHTML =
      '<svg class="drip-svg" viewBox="0 0 1000 140" preserveAspectRatio="none" aria-hidden="true"><path d="' +
      path +
      '" fill="' +
      color +
      '"/></svg>';
  }
  window.Drips = {
    make: makeDrips,
    init: function () {
      makeDrips(document.querySelector(".js-hero-drips"), "#000000", 7);
      document.querySelectorAll(".js-section-drips").forEach(function (el, i) {
        makeDrips(el, el.dataset.color || "#000", 22 + i);
        if (
          window.gsap &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          gsap.fromTo(
            el,
            { scaleY: 0.2, transformOrigin: "top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top 85%",
                end: "top 25%",
                scrub: true,
              },
            },
          );
        }
      });
    },
  };
})();
