// 获取树状图
$.ajax({
    type:'post',
    url:callurl + '/Region/Region/GetTreeList',
    success:function (res) {
        console.log(res);
        var orgList =res;

        var parentArray = [];

        for(var i = 0;i<orgList.length;i++){
            if(orgList[i].PID==='0') {
                var pid = orgList[i].ID;
                var ar = "";


                for(var j=0;j<orgList.length;j++){
                    if(pid==orgList[j].PID){
                        ar +="{" +
                            "name:'"+orgList[j].Name+"'" +
                            "pId:'"+orgList[j].PID+"'" +
                            "id:'"+orgList[j].ID+"'" +
                            "}"

                    }
                }



                var zNodes ={
                    name:"sss",
                    open:true,
                    children:ar

                };




                zTreeObj =  $.fn.zTree.init($("#treeDemo"), setting, zNodes);


                parentArray


            }


        }












    },
    error:function (xml) {
        console.log(xml)
    }
});





