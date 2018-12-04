var id = window.location.href.split("typeid=")[1];

// 图表数据
// 基于准备好的dom，初始化echarts实例
var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 150];
var now = new Date(base);

function addData(shift) {
    now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);
    data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

    if (shift) {
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 100; i++) {
    addData();
}

var myChart = echarts.init(document.getElementById('chart01'));
// 指定图表的配置项和数据
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
    },
    series: [
        {
            name:'成交',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: data
        }
    ]
};

setInterval(function () {
    addData(true);
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            name:'成交',
            data: data
        }]
    });
}, 500);
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




var typeid =id;
$(document).on("click","#menu01",function () {
    window.location.href = "message.html?typeid="+typeid;
});
$(document).on("click","#menu02",function () {
    window.location.href = "monitor.html?typeid="+typeid;
});
// $(document).on("click","#menu03",function () {
//     window.location.href = "history.html?typeid="+typeid;
// });
$(document).on("click","#menu04",function () {
    window.location.href = "report.html?typeid="+typeid;
});