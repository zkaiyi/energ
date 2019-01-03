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


        },error:function (xml) {
            console.log(xml)
        }
    });




}
// 默认状态下
// 初始总量
var Type = "1";
var STime = "";
var ETime = "";
getzongenergy("0",Type,STime,ETime);
sessionStorage.setItem("Type01",Type);
sessionStorage.setItem("STime01",STime);
sessionStorage.setItem("ETime01",ETime);
