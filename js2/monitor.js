var need_url = window.location.href.split("?")[1];
var a=need_url.split("&");       //将结果用&符分隔
var id = a[0].split("=")[1]; //参数值1




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
            console.log(dataList);

            for(var i=0;i<dataList.length;i++){
                var children='';
                var DataLists = dataList[i].DataList;
                console.log(DataLists);
                for(var j=0;j<DataLists.length;j++){
                    children +='<div class="menu-item-list-content-list clearfix" data-DataName="'+DataLists[j].Name+'">\n' +
                        '                        <div class="menu-item-list-content-list-fl fl">'+DataLists[j].Name+'</div>\n' +
                        '                        <div class="menu-item-list-content-list-fr fr">'+DataLists[j].Value+'<img class="milclf-img" src="img/col-list/menu-right.png" /></div>\n' +
                        '                    </div>'
                }
                var html = '<div class="menu-item-list menu-item-list-title-fr-img-add02" data-areaid="'+dataList[i].ID+'">\n' +
                    '                <div class="menu-item-list-title clearfix" data-areaid="'+dataList[i].ID+'">\n' +
                    '                    <div class="menu-item-list-title-fl fl">'+dataList[i].DeviceName+'</div>\n' +
                    '                    <div class="menu-item-list-title-fr fr"><img class="menu-item-list-title-fr-img" src="img/col-list/menu-left.png" /></div>\n' +
                    '                </div>\n' +
                    '                <div class="menu-item-list-content ">'+children+'</div>\n' +
                    '            </div>'

                $(".menu-item-list-container").append(html)


            }



            $(document).on("click",".menu-item-list-content-list",function () {
                var need_ID = $(this).parent().parent().attr("data-areaid");
                var DataName =$(this).attr("data-DataName");
                var TypeName = $(".type").text();
                var realuel = id;
                console.log(DataName);
                window.location.href = "history.html?need_ID="+need_ID+"&DataName="+encodeURI(DataName)+"&TypeName="+encodeURI(TypeName)+"&real="+encodeURI(realuel);
                window.event.returnValue = false;
            });


            $(".type").html("空压站")


        },
        error:function (xml) {
            console.log(xml);
        }
    });



}
GetInfo()


if(a[1].split("=")[1]){
    var json02 = {
        ID:id
    }
    $.ajax({
        type:'POST',
        url:callurl +'/Device/Info/GetDataInfo',
        data:json02,
        success:function (res) {
            console.log(res);

            for(var i=0;i<res.length;i++){
                var html02 ='<div class="menu-item-list-content-list clearfix" data-DataName="'+res[i].Name+'">\n' +
                    '                        <div class="menu-item-list-content-list-fl fl">'+res[i].Name+'</div>\n' +
                    '                        <div class="menu-item-list-content-list-fr fr">'+res[i].Value+'<img class="milclf-img" src="img/col-list/menu-right.png" /></div>\n' +
                    '                    </div>'

                $(".menu-item-list-container").append(html02)
            }


            $(document).on("click",".menu-item-list-content-list",function () {
                var need_ID =id;
                var DataName =$(this).attr("data-DataName");
                // var TypeName = $(".type").text();
                var TypeName = decodeURI(a[1].split("=")[1]);
                console.log(decodeURI(a[0].split("=")[1]))
                var realuel = id;
                console.log(DataName);
                window.location.href = "history.html?need_ID="+need_ID+"&DataName="+encodeURI(DataName)+"&TypeName="+encodeURI(TypeName)+"&real="+encodeURI(realuel);
                window.event.returnValue = false;
            });

            $(".type").html(decodeURI(TypeName));


        },
        error:function (xml) {
            console.log(xml);
        }
    });
    
}














