//将form里面的内容序列化成json，相同name的checkbox拼接起来
$.fn.serializeJson=function(otherString){
    var serializeObj={};
    var array=this.serializeArray();
    var str = this.serialize();
    $(array).each(function () {
        if(serializeObj[this.name]){
            serializeObj[this.name]+=';'+this.value;
//                    if($.isArray(serializeObj[this.name])){
//                        serializeObj[this.name].push(this.value);  
//                    }else{
//                        serializeObj[this.name]=[serializeObj[this.name],this.value]; 
//						 
//                    }  
        }else{
            serializeObj[this.name]=this.value;
        }
    });
    //将参数拼接到json中
    if(otherString!=undefined){
        var otherArray = otherString.split(';');
        /*for(var i=0;i<otherArray.length;i++){
         var otherSplitArray = otherArray[i].split(':');
         serializeObj[otherSplitArray[0]]=otherSplitArray[1];
         }		*/
        $(otherArray).each(function(){
            var otherSplitArray = this.split(':');
            serializeObj[otherSplitArray[0]]=otherSplitArray[1];
        });
    }
    return serializeObj;
};
//将json数据赋值给form		
$.fn.setForm = function (jsonValue) {
    var obj = this;
    $.each(jsonValue, function (name, ival) {
        var $oinput = obj.find("input[name=" + name + "]");
        if ($oinput.attr("type") == "checkbox") {
            //$oinput.each(function () {
            if(ival !== null){
                var checkboxObj = $("[name="+name+"]");
                var checkArray = ival.split(";");
                for(var i=0;i<checkboxObj.length;i++){
                    for(var j=0;j<checkArray.length;j++){
                        if(checkboxObj[i].value == checkArray[j]){
                            checkboxObj[i].click();

                            //$(checkboxObj[i]).attr("checked", 'true')

                            //console.log(checkboxObj[i].value);
                        }
                    }
                }
            }
            //})
        }
        else if($oinput.attr("type")=="radio"){
            $oinput.each(function(){
                var radioObj = $("[name="+name+"]");
                for(var i=0;i<radioObj.length;i++){
                    if(radioObj[i].value == ival){
                        radioObj[i].click();
                    }
                }
            })
        }
        else if($oinput.attr("type")=="textarea"){
            obj.find("[name="+name+"]").html(ival);
        }
        else{
            obj.find("[name="+name+"]").val(ival);
        }
        //$oinput.val(ival);
    })
}

//将dialog里面的内容序列化成json
$.fn.dialogJson = function (otherString) {
    var tableJson = {};
    $(this).find('table').each(function () {//获取table
        //console.log(this.id);
        var itemname = this.id;
        var tr = $(this).find('tbody tr');
        $(tr).each(function () {
            //获取table的tr
            var item = $(this).find('input,select,textarea[name]').serializeJson();
            //serializeObj[itemname] = item;
            if (tableJson[itemname]) {
                if ($.isArray(tableJson[itemname])) {
                    tableJson[itemname].push(item);
                } else {
                    tableJson[itemname] = [tableJson[itemname], item];
                }
            }
            else {
                tableJson[itemname] = item;
            }
        })
    });

    //var formJson = $(this).find('input,select,textarea [name]').not('table tbody tr input,select,textarea [name]').serializeJson(otherString);
    //var formJson = $(this).find('input,select,textarea [name]').not('table tbody tr input,select,textarea [name]').serializeJson(otherString);

    var formJson = $(this).find('input,select,textarea').not('tbody tr input').not('tbody tr select').not('tbody tr textarea').serializeJson(otherString);

    $.extend(formJson, tableJson);
    //console.log($(this).find('input,select,textarea'));
    return formJson;
};

/*清空表单数据*/
$.fn.clearForm = function (includeHidden) {
    return this.each(function () {
        $('input,select,textarea', this).clearFields(includeHidden);   //this表示设置上下文环境，有多个表单时只作用调用的表单
    });
};
$.fn.clearFields = $.fn.clearInputs = function (includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function () {
        $(this).removeClass('hasdata');
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            // $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ((includeHidden === true && /hidden/.test(t)) ||
                (typeof includeHidden == 'string' && $(this).is(includeHidden))) {
                this.value = '';
            }
        }
    });
};