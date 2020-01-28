
var burgerSpeed = 0.25;


var tlBugerToLeftArrow = gsap.timeline({paused:true});
tlBugerToLeftArrow.to("#top-line",{duration:burgerSpeed,y:8},"arrow")
.to("#bottom-line",{duration:burgerSpeed,y:-8},"arrow")
// scale down all the lines
.to(".lines",{duration:burgerSpeed, scaleX:.7},"arrow")
// form arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:1, rotate:0},"arrow")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:1, rotate:0},"arrow");


/* =================================================
    X to RIGHT ARROW animation
================================================= */
var tlXToRightArrow = gsap.timeline({paused:true});
tlXToRightArrow.to("#top-line",{duration:burgerSpeed, scaleX:.7, rotate:0},"start")
.to("#bottom-line",{duration:burgerSpeed, scaleX:.7, rotate:0},"start")
// form arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:1, rotate:0},"arrow")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:1, rotate:0},"arrow");


$("#burger-container").on("mouseenter", function(){
    console.log("mouseEnter");


    if(navigationIsOpen === false){
        tlBugerToLeftArrow.play();
    }else{
        tlXToRightArrow.play();
    }
});
