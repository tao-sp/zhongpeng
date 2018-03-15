$(function() {
    /*资讯中心tab页面切换*/
    (function() {
        var oInfoCat = $('#info-cat-contain'),
            oTabs = oInfoCat.find('.info-tabs-bar .info-tabs'),
        oTabCont = oInfoCat.find('.info-tabs-dropdown .info-tab-content'),
        oLine = oInfoCat.find('.info-tabs-bar .line') ;
        oTabCont.eq(0).show().siblings().hide();

        oTabs.children().on('mouseenter',function(){
            var index = $(this).index();
            oTabCont.eq(index).show().siblings().hide();
            oLine.stop().animate({
                left:(400*index),
            },400)
        });

    })();


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

    /*悬浮窗函数*/

    (function() {
        var oFloat = $('#float-ad'),
            oLinks = oFloat.find('.float-interaction .interac-item'),
            oForm = oFloat.find('.float-frm-wrapper');
        oForm.hide();

        oLinks.on({
            mouseenter: function(){
                var index = $(this).index();
                if(index === 0){
                    oForm.show();
                }
                $(this).find('.link').addClass('on').end().siblings().children('.link').removeClass('on');
            },
            mouseleave:function(){
                var index = $(this).index();
                if(index === 0){
                    oForm.hide();
                }
                $(this).find('.link').removeClass('on');
            }
        }
        );

    })();

    /*回到顶部函数；当点击跳转链接后，回到页面顶部位置 */
    (function() {
        $("#backTop").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    })();








});



