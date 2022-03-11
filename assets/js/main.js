$(window).on("load",()=>{
  setTimeout(()=> {
    $(".loader").hide();
    $("head").append(`<meta name="theme-color" content="#1876f3">`)
  }, 1000);
});
// change mode
var f = 0;
$("#mode").click(function() {
    if (f == 0) {
        f = 1;
        $("body,.container,.settings,img,.text").addClass("dark");
        $(this).html("light_mode");
    } else {
        f = 0;
        $("body,.container,.settings,img,.text").removeClass("dark");
        $(this).html("dark_mode");
    }
});
var faAbout = ["درباره <span>من</span>", "توسعهدهنده جلویی با دست بر روی تجربه طراحی، توسعه و نگهداری وب. متخصص در درک نیاز مشتریان و ارائه پروژه ها بر اساس آن است. به شدت ماهر در همکاری با اعضای تیم برای حمل محصولات زیبا در مهلت. نام من قاسم، توسعه دهنده وب افغانستان و طراح است. من در شولگرا دیکاتراکت ولایت بلخ متولد شدم، من همیشه رویای فردی هستم که جهان را تغییر می دهد، بنابراین من شروع به برنامه نویسی و توسعه در حال حاضر کردم - برنامه نویسی و توسعه یک روزه، یکی از راه های موفقیت آمیز برای تغییر جهان و توسعه آن است. ", "about <span>me</span>", "A Front-end Developer with hands on experience of designing, developing and maintaining web. Adept at understanding the requirement of the clients and delivering projects accordingly. Highly skilled at collaborating with team members to ship beautiful products within deadlines. My name is Qasim, an Afghan Web Developer & Designer. I was born in Sholgara Dictrict of Balkh province Afghanistan, I always dreamed to be a person who changes the world, therefore I started coding and developing cause now - a - days coding and developing is the one of successful way to change the world and develop it."];
$("#lang").click(() => {
    if (f == 0) {
        f = 1;
        $(".text h1").html(faAbout[0]);
        $(".text p").html(faAbout[1]);
        $(".container,.hero img,.text").addClass("rtl");
    } else {
        f = 0;
        $(".text h1").html(faAbout[2]);
        $(".text p").html(faAbout[3]);
        $(".container,.hero img,.text").removeClass("rtl");
    }
});
// play background music
var music = new Audio("assets/js/music.mp3");
$("#play").click(function() {
    if (music.paused) {
        music.play();
        $(this).html("pause_circle");
        $(".top-bar .ad-anim div").css("animation-play-state", "running");
    } else {
        music.pause();
        $(this).html("play_circle");
        $(".top-bar .ad-anim div").css("animation-play-state", "paused");
    }
});
$(".top-bar #more").click(function() {
    if (f == 0) {
        f = 1;
        $(".social,#more").addClass("act");
        $(this).html("close")
    } else {
        f = 0;
        $(".social,#more").removeClass("act");
        $(this).html("more_vert")
    }
})