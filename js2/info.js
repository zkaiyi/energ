
// 饼图
var myChart = echarts.init(document.getElementById("bt"));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['公共','生产','照明']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                // {name:'公共'},
                // {name:'生产'},
                // {name:'照明'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// 获取各类型总能
function getzongenergy(ID,Type,STime,ETime) {
    var json = {
        ID:ID,
        Type:Type,
        STime:STime,
        ETime:ETime
    };
    if(Type === "1"){
        $(".ZLtype").text("电");
        $(".ZLdun").text("度");
    }
    if(Type === "2"){
        $(".ZLtype").text("水");
        $(".ZLdun").text("吨");
    }
    if(Type === "3"){
        $(".ZLtype").text("气");
        $(".ZLdun").text("吨");
    }
    $.ajax({
        type:'post',
        url:callurl + '/Region/Data/GetUserData',
        dataType: 'json',
        data:json,
        success:function (res) {
            console.log(res);
            $(".ZHgg").text(res.pub);
            $(".ZHsc").text(res.pro);
            $(".ZHzm").text(res.lig);
            $(".info-02-mode-fl-02-span").text(res.pub + res.pro + res.lig );
            


            myChart.setOption({
                series: [
                    {
                        data:[
                            {value:res.pub,name:'公共'},
                            {value:res.pro,name:'生产'},
                            {value:res.lig,name:'照明'}
                        ]
                    }
                ]

            });

        },error:function (xml) {
            console.log(xml)
        }
    });




}


// 折线图
    var myChart02 = echarts.init(document.getElementById("zxt"));
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '用量',
                min: 0,
                // max: 250,
                // interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '平均用量',
                min: 0,
                // max: 250,
                // interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: []
    };
    ;
    if (option && typeof option === "object") {
        myChart02.setOption(option, true);
    }

function getzongxian(ID,Type,STime,ETime) {
    var json02 = {
        ID:ID,
        Type:Type,
        STime:STime,
        ETime:ETime
    };
    $.ajax({
        type:'post',
        url:callurl + '/Region/Data/GetTypeDataList',
        dataType: 'json',
        data:json02,
        success:function (res02) {
            console.log(res02);

            $(".mode03-fl-title-data").text(res02.Time[0])

            myChart02.setOption({
                xAxis: [
                    {
                        data: res02.Time
                    }
                ],
                series: [
                    {
                        name:'公共区域用量',
                        type:'bar',
                        data:res02.PubData
                    },
                    {
                        name:'生产区域用量',
                        type:'bar',
                        data:res02.Produce
                    },
                    {
                        name:'照明区域用量',
                        type:'bar',
                        data:res02.Lighting
                    },
                    {
                        name:'区域平均用量',
                        type:'line',
                        yAxisIndex: 1,
                        data:res02.Average
                    }
                ]

            });

        },error:function (xml02) {
            console.log(xml02)
        }
    });
}


// 默认状态下
// 初始总量
var Type = "1";
var STime = "";
var ETime = "";
getzongenergy("0",Type,STime,ETime);
getzongxian("0",Type,STime,ETime);
sessionStorage.setItem("Type01",Type);
sessionStorage.setItem("STime01",STime);
sessionStorage.setItem("ETime01",ETime);

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
    var STime = sessionStorage.getItem("STime");
    var ETime = sessionStorage.getItem("ETime");
    getzongenergy("0",Type,STime,ETime);
    getzongxian("0",Type,STime,ETime);
});






