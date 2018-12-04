// 获取设备类型
$.ajax({
    type:'POST',
    url:callurl +'/Device/Type/GetList',
    success:function (res) {
        console.log(JSON.parse(res));
        var data = JSON.parse(res);
        for(var i= 0 ;i<data.length;i++){
            var html = '<div class="classify-02-fl fl" data-sbID="'+data[i].ID+'">\n' +
                '                    <a >\n' +
                '                        <img class="classify-02-fl-img" src="'+data[i].Ico+'" />\n' +
                '                        <div class="classify-02-fl-t">'+data[i].Name+'</div>\n' +
                '                    </a>\n' +
                '                </div>'
            $(".classify-02").append(html);
        }
    },
    error:function (xml) {
        console.log(xml);
    }
});

// 获取所有设备
$(document).on("click",".classify-02-fl",function () {
    var sbID = $(this).attr("data-sbID");
    window.location.href = "station-col.html?sbID="+sbID;
});
