var id = window.location.href.split("typeid=")[1];


var json01 = {
    ID:id,
    Type:"空压机"
};

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetInfoByType',
    data:json01,
    success:function (res) {
        // console.log(res);
        // console.log(JSON.parse(res));
        var data = JSON.parse(res);
        var list =  data.Infor[0];
        // console.log(list.DeviceType);
        $(".kyj .gplot-content-title").html(list.DeviceType);
        $(".kyj").removeClass("hide");
        var lists = list.DataList;
        // console.log(lists)
        for(var i=0;i<lists.length;i++){
            var html = '<div class="gplot-content-t">'+lists[i].Name+'&nbsp;:&nbsp;'+lists[i].Value+'</div>'
            $(".kyj").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});
// =================================================================================
var json02 = {
    ID:id,
    Type:"干燥机"
};

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetInfoByType',
    data:json02,
    success:function (res) {
        console.log(res);
        console.log(JSON.parse(res));
        var data = JSON.parse(res);
        var list =  data.Infor[0];
        // console.log(list.DeviceType);
        $(".gzj").removeClass("hide");
        $(".gzj .gplot-content-title").html(list.DeviceType);

        var lists = list.DataList;
        console.log(lists)
        for(var i=0;i<lists.length;i++){
            var html = '<div class="gplot-content-t">'+lists[i].Name+'&nbsp;:&nbsp;'+lists[i].Value+'</div>'
            $(".gzj").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});
// =================================================================================

// =================================================================================
var json03 = {
    ID:id,
    Type:"流量计"
};

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetInfoByType',
    data:json03,
    success:function (res) {
        // console.log(res);
        // console.log(JSON.parse(res));
        var data = JSON.parse(res);
        var list =  data.Infor[0];
        // console.log(list.DeviceType);
        $(".llj").removeClass("hide");
        $(".llj .gplot-content-title").html(list.DeviceType);
        var lists = list.DataList;
        // console.log(lists)
        for(var i=0;i<lists.length;i++){
            var html = '<div class="gplot-content-t">'+lists[i].Name+'&nbsp;:&nbsp;'+lists[i].Value+'</div>'
            $(".llj").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});
// =================================================================================

// =================================================================================
var json04 = {
    ID:id,
    Type:"电表"
};

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetInfoByType',
    data:json04,
    success:function (res) {
        // console.log(res);
        // console.log(JSON.parse(res));
        var data = JSON.parse(res);
        var list =  data.Infor[0];
        // console.log(list.DeviceType);
        $(".db").removeClass("hide");
        $(".db .gplot-content-title").html(list.DeviceType);
        var lists = list.DataList;
        // console.log(lists)
        for(var i=0;i<lists.length;i++){
            var html = '<div class="gplot-content-t">'+lists[i].Name+'&nbsp;:&nbsp;'+lists[i].Value+'</div>'
            $(".db").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});
// =================================================================================

// =================================================================================
var json05 = {
    ID:id,
    Type:"压力变送器"
};

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetInfoByType',
    data:json05,
    success:function (res) {
        // console.log(res);
        // console.log(JSON.parse(res));
        var data = JSON.parse(res);
        var list =  data.Infor[0];
        $(".hcl").removeClass("hide");
        // console.log(list.DeviceType);
        $(".hcl .gplot-content-title").html(list.DeviceType);
        var lists = list.DataList;
        // console.log(lists)
        for(var i=0;i<lists.length;i++){
            var html = '<div class="gplot-content-t">'+lists[i].Name+'&nbsp;:&nbsp;'+lists[i].Value+'</div>'
            $(".hcl").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});
// =================================================================================


// =================================================================================
var json06 = {
    ID:id,
    Type:"露点仪"
};

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetInfoByType',
    data:json06,
    success:function (res) {
        // console.log(res);
        // console.log(JSON.parse(res));
        var data = JSON.parse(res);
        var list =  data.Infor[0];
        // console.log(list.DeviceType);
        $(".ldy").removeClass("hide");
        $(".ldy .gplot-content-title").html(list.DeviceType);
        var lists = list.DataList;
        // console.log(lists)
        for(var i=0;i<lists.length;i++){
            var html = '<div class="gplot-content-t">'+lists[i].Name+'&nbsp;:&nbsp;'+lists[i].Value+'</div>'
            $(".ldy").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});
// =================================================================================


// 返回前一页面
$(document).on("click",".ret-contaienr-img",function () {
    window.history.go(-1);
});








