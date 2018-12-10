var typeid =id;
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





var TypeName = a[1].split("=")[1]; //参数值2
var TypeName02 =  decodeURI(TypeName);
if(TypeName){

    $("#menu03").css({
        "background":"#bbbfcd",
        "cursor":"not-allowed",
        "display":"none"
    });
    $("#menu03").addClass("menu03-add");
    $("#menu03").attr("id","");


    $(".type").html(TypeName02);
    var typeid =id;
    $(document).on("click","#menu01",function () {
        window.location.href = "message.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu02",function () {
        window.location.href = "monitor.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu03",function () {

        // window.location.href = "message.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    });
    $(document).on("click","#menu04",function () {
        window.location.href = "report.html?typeid="+typeid+"&DataName="+encodeURI(TypeName02);
    })


}








