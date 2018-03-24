$(function() {
/*    var pageH = $(window).height(),
        pageW = $(window).width(),
        coefficient =  pageW/1920;//页面相对于1920设计稿的缩小系数 (我的笔记本为0.7115）

    $('.mid1200').css('width',1200*coefficient + 'px');*/

    /*导航*/
    (function() {
        var oHeader = $('#sj-header'),
            oNav = $('#sj-nav'),
            oSubNavMajor = oHeader.find('.nav-content');

        //初始隐藏
        oSubNavMajor.hide();
        oSubNavMajor.find('.courses').eq(0).show().siblings().hide();
        oSubNavMajor.each(function() {
            $(this).find('.majors li').eq(0).find('.line').show().end().siblings().find('.line').hide();
        });

        /*第一级导航*/
        oNav.find('.sj-nav-list .sj-nav-item').on({
            mouseenter:function() {
                $(this).addClass('on').siblings().removeClass('on');
                var index = $(this).index(),
                    oSubNavMajorOn = oHeader.find('.nav-content-'+index);

                if(oSubNavMajorOn.length){
                    oSubNavMajorOn.stop().slideDown(400).addClass('show').siblings().stop().hide(1).removeClass('show');

                    var courses = oSubNavMajorOn.find('.courses');

                    /*第二级导航*/
                    oSubNavMajorOn.find('.majors li').on({
                        mouseenter:function() {
                            var indx = $(this).index();
                            courses.eq(indx).stop().show().siblings().stop().hide();
                            $(this).addClass('active').find('.line').show().end().siblings().removeClass('active').find('.line').hide();
                        },
                        mouseleave:function() {
                        }
                    })
                }else{
                    oSubNavMajor.stop().hide(1).removeClass('show');
                }
            },
            mouseleave:function() {
                var index = $(this).index(),
                    oSubNavMajorOn = oHeader.find('.nav-content-'+index);

                if(oSubNavMajorOn.length){
                    oSubNavMajorOn.on('mouseleave',function() {
                        $(this).stop().slideUp(400).removeClass('show');
                    });
                }else{
                    oSubNavMajor.hide(1);
                }
            }
        });
    })();

    /*轮播*/
    (function() {
        /*首页最顶部的轮播*/
        if($(".slideBox-1").length){
            $(".slideBox-1").slide({mainCell:".bd ul",effect:"fold",trigger:"click",autoPlay:true});

            var oSlideBox = $("#slideBox-1"),
                PageH = $(window).height(),
                timer2 = null;

            function cssSet(PageH) {
                oSlideBox.find('.bd .bd-cont li').css('height',PageH);
            }
            cssSet(PageH);

            $(window).resize(function() {
                /*var PageH = $(window).height();
                clearTimeout(timer2);
                timer2 = setTimeout(function() {
                    cssSet(PageH);
                },40);*/
                location.reload();
            });
        }
        /*行业专家的轮播*/
        if($(".slideBox-2").length){
            $(".slideBox-2").slide({mainCell:".bd ul",effect:"fold",trigger:"click",autoPlay:true});
        }
        /*就业服务轮播*/
        if($(".slideBox-3").length){
            $(".slideBox-3").slide({mainCell:".bd ul",effect:"leftLoop",vis:4,trigger:"click",autoPlay:true});
        }
    })();


    /*校区地址的切换*/
    (function() {
        /*校区地址的切换*/
        var oAddress = $('#address'),
            otabs = oAddress.find('.slideBox-4 .hd li'),
            oBdCont = oAddress.find('.bd .bd-cont');
        oBdCont.eq(0).show().siblings().hide();
        otabs.on('mouseenter',function() {
           $(this).addClass('on').siblings().removeClass('on');
           var index = $(this).index();
           oBdCont.eq(index).show().siblings().hide();
        });

        /*百度地图*/
    })();


    /*悬浮窗函数*/
    (function() {
        var oFloat = $('#float-ad'),
            oLinks = oFloat.find('.interac-item'),
            oForm = oFloat.find('.float-frm-wrapper');
        oForm.hide();
        if(!oFloat.length){return;}
        oLinks.on({
                mouseenter: function(){
                    var index = $(this).index();
                    if(index === 1){
                        oForm.stop().show(500);
                    }
                    $(this).addClass('on').siblings().removeClass('on');
                },
                mouseleave:function(){
                    var index = $(this).index();
                    if(index === 1){
                        oForm.stop().hide(500);
                    }
                    $(this).removeClass('on');
                }
            }
        );

        /*表单的placeholder属性处理*/
        (function(){
            //判断是否支持placeholder
            function isPlaceholer(){
                return "placeholder" in document.createElement('input');
            }
            //不支持的代码
            if(!isPlaceholer()){
                var oGroup = $('.form-group');
                oGroup.each(function() {
                    var oSpan = $(this).children('span'),
                        oIpt = $(this).children('input[placeholder]'),
                        initVal = oIpt.attr('placeholder');
                    oSpan.show();

                    if(oIpt.val()!== ""){
                        oSpan.hide();
                    }else{
                        oSpan.show();
                    }
                    oSpan.on('click',function() {
                        $(this).hide();
                        oIpt.val('').focus();
                    });
                    oIpt.blur(function() {
                        if(oIpt.val()!== ""){
                            oSpan.hide();
                        }else{
                            oSpan.show();
                        }
                    });
                });
            }
        })();

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
