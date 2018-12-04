var id = window.location.href.split("sbID=")[1];
if(id){
    // 获取所有设备
    var json = {
        ID:id
    };
    $.ajax({
        type:'POST',
        url:callurl +'/Device/Type/GetDevList',
        data:json,
        success:function (res2) {
            console.log(res2);
            var data = res2;
            for(var i= 0 ;i<data.length;i++){
                var html = '<div class="col-container-item clearfix" data-typeid="'+data[i].ID+'">\n' +
                    '            <a >\n' +
                    '                <div class="col-container-item-fl fl"><img class="col-container-item-fl-img" src="img/col/col-item-icon.png" /></div>\n' +
                    '                <div class="col-container-item-fr fl">\n' +
                    '                    <div class="col-container-item-fr-t1">空压站名称：<span class="col-container-item-fr-t1-span">'+data[i].Name+'</span></div>\n' +
                    '                    <div class="col-container-item-fr-t2">设  备 名 称：<span class="col-container-item-fr-t1-span">'+data[i].MemberName+'</span></div>\n' +
                    '                </div>\n' +
                    '            </a>\n' +
                    '        </div>';
                $(".col-container").append(html);
            }


        },
        error:function (xml) {
            console.log(xml);
        }
    });

    if(id==2){
        $(".type").html("空压机")
    }else  if(id==3){
        $(".type").html("干燥机")
    }else  if(id==4){
        $(".type").html("流量计")
    }else  if(id==5){
        $(".type").html("电表")
    }else  if(id==6){
        $(".type").html("压力变送器")
    }else  if(id==7){
        $(".type").html("露点仪")
    }

}else {


    // 获取空压站列表
    $.ajax({
        type:'POST',
        url:callurl +'/Region/AirStation/GetList',
        success:function (res) {
            console.log(JSON.parse(res));
            var data = JSON.parse(res);
            for(var i= 0 ;i<data.length;i++){
                var html = '<div class="col-container-item clearfix" data-typeid="'+data[i].ID+'">\n' +
                    '            <a >\n' +
                    '                <div class="col-container-item-fl fl"><img class="col-container-item-fl-img" src="img/col/col-item-icon.png" /></div>\n' +
                    '                <div class="col-container-item-fr fl">\n' +
                    '                    <div class="col-container-item-fr-t1">设  备 名 称：<span class="col-container-item-fr-t1-span">'+data[i].Name+'</span></div>\n' +
                    '                    <div class="col-container-item-fr-t2">设  备 用 户：<span class="col-container-item-fr-t1-span">'+data[i].MemberName+'</span></div>\n' +
                    '                </div>\n' +
                    '            </a>\n' +
                    '        </div>';
                $(".col-container").append(html);
            }
        },
        error:function (xml) {
            console.log(xml);
        }
    });

    $(document).on("click",".col-container-item",function(){
        var typeid = $(this).attr("data-typeid");
        window.location.href = "message.html?typeid="+typeid;
    });



}
