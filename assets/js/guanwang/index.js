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
        if($(".slideBox").length){
            $(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,trigger:"click"});
        }
    })();

    /*滚动改变导航栏*/
    (function() {
        var oNav = $('#g-nav'),
            scrollMax;
        if($(".slideBox").length){
            scrollMax = $('#slideBox').outerHeight() - 80;
        }else{
            scrollMax = 500;
        }

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
        if(oBusi.length ){
            oBusi.find('.cat-list .cat-list-item').on('click',function() {
                if(!$(this).hasClass('on')){
                    $(this).addClass('on').children('.initial-show').hide().end().children('.business-cat-content').show();
                    $(this).siblings().removeClass('on').children('.initial-show').show().end().children('.business-cat-content').hide();
                }
            });
        }
    })();

    /*悬浮窗函数*/
    (function() {
        var oFloat = $('#float-ad'),
            oLinks = oFloat.find('.float-interaction .interac-item'),
            oForm = oFloat.find('.float-frm-wrapper');
        oForm.hide();
        if(!oFloat.length){return;}
        oLinks.on({
                mouseenter: function(){
                    var index = $(this).index();
                    if(index === 0){
                        oForm.show(500);
                    }
                    $(this).find('.link').addClass('on').end().siblings().children('.link').removeClass('on');
                },
                mouseleave:function(){
                    var index = $(this).index();
                    if(index === 0){
                        oForm.hide(500);
                    }
                    $(this).find('.link').removeClass('on');
                }
            }
        );

    })();

    /*回到顶部函数；当点击跳转链接后，回到页面顶部位置 */
    (function() {
        if(!$("#backTop").length){return;}
        $("#backTop").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    })();
});

