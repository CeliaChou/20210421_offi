$(document).ready(function() {
    $(".myTabs").each(function() {
    
        var $myTabs = $(this);
    
        $myTabs.find(".tab_content").hide().first().show();
        $myTabs.find("ul.tabs li:first").addClass("active").show();
    
        $myTabs.find("ul.tabs li").click(function() {
            var $this = $(this);
    
            $this.addClass("active").siblings().removeClass("active");
            $myTabs.find(".tab_content").hide();
    
            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();
    
            return false;
        });
    });
});
$(function(){
    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,  
        dots: true,
        arrows: false,
    });
});
$( ".newstab h4" ).click(function() {
    $('.newstab').removeClass('newstab_active');
    $(this).parent().addClass('newstab_active');
    });
    $( ".part2_tabs h5" ).click(function() {
    $('.part2_tabs').removeClass('part2_tabs_active');
    $(this).parent().addClass('part2_tabs_active');
    });

    $(function(){
    $('.slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,  
        dots: true,
        arrows: true,
    });
});
$( ".news_list li a" ).click(function() {
    $('.reword_content').fadeIn(1000);
});
$( ".sign-btn" ).click(function() {
    $('.sign-box').removeClass('signin');
    $(this).parent().addClass('signin');
});
particlesJS(
    "particles-js", {
        "particles":{"number":{"value":115,"density":{"enable":false,"value_area":800}},
        "color":{"value":"#ebd057"},
        "shape":{"type":"polygon",
        "stroke":{"width":0,"color":"#000000"},
        "polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
        "opacity":{"value":0.5291259800856225,
        "random":true,
        "anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
        "size":{"value":3,"random":true,
        "anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},
        "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":8,"direction":"top-left",
        "random":true,"straight":false,
        "out_mode":"out",
        "bounce":false,
        "attract":{"enable":false,"rotateX":600,"rotateY":600}}},
        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},
        "onclick":{"enable":false,"mode":"repulse"},
        "resize":true},
        "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
        "bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},
        "repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
        "retina_detect":true});