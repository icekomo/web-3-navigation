
var tlBugerToLeftArrow = gsap.timeline();


$("#burger-container").on("mouseenter", function(){
    console.log("mouseEnter");

    tlBugerToLeftArrow.to("#top-line",{duration:0.25,y:8},"arrow")
    .to("#bottom-line",{duration:0.25,y:-8},"arrow")
    // scale down all the lines
    .to(".lines",{duration:0.25, scaleX:.7},"arrow")
    // form arrows
    .to("#arrow-left-top",{duration:0.25, alpha:1, rotate:0},"arrow")
    .to("#arrow-left-bottom",{duration:0.25, alpha:1, rotate:0},"arrow");

});
