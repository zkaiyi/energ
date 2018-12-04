var id = window.location.href.split("typeid=")[1];
var typeid =id;
$(document).on("click","#menu01",function () {
    window.location.href = "message.html?typeid="+typeid;
});
$(document).on("click","#menu02",function () {
    window.location.href = "monitor.html?typeid="+typeid;
});

$(document).on("click","#menu04",function () {
    window.location.href = "report.html?typeid="+typeid;
});