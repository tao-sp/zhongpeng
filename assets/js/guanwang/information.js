$(function() {
    /*资讯中心tab页面切换*/
    (function() {
        var oInfoCat = $('#info-cat-contain'),
            oTabs = oInfoCat.find('.info-tabs-bar .info-tabs'),
        oTabCont = oInfoCat.find('.info-tabs-dropdown .info-tab-content'),
        oLine = oInfoCat.find('.info-tabs-bar .line') ;
        oTabCont.eq(0).show().siblings().hide();

        oTabs.children().on('click',function(){
            var index = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            oTabCont.eq(index).show().siblings().hide();
        });

    })();

});



