$(function(){"use strict";function s(){$(".circle").addClass("expand"),$(".burger").addClass("open"),$(".icon-bar1, .icon-bar2, .icon-bar3").addClass("collapse"),$(".menu").fadeIn(),$(".burger").attr("aria-expanded","true"),setTimeout(function(){$(".icon-bar2").hide(),$(".icon-bar1").addClass("rotate30"),$(".icon-bar3").addClass("rotate150")},70),setTimeout(function(){$(".icon-bar1").addClass("rotate45"),$(".icon-bar3").addClass("rotate135")},120)}function e(){$(".burger").removeClass("open"),$(".icon-bar1").removeClass("rotate45").addClass("rotate30"),$(".icon-bar3").removeClass("rotate135").addClass("rotate150"),$(".circle").removeClass("expand"),$(".menu").fadeOut(),$(".burger").attr("aria-expanded","false"),setTimeout(function(){$(".icon-bar1").removeClass("rotate30"),$(".icon-bar3").removeClass("rotate150")},50),setTimeout(function(){$(".icon-bar2").show(),$(".icon-bar1, .icon-bar2, .icon-bar3").removeClass("collapse")},70)}var a=window.location.pathname.toLowerCase(),i="others";"/content/infosys-web/en.html"!==a&&"/"!==a&&"/jp"!==a&&"/jp/"!==a&&"/cn"!==a&&"/cn/"!==a&&"/mx"!==a&&"/mx/"!==a&&"/de"!==a&&"/de/"!==a&&"/content/infosys-web/en/australia.html"!==a&&"/australia.html"!==a||(i="home");var n=0!==$(this).scrollTop();$(window).bind("scroll",function(){"home"!==i&&($(window).scrollTop()>n?($(".scrollbg-show").addClass("show-strip"),$(".menu-bg").addClass("reverseMenu"),$(".burger > .icon-bar1").addClass("icon-bar11"),$(".burger > .icon-bar2").addClass("icon-bar21"),$(".burger > .icon-bar3").addClass("icon-bar31"),$(".hidden-list").addClass("visible-list"),$(".menu-bg, .burger").css("margin-top","12px"),$(".search__color").find(".search-icon").css("top","20px"),$(".search__color").find(".btn1").css("color","#000")):(n=0!==$(this).scrollTop(),$(".scrollbg-show").removeClass("show-strip"),$(".menu-bg").removeClass("reverseMenu"),$(".burger > .icon-bar1").removeClass("icon-bar11"),$(".burger > .icon-bar2").removeClass("icon-bar21"),$(".burger > .icon-bar3").removeClass("icon-bar31"),$(".hidden-list").removeClass("visible-list"),$(".menu-bg, .burger").css("margin-top","35px"),$(".search__color").find(".search-icon").css("top","47px"),$(".search__color").find(".btn1").css("color","#fff")))}),$(document).on("click",".burger",function(){$(".search-wrap.search-icon").css("z-index","0"),$(this).hasClass("open")?($("html, body").removeClass("hidden-scroll"),$(".fix-menu").removeClass("opacity-zero"),$(".circle").removeClass("bg-trans"),$(".listmenu").css("z-index","9999"),$(".progressbar,.hero-list1").css("display","block"),$(".listmenu .hero-list").css("display","block"),$(".search-icon").attr("style","z-index: 9999 !important"),$(".user-icon").css({opacity:"1","z-index":"9999"}),$(".circle").css({opacity:"0",visibility:"hidden"}),$(".navbar-default.navbar-fixed-top.show-strip").length>0?$(".search-icon").css("top","20px"):$(".search-icon").css("top","47px"),e()):($("html, body").addClass("hidden-scroll"),$(".listmenu").css("z-index","2"),$(".progressbar,.hero-list1").css("display","none"),$(".listmenu .hero-list").css("display","none"),$(".search-icon").attr("style","z-index: 0 !important"),$(".user-icon").css({opacity:"0","z-index":"0"}),$(".circle").css({opacity:"0",visibility:"hidden"}),s())}),$(document).on("mouseover focus",".burger",function(){$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("mouseover focus",".hover-menu-hide",function(){$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".fix-menu").addClass("opacity-zero"),$(".circle").addClass("bg-trans")}),$(document).on("mouseleave focus",".hover-menu-hide",function(){$(".fix-menu").removeClass("opacity-zero"),$(".circle").removeClass("bg-trans")}),$(window).width()<1025?($(document).on("click",".visible1024-cross",function(){$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("click",".nyn",function(){$(".nyn-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("click",".industries",function(){$(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("click",".services",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("click",".platforms",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("click",".iki-text",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css({display:"none"}),$(".iki-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("click",".about-txt",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")})):($(document).on("mouseover focus",".nyn",function(){$(".nyn-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("mouseover focus",".industries",function(){$(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("mouseover focus",".services",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("mouseover focus",".platforms",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("mouseover focus",".iki-text",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css({display:"none"}),$(".iki-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")}),$(document).on("mouseover focus",".about-txt",function(){$(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({display:"block",visibility:"visible","animation-name":""}),$(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none"),$(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display","none")})),$("#LinkUpdateProfile").click(function(s){s.preventDefault(),window.location.href=$("#UpdateProfileUrl").attr("href")}),$("#LinkSignOut").click(function(s){s.preventDefault(),window.location.href=$("#SignOutPrefixUrl").attr("href")+$("#SignOutPostfixUrl").attr("href")})}),$(document).ready(function(){$("#sml_ht_home_banner, #L2_home_banner, #hero_slider").prepend('<div id="main-cnt"> </div>'),$("body").on("keydown",function(s){9==s.which&&$(".wow").css("visibility","visible")}),$("#k, #btn-search-close").attr("tabindex","-1")}),$("#btn-search-close").click(function(){$("#k, #btn-search-close").attr("tabindex","-1"),$(".search-icon .btn1").focus()}),$("#btn-search").click(function(){$("#k, #btn-search-close").removeAttr("tabindex")});




if ($(window).width() >= 1025) {

    // Keyboard ENTER focus --- NYN sub menu
    let nynFocus = document.querySelector('#nyn-sub-menu');
    nynFocus.addEventListener('click', function(){
        $(".nyn-menu .submenu-portion .top_menu_cont_wrapper a").focus();
    });
    // Keyboard Tab
    $('.nyn-menu .submenu-portion a.nyn_link').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".menuItems ul li a.industries").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.nyn-menu .submenu-portion .top_menu_cont_wrapper a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();                   
                $(".menuItems ul li a.nyn").focus();
            }
        }
    });



    // Keyboard ENTER focus --- INDUSTRIES sub menu
    let industFocus = document.querySelector('#industries-sub-menu');
    industFocus.addEventListener('click', function(){
        $(".industries-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.industries-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".menuItems ul li a.services").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.industries-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".menuItems ul li a.industries").focus();
            }
        }
    });



    // Keyboard ENTER focus --- SERVICES  sub menu
    let servFocus = document.querySelector('#services-sub-menu');
    servFocus.addEventListener('click', function(){
        $(".services-menu .submenu-portion ul.services-first-focus li a").focus();
    });
    // Keyboard Tab
    $('.services-menu .submenu-portion a.services-last-focus').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".menuItems ul li a.platforms").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.services-menu .submenu-portion ul.services-first-focus li a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".menuItems ul li a.services").focus();
            }
        }
    });


    // Keyboard ENTER focus --- PLATFORMS sub menu
    let platfFocus = document.querySelector('#platforms-sub-menu');
    platfFocus.addEventListener('click', function(){
        $(".platforms-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.platforms-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".menuItems ul li a.living-labs").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.platforms-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".menuItems ul li a.platforms").focus();
            }
        }
    });



    // Keyboard ENTER focus --- IKI sub menu
    let ikiFocus = document.querySelector('#iki-sub-menu');
    ikiFocus.addEventListener('click', function(){
        $(".iki-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.iki-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".menuItems ul li a.about-txt").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.iki-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".menuItems ul li a.iki-text").focus();
            }
        }
    });



    // Keyboard ENTER focus --- ABOUT  sub menu
    let aboutFocus = document.querySelector('#about-sub-menu');
    aboutFocus.addEventListener('click', function(){
        $(".aboutus-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.aboutus-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".menuItems ul li a.investors").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.aboutus-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".menuItems ul li a.about-txt").focus();
            }
        }
    });


} else {

                // MOBILE
    // Keyboard Enter focus --- NYN sub menu
    let nynFocus = document.querySelector('#nyn-sub-menu');
    nynFocus.addEventListener('click', function(){
        $(".nyn-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({ display: "block", visibility: "visible", "animation-name": "" }),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        $(".nyn-menu .submenu-portion .top_menu_cont_wrapper a").focus();
    });
    // Keyboard Tab
    $('.nyn-menu .submenu-portion a.nyn_link').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

            $(".menuItems ul li a.industries").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.nyn-menu .submenu-portion .top_menu_cont_wrapper a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

                $(".menuItems ul li a.nyn").focus();
            }
        }
    });



    // Keyboard Enter focus --- INDUSTRIES sub menu
    let industFocus = document.querySelector('#industries-sub-menu');
    industFocus.addEventListener('click', function(){
        $(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({ display: "block", visibility: "visible", "animation-name": "" }),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        $(".industries-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.industries-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

            $(".menuItems ul li a.services").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.industries-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

                $(".menuItems ul li a.industries").focus();
            }
        }
    });



    // Keyboard Enter focus --- SERVICES  sub menu
    let servFocus = document.querySelector('#services-sub-menu');
    servFocus.addEventListener('click', function(){
        $(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({ display: "block", visibility: "visible", "animation-name": "" }),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        $(".services-menu .submenu-portion ul.services-first-focus li a").focus();
    });
    // Keyboard Tab
    $('.services-menu .submenu-portion a.services-last-focus').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
            
            $(".menuItems ul li a.platforms").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.services-menu .submenu-portion ul.services-first-focus li a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
                
                $(".menuItems ul li a.services").focus();
            }
        }
    });



    // Keyboard Enter focus --- PLATFORMS sub menu
    let platfFocus = document.querySelector('#platforms-sub-menu');
    platfFocus.addEventListener('click', function(){
        $(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({ display: "block", visibility: "visible", "animation-name": "" }),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        $(".platforms-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.platforms-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

            $(".menuItems ul li a.living-labs").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.platforms-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

                $(".menuItems ul li a.platforms").focus();
            }
        }
    });


    // Keyboard Enter focus --- IKI sub menu
    let ikiFocus = document.querySelector('#iki-sub-menu');
    ikiFocus.addEventListener('click', function(){
        $(".iki-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({ display: "block", visibility: "visible", "animation-name": "" }),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        $(".iki-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.iki-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
            
            $(".menuItems ul li a.about-txt").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.iki-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
                
                $(".menuItems ul li a.iki-text").focus();
            }
        }
    });


    // Keyboard Enter focus --- ABOUT  sub menu
    let aboutFocus = document.querySelector('#about-sub-menu');
    aboutFocus.addEventListener('click', function(){
        $(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css({ display: "block", visibility: "visible", "animation-name": "" }),
        $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
        $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        $(".aboutus-menu .submenu-portion div:nth-child(2) ul li:first-child a").focus();
    });
    // Keyboard Tab
    $('.aboutus-menu .submenu-portion div:last-child ul li:last-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
            $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

            $(".menuItems ul li a.investors").focus();
        }
    });
    // Keyboard Shift + Tab
    $('.aboutus-menu .submenu-portion div:nth-child(2) ul li:first-child a').on('keydown', function(e) {
        if (e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $(".nyn-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".iki-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");

                $(".menuItems ul li a.about-txt").focus();
            }
        }
    });


}




