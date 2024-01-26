var boxes = $(".box"),
    stage = $(".stage"),
    $nav = $("#nav");

var angle = 360 / 13; // 13 is the number of '.box' elements

TweenLite.set(stage, {
  css: {
    perspective: 1100,
    transformStyle: "preserve-3d"
  }
});

boxes.each(function(index, element) {
  TweenLite.set(element, {
    css: {
      // rotationY: index * 360 / 13,
      rotationY: index * angle,
      transformOrigin: "50% 50% -420"
    }
  });
  
  element.dataset.rotationY = index * angle;
  
  /*TweenMax.to(element, 20, {
    css: {
      z:0.01,
      rotationY: "+=359"
    },
    repeat: -1, // 20
    ease: Linear.easeNone
  });*/
});