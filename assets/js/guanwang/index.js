/*
* 导航函数
* */
$(function() {
    (function() {
        var oNav = $('#g-nav'),
            oNavLi = oNav.find('.g-nav-item'),
            oSubNav = oNav.find('.g-nav-item .g-sub-nav-item'),
            lastOn = 0;

        oNavLi.each(function() {
            if($(this).hasClass('on')){
                lastOn = $(this).index();
            }
        });
        oSubNav.hide();
        oNavLi.on(
            {
                mouseenter: function() {
                    $(this).addClass('on').find('.g-sub-nav-item').stop().slideDown(300).end().siblings().removeClass('on');
                },
                mouseleave: function() {
                    $(this).removeClass('on').find('.g-sub-nav-item').stop().slideUp(1);
                    oNavLi.eq(lastOn).addClass('on');
                }
            }
        );
    })();

    /*首页最顶部的轮播*/
    (function() {
        $(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,trigger:"click"});
    })();

    /*滚动改变导航栏*/
    (function() {
        var scrollMax = $('#slideBox').outerHeight() - 80 ,
            oNav = $('#g-nav');

        $(window).scroll(function() {
            if($(window).scrollTop() > scrollMax) {
                oNav.addClass('g-scroll-header').removeClass('g-header');
            } else {
                oNav.addClass('g-header').removeClass('g-scroll-header');
            }
        });

    })();

    //业务体系手风琴效果
    (function() {
        var oBusi = $('#g-business');

        oBusi.find('.cat-list .cat-list-item').on('click',function() {
            if(!$(this).hasClass('on')){
                $(this).addClass('on').children('.initial-show').hide().end().children('.business-cat-content').show();
                $(this).siblings().removeClass('on').children('.initial-show').show().end().children('.business-cat-content').hide();
            }
        });



    })();
});

