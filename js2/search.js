// 搜索
$(document).on("click",".return-search-03-add",function () {
    var keyword = $(".return-search-02-int").val();
    window.location.href = "station-col.html?keyword="+encodeURI(keyword);
});
$(document).on("click",".new-search-input-img",function () {
    var keyword = $(".new-search-input-i").val();
    window.location.href = "station-col.html?keyword="+encodeURI(keyword);
});








