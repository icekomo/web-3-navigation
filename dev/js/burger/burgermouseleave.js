

$("#burger-container").on("mouseleave", function(){
    console.log("mouseLeave");

    if(navigationIsOpen === false){
        tlBugerToLeftArrow.reverse();
    }else{
        tlXToRightArrow.reverse();
    }
});
