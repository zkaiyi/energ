var need_url = window.location.href.split("?")[1];
var a=need_url.split("&");       //将结果用&符分隔
var id = a[0].split("=")[1]; //参数值1
console.log(id)
var DataName = a[1].split("=")[1]; //参数值2
var TypeName = a[2].split("=")[1]; //参数值3
var realurl = a[3].split("=")[1]; //参数值4
var DataName02 = decodeURI(DataName);
var TypeName02 = decodeURI(TypeName);
console.log(TypeName02)
$(".report-title").html("");
// 初始化
var myChart = echarts.init(document.getElementById('chart01'));
option = {
    title: {
        text: DataName02
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[DataName02]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis:  [
        {
            name : '',
        }
    ],
    series: [
        {
            name:DataName02,
            type:'line',
            stack: '总量',
            data:[]
        },

    ]
};

myChart.setOption(option);

var   json02={
    ID:id,
    DataName:DataName02
}

$.ajax({
    type:'POST',
    url:callurl +'/Device/Info/GetHisData',
    data:json02,
    success:function (res3) {
        console.log(res3)
        var y_dw = JSON.parse(res3).Msg;
        console.log(y_dw)
        var inforlist = JSON.parse(res3).Infor;
        console.log(inforlist)
        var datax=[];
        var datay=[];

        // 渲染数据
        for(var i=0 ;i<inforlist.length;i++ ) {
            datax.push(inforlist[i].Time);
            datay.push(inforlist[i].DATA);


        }
        myChart.setOption({
            xAxis: {
                data: datax
            },
            yAxis: {
                name : y_dw
            },
            series: [
                {
                    data:datay
                },

            ]
        });





    },
    error:function (xml) {
        console.log(xml);
    }
});




if(TypeName02 == "空压站"){

    var typeid =realurl;
    $(document).on("click","#menu01",function () {
        window.location.href = "message.html?typeid="+typeid;
    });
    $(document).on("click","#menu02",function () {
        window.location.href = "monitor.html?typeid="+typeid;
    });
    $(document).on("click","#menu03",function () {
        window.location.href = "gplot.html?typeid="+typeid;
    });
    $(document).on("click","#menu04",function () {
        window.location.href = "report.html?typeid="+typeid;
    });
}else if(id ==realurl ){
    var typeid =realurl;
    var TypeName = a[2].split("=")[1]; //参数值3
    var TypeName02 =  decodeURI(TypeName);

    $("#menu03").css({
        "background":"#bbbfcd",
        "cursor":"not-allowed",
        "display":"none"
    });
    $("#menu03").addClass("menu03-add");
    $("#menu03").attr("id","");



    $(".type").html(TypeName02);
    $(document).on("click","#menu01",function () {
        window.location.href = "message.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu02",function () {
        window.location.href = "monitor.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu03",function () {
        // window.location.href = "gplot.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);

    });
    $(document).on("click","#menu04",function () {
        window.location.href = "report.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    })


}else {
    var typeid =realurl;
    var TypeName = a[1].split("=")[1]; //参数值2
    var TypeName02 =  decodeURI(TypeName);
    $(document).on("click","#menu01",function () {
        window.location.href = "message.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu02",function () {
        window.location.href = "monitor.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu03",function () {
        // window.location.href = "gplot.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);

    });
    $(document).on("click","#menu04",function () {
        window.location.href = "report.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    })
}



// var typeid =id;
// $(document).on("click","#menu01",function () {
//     window.location.href = "message.html?typeid="+typeid;
// });
// $(document).on("click","#menu02",function () {
//     window.location.href = "monitor.html?typeid="+typeid;
// });
// $(document).on("click","#menu03",function () {
//     window.location.href = "gplot.html?typeid="+typeid;
// });
// $(document).on("click","#menu04",function () {
//     window.location.href = "report.html?typeid="+typeid;
// });
//
//
//
//
// var TypeName = a[1].split("=")[1]; //参数值2
// var TypeName02 =  decodeURI(TypeName);
// if(TypeName){

    // $("#menu03").css({
    //     "background":"#bbbfcd",
    //     "cursor":"not-allowed"
    // });
    // $("#menu03").addClass("menu03-add");

    // $(".type").html(TypeName02);
//     var typeid =id;
//     $(document).on("click","#menu01",function () {
//         window.location.href = "message.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
//     });
//     $(document).on("click","#menu02",function () {
//         window.location.href = "monitor.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
//     });
//     $(document).on("click","#menu03",function () {
//         // window.location.href = "gplot.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
//
//     });
//     $(document).on("click","#menu04",function () {
//         window.location.href = "report.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
//     })
//
// }










