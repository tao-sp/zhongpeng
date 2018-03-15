$(function() {
    //点击展开招聘信息
    (function() {
        var oEmploy = $('#j-employ'),
            oItem = oEmploy.find('ul .item');

        oItem.eq(0).addClass('exhibition').children('.desc').show().end().siblings().removeClass('exhibition').children('.desc').hide();
        oItem.on('click',function() {
            if(!$(this).hasClass('.exhibition')){
                $(this).addClass('exhibition').children('.desc').show(400).end().siblings().removeClass('exhibition').children('.desc').hide(400);
            }
        });
    })();
});