
var leftArrowToX = gsap.timeline({paused:true});
leftArrowToX.to("#burger-container",{duration:0.5, rotate:-180},"start")
.to("#top-line",{duration:burgerSpeed, scaleX:.7, rotate:45, y:8},"start")
.to("#middle-line",{duration:burgerSpeed, scale:0},"start")
.to("#bottom-line",{duration:burgerSpeed, scaleX:.7, rotate:-45, y:-8},"start")
// remove arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:0, rotate:30},"start")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:0, rotate:-30},"start");

var rightArrowToBurger = gsap.timeline({paused:true});
rightArrowToBurger.to("#burger-container",{duration:0.5, rotate:0},"start")
.to("#top-line",{duration:burgerSpeed, scaleX:1, rotate:0, y:0},"start")
.to("#middle-line",{duration:burgerSpeed, scale:1},"start")
.to("#bottom-line",{duration:burgerSpeed, scaleX:1, rotate:0, y:0},"start")
// remove arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:0, rotate:30},"start")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:0, rotate:-30},"start");



$("#burger-container").on("click", burgerClicked);


function burgerClicked(){
    console.log("click");

    // you can see the nav, so you have to attach the class so that you can see it before you try to animate it
    $("nav").addClass("show-nav");

    if(navigationIsOpen === false){

        leftArrowToX.invalidate().restart();
        leftArrowToX.play();
        // call the animate background function
        animateNavbackground();
        // reset to true, because you can see the nav
        navigationIsOpen = true;
    }else{
        rightArrowToBurger.invalidate().restart();
        rightArrowToBurger.play();

        // call the animate background function to reverse
        animateNavbackground();
        // reset to false, because you can't'see the nav
        navigationIsOpen = false;
    }
}
