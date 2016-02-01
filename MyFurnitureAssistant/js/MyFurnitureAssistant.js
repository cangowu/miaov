this.MyFurnitureAssistant = this.MyFurnitureAssistant || {};
// 定义别名(快捷名)：
if (typeof this.MyFA === 'undefined') {
    this.MyFA = this.MyFurnitureAssistant;
}

(function () {
    "use strict";

    function MainController() {

        // 类字段初始化
        MainController.housePic = new createjs.Stage("housePic");
        MainController.housePic.name = "housePic";
        createjs.Touch.enable(housePic);

        MainController.fPanel = new MyFA.ChooseFurniturePanel(MainController.housePic);
        
        MainController.canvas = document.getElementById("demo");
        MainController.demo = MainController.canvas.getContext("2d");

        //利用tick实现正常显示
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick',function(){MainController.housePic.update();},false);

    };
    // 实例方法声明
    var p = MainController.prototype;
    // 背景照片
    p.selectPhoto = function () {


        var bitmap = new createjs.Bitmap("img/IMG_2284.JPG");
        bitmap.scaleX = 0.12;
        bitmap.scaleY = 0.05;
        bitmap.name = "背景图";
        MainController.housePic.addChild(bitmap);

//        bitmap.image.width = 100;
//        bitmap.image.height = 100;

        MainController.housePic.update();

        var mat = cv.cvtColor(cv.imread(bitmap.image), CV_RGBA2GRAY);
        var mat2 = cv.convertScaleAbs(cv.Scharr(mat, 1, 0));
        var mat3 = cv.convertScaleAbs(cv.Scharr(mat, 0, 1));
        var mat4 = cv.addWeighted(mat2, 0.5, mat3, 0.5);
        var mat5 = cv.threshold(mat4, 50);
        var mat7 = cv.blackborder(mat5);
        var mat8 = cv.denoise(mat7);
        show(mat8);
    };

    function show(__mat) {
        MainController.canvas.width = __mat.col;
        MainController.canvas.height = __mat.row;
        MainController.demo.putImageData(cv.RGBA2ImageData(__mat), 0, 0);
    }

    // 添加家具
    p.swtichFurniturePanel = function () {
        if (!MainController.fPanel.isVisible())
            MainController.fPanel.setVisible(true);
        
        MainController.housePic.update();
    }

    MyFA.MainController = MainController;
})();
