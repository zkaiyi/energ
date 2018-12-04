var id = window.location.href.split("typeid=")[1];
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
    },
    error:function (xml) {
        console.log(xml);
    }
});
var typeid =id;
// $(document).on("click","#menu01",function () {
//     window.location.href = "message.html?typeid="+typeid;
// });
$(document).on("click","#menu02",function () {
    window.location.href = "monitor.html?typeid="+typeid;
});
$(document).on("click","#menu03",function () {
    window.location.href = "gplot.html?typeid="+typeid;
});
$(document).on("click","#menu04",function () {
    window.location.href = "report.html?typeid="+typeid;
});