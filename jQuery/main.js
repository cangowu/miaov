/**
 * Created by Administrator on 2015/11/26.
 */

var aQuery = function(selector,context){
    return new aQuery.prototype.init();
}
aQuery.prototype = {
    init:function(){
        return this;
    },
    name:function(){

    },
    age:20
}
aQuery.prototype.init.prototype = aQuery.prototype;
console.log(aQuery().name());