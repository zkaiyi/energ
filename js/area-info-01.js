// 折现图
$(function () {
    var dom = document.getElementById("table");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

    var dateList = data.map(function (item) {
        return item[0];
    });
    var valueList = data.map(function (item) {
        return item[1];
    });

    option = {

        // Make gradient line here
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
            data: dateList
        }],
        yAxis: [{
            splitLine: {show: false}
        }],

        series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
        }]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
})

// // 树状菜单----------json
// $(function () {
//     var setting = {
//         view: {
//             showIcon: showIconForTree
//         },
//         data: {
//             simpleData: {
//                 enable: true
//             }
//         }
//     };
//     var zNodes =[
//         { id:1, pId:0, name:"1#楼", open:true},
//
//         { id:11, pId:1, name:"1#楼1层", open:true},
//         { id:111, pId:11, name:"1#楼1层 101"},
//         { id:112, pId:11, name:"1#楼1层 102"},
//         { id:113, pId:11, name:"1#楼1层 103"},
//         { id:114, pId:11, name:"1#楼1层 104"},
//         { id:115, pId:11, name:"1#楼1层 105"},
//         { id:116, pId:11, name:"1#楼1层 106"},
//         { id:117, pId:11, name:"1#楼1层 107"},
//         { id:118, pId:11, name:"1#楼1层 108"},
//
//         { id:111, pId:11, name:"1#楼1层 101"},
//         { id:112, pId:11, name:"1#楼1层 102"},
//         { id:113, pId:11, name:"1#楼1层 103"},
//         { id:114, pId:11, name:"1#楼1层 104"},
//         { id:115, pId:11, name:"1#楼1层 105"},
//         { id:116, pId:11, name:"1#楼1层 106"},
//         { id:117, pId:11, name:"1#楼1层 107"},
//         { id:118, pId:11, name:"1#楼1层 108"},
//
//
//
//         { id:12, pId:1, name:"1#楼2层", open:true},
//         { id:121, pId:12, name:"1#楼2层 201"},
//         { id:122, pId:12, name:"1#楼2层 202"},
//         { id:123, pId:12, name:"1#楼2层 203"},
//         { id:124, pId:12, name:"1#楼2层 204"},
//         { id:125, pId:12, name:"1#楼2层 205"},
//         { id:126, pId:12, name:"1#楼2层 206"},
//         { id:127, pId:12, name:"1#楼2层 207"},
//         { id:128, pId:12, name:"1#楼2层 208"},
//
//
//
//         { id:13, pId:1, name:"1#楼3层", open:true},
//         { id:131, pId:13, name:"1#楼3层 301"},
//         { id:132, pId:13, name:"1#楼3层 302"},
//         { id:133, pId:13, name:"1#楼3层 303"},
//         { id:134, pId:13, name:"1#楼3层 304"},
//         { id:135, pId:13, name:"1#楼3层 305"},
//         { id:136, pId:13, name:"1#楼3层 306"},
//         { id:137, pId:13, name:"1#楼3层 307"},
//         { id:138, pId:13, name:"1#楼3层 308"},
//
//
//         { id:14, pId:1, name:"1#楼4层", open:true},
//         { id:141, pId:14, name:"1#楼4层 401"},
//         { id:142, pId:14, name:"1#楼4层 402"},
//         { id:143, pId:14, name:"1#楼4层 403"},
//         { id:144, pId:14, name:"1#楼4层 404"},
//         { id:145, pId:14, name:"1#楼4层 405"},
//         { id:146, pId:14, name:"1#楼4层 406"},
//         { id:147, pId:14, name:"1#楼4层 407"},
//         { id:148, pId:14, name:"1#楼4层 408"},
//
//
//     ];
//
//     function showIconForTree(treeId, treeNode) {
//         return !treeNode.isParent;
//     };
//
//     $(document).ready(function(){
//         $.fn.zTree.init($("#treeDemo"), setting, zNodes);
//     });
//
// })

