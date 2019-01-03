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

// 饼图
$(function () {
    var dom = document.getElementById("bt");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '环形图';

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data:['1','2','3','4','5']
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
                    {value:335, name:'1'},
                    {value:310, name:'2'},
                    {value:234, name:'3'},
                    {value:135, name:'4'},
                    {value:1548, name:'5'}
                ]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});

// 折现图
$(function () {
    var dom = document.getElementById("zxt");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '折柱混合';

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
                // dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        // legend: {
        //     data:['客户共区域用电','生产区域用电','平均用水量']
        // },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '电量/kwh',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '平均电量/kwh',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'客户共区域用电',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'生产区域用电',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'平均用水量',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.4, 5.3, 30.6, 25.0,86.3,154.6,183.6,60.1,32.0,14.0,7.5]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
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