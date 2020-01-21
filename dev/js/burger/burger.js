console.log("burger");

// set up the tansform origins for the burger lines
gsap.set(".lines",{transformOrigin: "50% 50%"});

// set up the left arrow
gsap.set("#arrow-left-top",{transformOrigin: "0% 50%", rotate: 30, alpha:0});
gsap.set("#arrow-left-bottom",{transformOrigin: "0% 50%", rotate: -30, alpha:0});
