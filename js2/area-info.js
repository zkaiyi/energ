// 获取树状图
$.ajax({
    type:'post',
    url:callurl + '/Region/Region/GetTreeList',
    dataType: "json",
    success:function (res) {
        console.log(res);
        $(".ZLname").text(res[0].MemberName);
        for(var i=0;i<res.length;i++){

            if(res[i].PID == "0"){

                var children = "";
                var pid = res[i].ID;
                for(var j=0;j<res.length;j++){
                    if(pid==res[j].PID){
                        var children02 = "";
                        var pid02 = res[j].ID;


                        for(var r=0;r<res.length;r++){
                            if(pid02==res[r].PID){
                                children02 +='<div class="xl01-list03-title" data-areaId="'+res[r].ID+'"><img class="xl01-list-img xl01-list03-img" src="img/info/border-left.png" />'+res[r].Name+'</div>'
                            }
                        }


                        children +='<div class="xl01-list02-container">\n' +
                            '                                    <div class="xl01-list02-title" data-areaId="'+res[j].ID+'"><img class="xl01-list-img xl01-list02-img" src="img/info/j.png" />'+res[j].Name+'</div>\n' +
                            '                                    <div class="xl01-list03 hide">\n' +
                            '                                       <div class="xl01-list03-container">'+children02+'</div>\n' +
                            '                                    </div>\n' +
                            '                                </div>'
                    }
                }






                var html = ' <div class="xl01-list">\n' +
                    '                            <div class="xl01-list-title" data-areaId="'+res[i].ID+'"><img class="xl01-list-img" src="img/info/j.png" />'+res[i].Name+'</div>\n' +
                    '                            <div class="xl01-list02 ">'+children+'</div>\n' +
                    '                        </div>'


                $(".need-waibu").append(html);

            }





        }
        // 触发
        $(".xl01-list-title").click(function () {
            if($(this).siblings().hasClass("hide")){

                $(this).siblings().slideDown();
                $(this).siblings().removeClass("hide");
                $(this).find("img").attr("src","img/info/j.png");

            }else {

                $(this).siblings().slideUp();
                $(this).siblings().addClass("hide");
                $(this).find("img").attr("src","img/info/ji.png");
            }
        });
        $(".xl01-list02-title").click(function () {
            if($(this).siblings().hasClass("hide")){

                $(this).siblings().slideDown();
                $(this).siblings().removeClass("hide");
                $(this).find("img").attr("src","img/info/ji.png");


            }else {

                $(this).siblings().slideUp();
                $(this).siblings().addClass("hide");
                $(this).find("img").attr("src","img/info/j.png");
            }
        });


    },
    error:function (xml) {
        console.log(xml);
    }
});

// 获取总量
function getenergy(ID,Type,STime,ETime) {
    var json = {
        ID:ID,
        Type:Type,
        STime:STime,
        ETime:ETime
    };

    if(Type === "1"){
        $(".ZLtype").text("电");
        $(".ZLdun").text("度");
        $(".ZLhd").text("m²");
    }
    if(Type === "2"){
        $(".ZLtype").text("水");
        $(".ZLdun").text("吨");
        $(".ZLhd").text("T");
    }

    if(Type === "3"){
        $(".ZLtype").text("气");
        $(".ZLdun").text("吨");
        $(".ZLhd").text("T");
    }

    $.ajax({
        type:'post',
        url:callurl + '/Region/Data/GetTotal',
        dataType: 'json',
        data:json,
        success:function (res02) {
            console.log(res02);
            $("#ZLhdl").html(res02.total);
            $("#ZLhao").html(res02.total);
            $("#ZLtoday").html(res02.today);
            $("#ZLyesterday").html(res02.yesterday);

        },error:function (xml02) {
            console.log(xml02)
        }
    });
}

