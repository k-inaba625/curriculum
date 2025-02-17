$('button').click(function(){
    $(this).toggleClass("active");
    var buttonFlg = $(this).hasClass("active");
    if (buttonFlg === true) {
        onCurtain();
    } else {
        offCurtain();
    }

    function onCurtain(){
        $(".left").animate({width:'0%'}, 2000);
        $(".right").animate({width:'0%'}, 2000);
    }

    function offCurtain(){
        $(".left").animate({width:'50%'}, 2000);
        $(".right").animate({width:'50%'}, 2000);
    }
})