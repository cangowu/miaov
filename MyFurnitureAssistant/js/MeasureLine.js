this.MyFurnitureAssistant = this.MyFurnitureAssistant || {};
// 定义别名(快捷名)：
if (typeof this.MyFA === 'undefined') {
    this.MyFA = this.MyFurnitureAssistant;
}

(function () {
    "use strict";

    // 构造函数
    function MeasureLine(startPoint, endPoint) {
        //this.setValues(x, y);
        this.Line = new createjs.Shape();
        this.Line.graphics.beginStroke("red").beginFill("blue").setStrokeStyle(10);
        this.Line.graphics.moveTo(startPoint.x, startPoint.y);
        this.Line.graphics.lineTo(endPoint.x, endPoint.y);
        //MyFA.MainController.housePic.addChild(this.Line);
    };

    var p = createjs.extend(MeasureLine, createjs.DisplayObject);
    //p.visibleSwitch = function () {
    //    p.DisplayObject.visible != p.DisplayObject.visible;
    //    p.update();
    //}
    //p.setValues = function (x, y) {
    //    this.x = x || 0;
    //    this.y = y || 0;
    //    return this;
    //};

    //p.toString = function () {
    //    return "[Point (x=" + this.x + " y=" + this.y + ")]";
    //};

    MyFA.MeasureLine = MeasureLine;
})();