// // col row 公共
// // 搜索
// $(".return-search-02-int").keyup(function () {
//     $(".return-search-03").addClass("return-search-03-add");
//     if($(this).val() == ""){
//         $(".return-search-03").removeClass("return-search-03-add");
//     }
// });
// // col-list
// $(document).on("click",".col-list-menu-list",function () {
//     if($(this).hasClass(".row-menu-list-add")){
//     }else {
//         $(this).addClass("row-menu-list-add").siblings("").removeClass("row-menu-list-add");
//         $(this).find(".col-list-menu-list-img").addClass("hide");
//         $(this).find(".col-list-menu-list-img-add").removeClass("hide");
//         $(this).siblings().find(".col-list-menu-list-img").removeClass("hide");
//         $(this).siblings().find(".col-list-menu-list-img-add").addClass("hide");
//     }
// });
// $(document).on("click",".menu-item-list-title",function () {
//     if($(this).children().find(".menu-item-list-title-fr-img").hasClass("menu-item-list-title-fr-img-add02")){
//         $(this).children().find(".menu-item-list-title-fr-img").removeClass("menu-item-list-title-fr-img-add02");
//         $(this).children().find(".menu-item-list-title-fr-img").rotate({ angle:0,duration:100 });
//         $(this).siblings().slideUp();
//     }else {
//         $(this).children().find(".menu-item-list-title-fr-img").addClass("menu-item-list-title-fr-img-add02");
//         $(this).children().find(".menu-item-list-title-fr-img").rotate({ angle:-90,duration:100 });
//         $(this).siblings().slideDown();
//
//     }
// });
//
// // ie8兼容圆角
// $('.return-container-fl').corner();
// $('.return-container-fr').corner();
// $('.col-list-menu-list').corner();


// col row 公共
// 搜索
$(".return-search-02-int").keyup(function () {
    $(".return-search-03").addClass("return-search-03-add");
    if($(this).val() == ""){
        $(".return-search-03").removeClass("return-search-03-add");
    }
});
// col-list
$(document).on("click",".col-list-menu-list",function () {
    if($(this).hasClass(".row-menu-list-add")){
    }else {
        $(this).addClass("row-menu-list-add").siblings("").removeClass("row-menu-list-add");
        $(this).find(".col-list-menu-list-img").addClass("hide");
        $(this).find(".col-list-menu-list-img-add").removeClass("hide");
        $(this).siblings().find(".col-list-menu-list-img").removeClass("hide");
        $(this).siblings().find(".col-list-menu-list-img-add").addClass("hide");
        $(this).find(".row-menu-list-t").addClass("row-menu-list-t-add");
        $(this).siblings().find(".row-menu-list-t").removeClass("row-menu-list-t-add");


    }
});
$(document).on("click",".menu-item-list-title",function () {
    if($(this).parent().hasClass("menu-item-list-title-fr-img-add02")){
        $(this).parent().removeClass("menu-item-list-title-fr-img-add02")
        $(this).siblings(".menu-item-list-content").slideUp();
    }else {
        $(this).parent().addClass("menu-item-list-title-fr-img-add02")
        $(this).siblings(".menu-item-list-content").slideDown();
    }
});

// ie8兼容圆角
$('.return-container-fl').corner();
$('.return-container-fr').corner();
$('.col-list-menu-list').corner();