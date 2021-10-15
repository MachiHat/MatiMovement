// FILTER BUTTONS

$(".list-btn").click(function(){
    var attr = $(this).attr("data-li");

    $(".list-btn").removeClass("active");
    $(this).addClass("active");

    $(".excercise-item").hide();

    if(attr == "biceps"){
        $("." + attr).show();
    }
    else if(attr == "triceps"){
        $("." + attr).show();
    }
    else if(attr == "deltoids"){
        $("." + attr).show();
    }
    else if(attr == "pectorals"){
        $("." + attr).show();
    }
    else if(attr == "abdominals"){
        $("." + attr).show();
    }
    else if(attr == "obliques"){
        $("." + attr).show();
    }
    else if(attr == "dorsals"){
        $("." + attr).show();
    }
    else if(attr == "trapezius"){
        $("." + attr).show();
    }
    else if(attr == "scapular"){
        $("." + attr).show();
    }
    else if(attr == "lumbar"){
        $("." + attr).show();
    }
    else{
        $(".excercise-item").show();
    }
});

// VIDEO BUTTONS

/* --- WIP --- WIP --- WIP ---
function buttonOnVideo() {
    var videoButtons = document.getElementbyClassName("excercise-item")[i];
    for (var i = 0; i < videoButtons.length; i++) {
        var videoButton = videoButtons[i];
        videoButton.addEventListener("click", fa.classList.toggle("onVideo"));
    }
}
*/

$("#video-item-1 button").click(function(){
    $("#video-1").addClass("onVideo");
});

$("#video-item-2 button").click(function(){
    $("#video-2").addClass("onVideo");
});

$("#video-item-3 button").click(function(){
    $("#video-3").addClass("onVideo");
});

$("#video-item-4 button").click(function(){
    $("#video-4").addClass("onVideo");
});

$("#video-item-5 button").click(function(){
    $("#video-5").addClass("onVideo");
});

$("#video-item-6 button").click(function(){
    $("#video-6").addClass("onVideo");
});

$("#video-item-7 button").click(function(){
    $("#video-7").addClass("onVideo");
});

$("#video-item-8 button").click(function(){
    $("#video-8").addClass("onVideo");
});

$("#video-item-9 button").click(function(){
    $("#video-9").addClass("onVideo");
});

$("#video-item-10 button").click(function(){
    $("#video-10").addClass("onVideo");
});

$("#video-item-11 button").click(function(){
    $("#video-11").addClass("onVideo");
});

$("#video-item-12 button").click(function(){
    $("#video-12").addClass("onVideo");
});

$("#video-item-13 button").click(function(){
    $("#video-13").addClass("onVideo");
});

$("#video-item-14 button").click(function(){
    $("#video-14").addClass("onVideo");
});
