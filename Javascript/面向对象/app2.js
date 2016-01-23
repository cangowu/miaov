/**
 * Created by Administrator on 2015/12/30.
 */
(function(){
    var n = "ime";
    function Person(name){
        var _this = {};
        _this._name = name;
        _this.sayHello = function(){
            alert("PHello"+_this._name+n);
        }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name){
    var _this = Person(name);
    var superSay = _this.sayHello;
    _this.sayHello = function(){
        superSay.call(_this);
        alert("THello"+_this._name);
    }
    return _this;
}

var t = Teacher("iwen");
t.sayHello();