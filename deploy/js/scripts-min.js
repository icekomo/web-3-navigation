$(document).ready((function(){console.log("ready!")})),console.log("burger"),gsap.set(".lines",{transformOrigin:"50% 50%"}),gsap.set("#arrow-left-top",{transformOrigin:"0% 50%",rotate:30,alpha:0}),gsap.set("#arrow-left-bottom",{transformOrigin:"0% 50%",rotate:-30,alpha:0});var tlBugerToLeftArrow=gsap.timeline({paused:!0});tlBugerToLeftArrow.to("#top-line",{duration:.25,y:8},"arrow").to("#bottom-line",{duration:.25,y:-8},"arrow").to(".lines",{duration:.25,scaleX:.7},"arrow").to("#arrow-left-top",{duration:.25,alpha:1,rotate:0},"arrow").to("#arrow-left-bottom",{duration:.25,alpha:1,rotate:0},"arrow"),$("#burger-container").on("mouseenter",(function(){console.log("mouseEnter"),tlBugerToLeftArrow.play()})),$("#burger-container").on("mouseleave",(function(){console.log("mouseLeave"),tlBugerToLeftArrow.reverse()})),$("#burger-container").on("click",(function(){console.log("click")}));