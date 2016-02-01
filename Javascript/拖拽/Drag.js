/**
 * Created by Administrator on 2016/1/24.
 */
function Drag(id){
    var _this = this;

    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);

    //其实后面fnDown需要获取到this.Div的event
    //如果不传入event，fnDown里面的event相当于获取的是_this的
    this.oDiv.onmousedown = function(event){
        _this.fnDown(event);

        return false;
    };//.bind(this);
}

Drag.prototype.fnDown = function(event){
    var _this = this;
    var oEvent = event || window.event;

    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function(event){
        _this.fnMove(event);
    };

    document.onmouseup = function(event){
        _this.fnUp(event);
    }
};

Drag.prototype.fnMove = function(event){
    var oEvent = event || window.event;

    this.oDiv.style.left = oEvent.clientX - this.disX + 'px';
    this.oDiv.style.top = oEvent.clientY - this.disY + 'px';
};

Drag.prototype.fnUp = function(){
    document.onmousemove = null;
    document.onmouseup = null;
}

