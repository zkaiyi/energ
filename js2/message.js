// var id = window.location.href.split("typeid=")[1];
var need_url = window.location.href.split("?")[1];
var a=need_url.split("&");       //将结果用&符分隔
var id = a[0].split("=")[1]; //参数值1




var json = {
    ID:id
};
$.ajax({
    type:'POST',
    url:callurl +'/Region/AirStation/GetInfo',
    data:json,
    success:function (res) {
        console.log(JSON.parse(res));
        var data = JSON.parse(res);
        $("#name").html(data.Info.Name);
        $("#username").html(data.Info.MemberName);
        var dataList = data.DeviceList;
        console.log(dataList);
        for(var i= 0 ;i<dataList.length;i++){
            var html = ' <div class="message-list message-list2 clearfix" data-typelist="'+dataList[i].ID+'">\n' +
                '                <div class="message-list-fl fl">'+dataList[i].DeviceType+'</div>\n' +
                '                <div class="message-list-fr fr">'+dataList[i].DeviceName+'</div>\n' +
                '            </div>';
            $(".menu-item-list-container").append(html);
        }


        $(".type").html("空压站")



    },
    error:function (xml) {
        console.log(xml);
    }
});



var TypeName = a[1].split("=")[1]; //参数值2
if(TypeName){



    var json = {
        ID:id
    };
    $.ajax({
        type:'POST',
        url:callurl +'/Device/Info/GetInfo',
        data:json,
        success:function (res) {
            console.log(JSON.parse(res));
            var data = JSON.parse(res);
            $("#name").html(data.Infor.reg.Name);
            $("#names").html("设备名称");
            $("#username").html(data.Infor.reg.MemberName);
            var InforList = data.Infor;
            console.log(InforList.dev);
            console.log(JSON.parse(InforList.dev.BaseInfo));
            var devList =  JSON.parse(InforList.dev.BaseInfo);
            var array = [];
            for(i in devList){
                array.push({
                    "key":i,
                    "value":devList[i]
                })
            }
            console.log(array)
            for(var i=0 ;i< array.length ;i++){
                    var html = ' <div class="message-list message-list2 clearfix" >\n' +
                        '                <div class="message-list-fl fl">'+array[i].key+'</div>\n' +
                        '                <div class="message-list-fr fr">'+array[i].value+'</div>\n' +
                        '            </div>';
                    $(".menu-item-list-container").append(html);
            }
            var  InforListItem = InforList.data;
            console.log(InforListItem)
            $(".type").html(decodeURI(TypeName));

        },
        error:function (xml) {
            console.log(xml);
        }
    });




}



