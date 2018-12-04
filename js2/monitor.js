var id = window.location.href.split("typeid=")[1];
function GetInfo(){

    var json = {
        ID:id
    };
    $.ajax({
        type:'POST',
        url:callurl +'/Region/AirStation/GetInfo',
        data:json,
        success:function (res) {
            var dataList = JSON.parse(res).DeviceList;
            var index = 0;
            var GetDataInfo = function(){
                if(index<dataList.length){
                    var data = dataList[index];
                    index = index +1;
                    $.ajax({
                        type:'POST',
                        url:callurl +'/Device/Info/GetDataInfo',
                        data:{
                            ID:data.ID
                        },
                        async:false,
                        success:function (res2) {
                            var cls = "";
                            var style = ""
                            if(index==1){
                                cls = "menu-item-list-title-fr-img-add02";
                                style="block"
                            }
                            var html02 = ""
                            var html01 = ""
                            for(var j= 0 ;j<res2.length;j++){
                                html02 += '<div class="menu-item-list-content-list clearfix" data-DataName="'+res2[j].Name+'">' +
                                    ' <div class="menu-item-list-content-list-fl fl">'+res2[j].Name+'</div>' +
                                    ' <div class="menu-item-list-content-list-fr fr ">'+res2[j].Value+'<img class="milclf-img" src="img/col-list/menu-right.png" /></div>' +
                                    ' </div>'
                            }
                            html01 += '<div class="menu-item-list  '+cls+'" data-areaid="'+data.ID+'">' +
                                '                <div class="menu-item-list-title clearfix" data-areaid="'+data.ID+'">' +
                                '                    <div class="menu-item-list-title-fl fl">'+data.DeviceName+'</div>' +
                                '                    <div class="menu-item-list-title-fr fr"><img class="menu-item-list-title-fr-img  " src="img/col-list/menu-left.png" /></div>' +
                                '                </div>' +
                                '                <div class="menu-item-list-content" style="display:'+style+'">'+html02+'</div>' +
                                '            </div>'

                            $(".menu-item-list-container").append(html01);

                        },
                        error:function (xml2) {

                        }
                    });
                    GetDataInfo()
                }

            }
            GetDataInfo()
        },
        error:function (xml) {
            console.log(xml);
        }
    });
}
GetInfo()


$(document).on("click",".menu-item-list-title",function () {
    var  dataListId = $(this).attr("data-areaid");
    var mt = $(this).siblings();
    if(mt.hasClass("hide")){
        mt.html("");


    }
});



$(document).on("click",".menu-item-list-content-list",function () {
    var need_ID = $(this).parent().parent().attr("data-areaid");
    var DataName =$(this).attr("data-DataName");
    console.log(need_ID);
    console.log(DataName);
});

var typeid =id;
$(document).on("click","#menu01",function () {
    window.location.href = "message.html?typeid="+typeid;
});
$(document).on("click","#menu03",function () {
    window.location.href = "gplot.html?typeid="+typeid;
});
$(document).on("click","#menu04",function () {
    window.location.href = "report.html?typeid="+typeid;
});