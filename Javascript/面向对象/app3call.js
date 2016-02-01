/**
 * Created by Administrator on 2016/1/24.
 */
function Person(name, sex){
    this.name = name;
    this.sex = sex;
};
Person.prototype.showName = function(){
    alert(this.name);
};
Person.prototype.showSex = function(){
    alert(this.sex);
}

function Worker(name, sex, job){
    //构造函数伪装    调用父级的构造函数--为了继承属性
    Person.call(this, name, sex);//这里就是把person的this属性给了worker

    this.job = job;
}

//原型链   通过原型来继承父级的方法
//Worker.prototype = Person.prototype;

for(var i in Person.prototype){
    Worker.prototype[i] = Person.prototype[i];
}

Worker.prototype.showJob = function(){
    alert(this.job);
}


var oW = new Worker('wzg', '男', '打杂的');

//oW.showName();
//oW.showSex();
//oW.showJob();

alert(Person.prototype.showJob);