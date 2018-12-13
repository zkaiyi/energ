var id = window.location.href.split("sbID=")[1];
var keyword =  window.location.href.split("keyword=")[1];
var keyword02 = decodeURI(keyword);




// 搜索

if(keyword){

    $(".type").html("空压站")


    // 获取所有设备
    var json = {
        Name:keyword02
    };
    $.ajax({
        type:'POST',
        url:callurl +'/Region/AirStation/SearchAir',
        data:json,
        success:function (res2) {
            console.log(res2);
            var data = res2;
            for(var i= 0 ;i<data.length;i++){
                var html = '<div class="col-container-item clearfix" data-typeid="'+data[i].ID+'">\n' +
                    '            <a >\n' +
                    '                <div class="col-container-item-fl fl"><img class="col-container-item-fl-img col-container-item-fl-img-adds01" src="img/col/col-item-icon.png" /><img class="col-container-item-fl-img col-container-item-fl-img-adds hide" src="img/col/col-item-iconss.png" /></div>\n' +
                    '                <div class="col-container-item-fr fl">\n' +
                    '                    <div class="col-container-item-fr-t1">空压站名称：<span class="col-container-item-fr-t1-span">'+data[i].Name+'</span></div>\n' +
                    '                    <div class="col-container-item-fr-t2">设  备 名 称：<span class="col-container-item-fr-t1-span">'+data[i].MemberName+'</span></div>\n' +
                    '                </div>\n' +
                    '            </a>\n' +
                    '        </div>';
                $(".col-container").append(html);


                $(document).on("click",".col-container-item",function(){
                    var typeid = $(this).attr("data-typeid");
                    window.location.href = "message.html?typeid="+typeid;
                });



            }


        },
        error:function (xml) {
            console.log(xml);
        }
    });
}else {

    // id区别

    if(id){
        // 小列表进去
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
                        '                <div class="col-container-item-fl fl"><img class="col-container-item-fl-img col-container-item-fl-img-adds01" src="img/col/col-item-icon.png" /><img class="col-container-item-fl-img col-container-item-fl-img-adds hide" src="img/col/col-item-iconss.png" /></div>\n' +
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

        // 标题
        var json05 = {
            ID:id
        };
        $.ajax({
            type:'POST',
            url:callurl +'/Device/Type/GetType',
            data:json05,
            success:function (res2) {
                console.log(JSON.parse(res2));
                $(".type").html(JSON.parse(res2).Name);
                var TypeName = JSON.parse(res2).Name;
                console.log(TypeName);


                $(document).on("click",".col-container-item",function(){
                    var typeid = $(this).attr("data-typeid");
                    // window.location.href = "message.html?typeid="+typeid;
                    window.location.href = "message.html?typeid="+typeid+"&TypeName="+encodeURI(TypeName);
                });




            },
            error:function (xml) {
                console.log(xml);
            }
        });
        // 标题结束










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
                        '                    <div class="col-container-item-fr-t1">空 压站名 称：<span class="col-container-item-fr-t1-span">'+data[i].Name+'</span></div>\n' +
                        '                    <div class="col-container-item-fr-t2">设  备 名 称：<span class="col-container-item-fr-t1-span">'+data[i].MemberName+'</span></div>\n' +
                        '                </div>\n' +
                        '            </a>\n' +
                        '        </div>';
                    $(".col-container").append(html);
                }

                $(".type").html("空压站")
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























}






