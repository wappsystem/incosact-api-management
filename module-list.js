(function(){
    var modules={
        "survey-data":      {url:"$H/m/survey-data.html",Table:"incosact",form_module:"survey-form"},
        "survey-form":		    {url:"$H/m/survey-form.html",Table:"incosact"},
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