// 耗电成本
function getchengben(ID,Type,STime,ETime,target) {
    var json02 = {
        ID:ID,
        Type:Type,
        STime:STime,
        ETime:ETime
    };
    $.ajax({
        type:'post',
        url:callurl + '/Region/Data/GetCost',
        dataType: 'json',
        data:json02,
        success:function (res03) {
            console.log(res03);
            var res03_list = res03.split(";");
            console.log(res03_list);
            $(".area-content02-list").html("");

            for(i=0;i<res03_list.length;i++){
                var html = ' <div class="area-content02-list-li clearfix">\n' +
                    '                        <div class="area-content02-list-li-fl fl">'+res03_list[i].split("：")[0]+'</div>\n' +
                    '                        <div class="area-content02-list-li-fr fr">'+res03_list[i].split("：")[1]+'<span>元</span></div>\n' +
                    '                    </div>'
                $(".area-content02-list").append(html);
            }



        },
        error:function (xml03) {
            console.log(xml03);
        }

    });


}


// 折现图

    var myChart = echarts.init(document.getElementById('table'));
    option = {
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        }],


        title: [{
            left: 'center',

        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: []
        }],
        yAxis: [{
            splitLine: {show: false}
        }],

        series: [{
            type: 'line',
            showSymbol: false,
            data: []
        }]
    };
    myChart.setOption(option);

// 折线图结束


// 折线图数据
function getzhexian(ID,Type,STime,ETime) {
    var json03 = {
        ID:ID,
        Type:Type,
        STime:STime,
        ETime:ETime
    };
    $.ajax({
        type:'post',
        url:callurl + '/Region/Data/GetDataList',
        dataType: 'json',
        data:json03,
        success:function (res04) {
            console.log(res04);
            var Time_list = res04.Time;
            var Time_n = []
            for(var i = 0;i<Time_list.length;i++){
               var Time_n02 = (Time_list[i]).substr(0,4)+'-'+(Time_list[i]).substr(4,2)+'-'+ (Time_list[i]).substr(6,2)

                Time_n.push(Time_n02);
            }

            myChart.setOption({
                xAxis: {
                    data:Time_n
                },
                series: [
                    {
                        data:res04.Data
                    },

                ]
            });
        },error:function (xml04) {
            console.log(xml04)
        }
    });



}


// 初始总量
var ID="0";
var Type = "1";
var STime = "";
var ETime = "";
getenergy(ID,Type,STime,ETime);
getchengben(ID,Type,STime,ETime);
getzhexian(ID,Type,STime,ETime);
sessionStorage.setItem("ID",ID);
sessionStorage.setItem("Type",Type);
sessionStorage.setItem("STime",STime);
sessionStorage.setItem("ETime",ETime);
// 点击id
$(document).on("click",".xl01-list-title",function () {
    var ID=$(this).attr("data-areaid");
    sessionStorage.setItem("ID",ID);
    var Type = sessionStorage.getItem("Type");
    var STime = sessionStorage.getItem("STime");
    var ETime = sessionStorage.getItem("ETime");
    getenergy(ID,Type,STime,ETime);
    getchengben(ID,Type,STime,ETime);
});
$(document).on("click",".xl01-list02-title",function () {
    var ID=$(this).attr("data-areaid");
    sessionStorage.setItem("ID",ID);
    var Type = sessionStorage.getItem("Type");
    var STime = sessionStorage.getItem("STime");
    var ETime = sessionStorage.getItem("ETime");
    getenergy(ID,Type,STime,ETime);
    getchengben(ID,Type,STime,ETime);
});
$(document).on("click",".xl01-list03-title",function () {
    var ID=$(this).attr("data-areaid");
    sessionStorage.setItem("ID",ID);
    var Type = sessionStorage.getItem("Type");
    var STime = sessionStorage.getItem("STime");
    var ETime = sessionStorage.getItem("ETime");
    getenergy(ID,Type,STime,ETime);
    getchengben(ID,Type,STime,ETime);
});
// 点击类型
$(document).on("click",".info-choose01-t-list",function () {
    $(this).index();
    var ZLindex = $(this).index();
    if(ZLindex == "0"){
        var Type="2";
        sessionStorage.setItem("Type",Type);
    }else if(ZLindex =="1"){
        var Type="1";
        sessionStorage.setItem("Type",Type);
    }else if(ZLindex == "2"){
        var Type="3";
        sessionStorage.setItem("Type",Type);
    }
    var ID = sessionStorage.getItem("ID");
    var STime = sessionStorage.getItem("STime");
    var ETime = sessionStorage.getItem("ETime");
    getenergy(ID,Type,STime,ETime);
    getchengben(ID,Type,STime,ETime);
});