// Keyboard enter focus
// $(document).on('keyup','.visible1024-cross', function(e) {
//     if(e.keyCode==13){ 
//         alert("close");
//         $(".menuItems a.logo-link").focus();
//     }    
// });

// $(document).on('click','.visible1024-cross', function(e) {
//     $(".menuItems a.logo-link").focus();   
// });




// Keyboard Tab go to logo
$('.menuItems ul li.social-icons:last-child').on('keydown', function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        // $(".menuItems a.logo-link").focus();
        $(".hamburger-menu a.burger.open").focus();
    }
});


// ESC tab close burger menu
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($(".burger").hasClass("open")) {
            // alert("check esc");
            $("html, body").removeClass("hidden-scroll"),
            $(".burger").removeClass("open"),
            $(".icon-bar1").removeClass("rotate45").addClass("rotate30"),
            $(".icon-bar3").removeClass("rotate135").addClass("rotate150"),
            $(".circle").removeClass("expand"),
            $(".menu").fadeOut(),
            $(".burger").attr("aria-expanded", "false");
            //setTimeout(function () {
                $(".icon-bar1").removeClass("rotate30"), $(".icon-bar3").removeClass("rotate150");
            //}, 50),
            //setTimeout(function () {
                $(".icon-bar2").show(), $(".icon-bar1, .icon-bar2, .icon-bar3").removeClass("collapse");
            //}, 70);
        }
    }
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($("header .navbar").hasClass("show-strip")) {
            // alert("search icon");
            $(".search__color").find(".search-icon").css("top", "20px")
        }
    }
});

