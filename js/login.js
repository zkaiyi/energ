$(".center").corner("15px");
$(".ab-bg").corner("15px");
$(".table-list-fr").corner("5px");
$(".sub-fl").corner("5px");
$(".mobel-table-list").corner("5px");
$(".mobel-sub").corner("5px");


var kh =  document.body.clientHeight;
var c_h =  $(".center").height();
var  need_w = $(".center").width();
$(".login-center").css("padding-top",(kh -c_h ) / 2 + "px");
console.log(kh +"," + c_h);
var top_h = $(".center").offset().top;
var top_l = $(".center").offset().left;
$(".ab-bg").css({
    top:top_h - 23 + "px",
    left:top_l - 23 + "px",
    height:c_h + 23 + 23 + "px",
    width:need_w + 46 + "px"
});




window.onresize=function(){
    var kh =  document.body.clientHeight;
    var c_h =  $(".center").height();
    var  need_w = $(".center").width();
    $(".login-center").css("padding-top",(kh -c_h ) / 2 + "px");
    console.log(kh +"," + c_h);
    var top_h = $(".center").offset().top;
    var top_l = $(".center").offset().left;
    $(".ab-bg").css({
        top:top_h - 23 + "px",
        left:top_l - 23 + "px",
        height:c_h + 23 + 23 + "px",
        width:need_w + 46 + "px"
    });
};



function sub() {


    var username = $("#username").val();
    var pass = $("#pass").val();

    if(name){
    }else {

        alert("用户名不能为空")
    }


    if(pass){
    }else {
        alert("密码不能为空");
        return false;

    }

    window.location.href='index.html'

}

function sub02() {


    var muser = $("#muser").val();
    var mpass = $("#mpass").val();

    if(muser){
    }else {

        alert("用户名不能为空")
    }


    if(mpass){
    }else {
        alert("密码不能为空");
        return false;

    }

    window.location.href='index.html'

}