// 日期选择
$(function(){
    var DATAPICKERAPI = {
        // 默认input显示当前月,自己获取后填充
        activeMonthRange: function () {
            return {
                begin: moment().set({ 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss'),
                end: moment().set({ 'hour': 23, 'minute': 59, 'second': 59 }).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        shortcutMonth: function () {
            // 当月
            var nowDay = moment().get('date');
            var prevMonthFirstDay = moment().subtract(1, 'months').set({ 'date': 1 });
            var prevMonthDay = moment().diff(prevMonthFirstDay, 'days');
            return {
                now: '-' + nowDay + ',0',
                prev: '-' + prevMonthDay + ',-' + nowDay
            }
        },
        // 注意为函数：快捷选项option:只能同一个月份内的
        rangeMonthShortcutOption1: function () {
            var result = DATAPICKERAPI.shortcutMonth();
            return [{
                name: '昨天',
                day: '-1,-1',
                time: '00:00:00,23:59:59'
            }, {
                name: '这一月',
                day: result.now,
                time: '00:00:00,'
            }, {
                name: '上一月',
                day: result.prev,
                time: '00:00:00,23:59:59'
            }];
        },
        // 快捷选项option
        rangeShortcutOption1: [{
            name: '最近一周',
            day: '-7,0'
        }, {
            name: '最近一个月',
            day: '-30,0'
        }, {
            name: '最近三个月',
            day: '-90, 0'
        }],
        singleShortcutOptions1: [{
            name: '今天',
            day: '0'
        }, {
            name: '昨天',
            day: '-1',
            time: '00:00:00'
        }, {
            name: '一周前',
            day: '-7'
        }]
    };
    //十分秒年月日单个
    $('.J-datepicker').datePicker({
        hasShortcut:true,
        min:'2018-01-01 04:00:00',
        max:'2019-04-29 20:59:59',
        shortcutOptions:[{
            name: '今天',
            day: '0'
        }, {
            name: '昨天',
            day: '-1',
            time: '00:00:00'
        }, {
            name: '一周前',
            day: '-7'
        }],
        hide:function(){
            console.info(this)
        }
    });

    //年月日单个
    $('.J-datepicker-day').datePicker({
        hasShortcut: true,
        format:'YYYY-MM-DD',
        shortcutOptions: [{
            name: '今天',
            day: '0'
        }, {
            name: '昨天',
            day: '-1'
        }, {
            name: '一周前',
            day: '-7'
        }]
    });

    //年月日范围
    $('.J-datepicker-range-day').datePicker({
        hasShortcut: true,
        format: 'YYYY-MM-DD',
        isRange: true,
        shortcutOptions: DATAPICKERAPI.rangeShortcutOption1
    });

    //十分年月日单个
    $('.J-datepickerTime-single').datePicker({
        format: 'YYYY-MM-DD HH:mm'
    });

    //十分年月日范围
    $('.J-datepickerTime-range').datePicker({
        format: 'YYYY-MM-DD HH:mm',
        isRange: true
    });

    //十分秒年月日范围，包含最大最小值
    $('.J-datepicker-range').datePicker({
        hasShortcut: true,
        min: '2018-01-01 06:00:00',
        max: '2019-04-29 20:59:59',
        isRange: true,
        shortcutOptions: [{
            name: '昨天',
            day: '-1,-1',
            time: '00:00:00,23:59:59'
        },{
            name: '最近一周',
            day: '-7,0',
            time:'00:00:00,'
        }, {
            name: '最近一个月',
            day: '-30,0',
            time: '00:00:00,'
        }, {
            name: '最近三个月',
            day: '-90, 0',
            time: '00:00:00,'
        }]
    });
    //十分秒年月日范围，限制只能选择同一月，比如2018-10-01到2018-10-30
    $('.J-datepicker-range-betweenMonth').datePicker({
        isRange: true,
        between:'month',
        hasShortcut: true,
        shortcutOptions: DATAPICKERAPI.rangeMonthShortcutOption1()
    });

    //十分秒年月日范围，限制开始结束相隔天数小于30天
    $('.J-datepicker-range-between30').datePicker({
        isRange: true,
        between: 30
    });

    //年月单个
    $('.J-yearMonthPicker-single').datePicker({
        format: 'YYYY-MM',
        min: '2018-01',
        max: '2019-04'
    });

    //选择年
    $('.J-yearPicker-single').datePicker({
        format: 'YYYY',
        min: '2018',
        max: '2020'
    });


});

// 日常
$(function () {


    $(document).on("click",".info-choose01-title",function () {
        if($(this).siblings().hasClass("hide")){
            $(this).siblings().slideDown();
            $(this).siblings().removeClass("hide");
        }else {
            $(this).siblings().slideUp();
            $(this).siblings().addClass("hide");
        }
    });
    $(document).on("click",".info-choose01-t-list",function () {
        if($(this).hasClass("info-choose01-t-list-a")){

        }else {
            $(this).addClass("info-choose01-t-list-a").siblings().removeClass("info-choose01-t-list-a");
            $(".info-choose01-title").siblings().slideUp();
            $(".info-choose01-title").siblings().addClass("hide");

        }
    });



})