// aria-pressed true and false
$(document).on("click", ".burger", function () {
    if (!$(this).hasClass('open')) {
        $('.burger').attr("aria-pressed","true");
    } else {
        $('.burger').attr("aria-pressed","false");
    }
});
	


/*
$( document ).ready(function() {
	prpath = window.location.pathname;
	if(prpath.indexOf("/content/infosys-web/en/newsroom/press-releases/", 0) == 0){
     $("h1").parent().prepend('<div class="listen-controls"><span>Listen</span><button type="button" id="listen-start" class="listen-buttons-icon"><i class="fa fa-play" aria-hidden="true"></i></button><button type="button" id="listen-resume" class="listen-buttons-icon"><i class="fa fa-play" aria-hidden="true"></i></button><button type="button" id="listen-pause" class="listen-buttons-icon"><i class="fa fa-pause" aria-hidden="true"></i></button><button type="button" id="listen-cancel" class="listen-buttons-icon"><i class="fa fa-times" aria-hidden="true"></i></button></div>');
	
	$("head").append("<link rel='stylesheet' href='/content/dam/infosys-web/burger-menu/en/css/listen-controls.css' type='text/css'>");
		
		
		//Text to Speech
 const msg = new SpeechSynthesisUtterance();
let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();
};

        document.querySelector("#listen-start").addEventListener("click", () => {
            document.querySelector('#listen-pause').style.display = 'block';
            document.querySelector('#listen-cancel').style.display = 'block';
            var test = document.getElementById('press_releases').textContent;
		msg.rate = 1.4;
		//	msg.voice = voices[2];
			msg.text = test;
            window.speechSynthesis.speak(msg);
            document.querySelector('#listen-start').style.display = 'none';
        });

        document.querySelector("#listen-pause").addEventListener("click", () => {
            // Pause the speechSynthesis instance
            document.querySelector('#listen-resume').style.display = 'block';
            window.speechSynthesis.pause();
            document.querySelector('#listen-pause').style.display = 'none';
        });

        document.querySelector("#listen-resume").addEventListener("click", () => {
            // Resume the paused speechSynthesis instance
            document.querySelector('#listen-pause').style.display = 'block';
            window.speechSynthesis.resume();
            document.querySelector('#listen-resume').style.display = 'none';

        });

        document.querySelector("#listen-cancel").addEventListener("click", () => {
            // Cancel the speechSynthesis instance
            document.querySelector('#listen-pause').style.display = 'none';
            document.querySelector('#listen-cancel').style.display = 'none';
            document.querySelector('#listen-resume').style.display = 'none';
            window.speechSynthesis.cancel();
            document.querySelector('#listen-start').style.display = 'block';
        });

        window.onbeforeunload = function() {
            document.querySelector('#listen-pause').style.display = 'none';
            document.querySelector('#listen-cancel').style.display = 'none';
            document.querySelector('#listen-resume').style.display = 'none';
            window.speechSynthesis.cancel();
            document.querySelector('#listen-start').style.display = 'block';
        }
}
});
*/