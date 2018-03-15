//通用表单验证

function check_frm(formid)
{
    var flag = true;
    var ipt_obj = $('#'+formid).find('input');
    ipt_obj.each(function(index,obj){
        var thisobj = $(this);
        switch(thisobj.attr('name'))
        {
            case 'info[name]':
                if(thisobj.val()==''){
                    alert('姓名不能为空');
                    flag =  false;
                    return false;
                }else{
                    var rel = new RegExp("^[\u4e00-\u9fa5]{2,4}$");
                    if (!rel.test(thisobj.val())){
                        alert("姓名格式有误");
                        flag =  false;
                        return false;
                    }
                }
                break;
            case 'info[mobile]':
                if(thisobj.val()==''){
                    alert('电话不能为空');
                    flag =  false;
                    return false;
                }else if(thisobj.val().length < 11){
                    alert('电话不能少于11位');
                    flag =  false;
                    return false;
                }else{
                    var rel = new RegExp("^(1)[0-9]{10}$");
                    if(!rel.test(thisobj.val()))
                    {
                        alert('电话格式不正确');
                        flag =  false;
                        return false;
                    }
                }
                break;
            case 'info[E_mail]':
                if(thisobj.val()==''){
                    alert('邮箱不能为空');
                    flag =  false;
                    return false;
                }
                break;
        }
    });
    if(flag == false) return false;
    return true;
}
/**
 * formid 表单ID
 * idval  formid的值
 * is_ajax 是否AJAX请求: true/false
 * alert_custom 是否自定义alert: true/false
 * num 图片编号：结合alert_custom使用
 * alert_service 是否弹出客服页面: true/false
 */
function ajaxPutData(formid,idval,url,is_ajax,alert_custom,num,alert_service)
{
    var is_ajax = is_ajax || false;
    var alert_custom = alert_custom || false;
    var num = num || 1;
    var alert_service = alert_service || false;
    var flag = true;
    if(check_frm(formid)==false) return false;
    if(is_ajax==true)
        $.post(url,$('#'+formid).serialize(),function(rs){
            if(rs.status == 0){alert(rs.msg);return false;}
            if(rs.status == 1){
                document.getElementById(formid).reset();
                if(alert_service==true){
                    alert(rs.msg);
                }
                if(alert_custom == false){
                    alert(rs.msg);
                    return true;
                }
                /*alert_custom==true && show_alert(num);*/
            }
        },'json');
}


function formatDate (strTime,sepStr) {
    var strTime = strTime || new Date();
    var sepStr = sepStr || '';
    var date = new Date(strTime);
    return date.getFullYear()+sepStr+(date.getMonth()+1)+sepStr+date.getDate();
}