$(function() {
    (function() {
        /*
        SuperSlide组合注意：
        1、内外层mainCell、targetCell、prevCell、nextCell等对象不能相同，除非特殊应用；
        2、注意书写顺序，通常先写内层js调用，再写外层js调用
        */

        /* 内层图片滚动切换 */
        jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:5,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});

        /* 外层tab切换 */
        jQuery(".slideGroup").slide({titCell:".parHd li",mainCell:".parBd"});

        /*荣誉资质轮播  autoPlay:true,*/
        jQuery(".ab-honour .slideBox").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:4,trigger:"click",prevCell:".sPrev",nextCell:".sNext"});
    })();

    /*关于我们发展历程*/
    (function() {
        var oDevelop = $('#ab-development'),
            oList = oDevelop.find('.parHd .tab-list li');
        oList.on('mouseenter',function() {
            $(this).addClass('on').siblings().removeClass('on');
        });

    })();
});