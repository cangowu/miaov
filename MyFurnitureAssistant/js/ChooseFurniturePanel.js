this.MyFurnitureAssistant = this.MyFurnitureAssistant || {};
// 定义别名(快捷名)：
if(typeof this.MyFA === 'undefined') {
    this.MyFA = this.MyFurnitureAssistant;
}
(function () {
    "use strict";
    var getPreBounds;
    function ChooseFurniturePanel(parent) {
        // 类字段初始化
        var furniturePanel = document.getElementById("chooseFurniturePanel");
        ChooseFurniturePanel.chooseFurniturePanel = new createjs.Stage(furniturePanel);
        ChooseFurniturePanel.chooseFurniturePanel.name = "FurnitureListPanel";
        createjs.Touch.enable(chooseFurniturePanel);
        ChooseFurniturePanel.chooseFurniturePanel.x = 10;
        ChooseFurniturePanel.chooseFurniturePanel.y = 10;
        ChooseFurniturePanel.chooseFurniturePanel.visible = false;
        ChooseFurniturePanel.count = 0;                                  //当前背景图上的家具数
        ChooseFurniturePanel.outherWidth = 0;                            //背景图上行最后一个家具的右边界
        ChooseFurniturePanel.outherHeight = 0;                           //背景图上列下边界
        ChooseFurniturePanel.parent = parent;

        //物品栏内所有家具的参数。fpic.x,fpic.y以后要改
        var fpic = new createjs.Bitmap("img/washMachine.png");
        fpic.name = "洗衣机";
        fpic.scaleX = 0.08;
        fpic.scaleY = 0.16;
        fpic.x = 0;
        fpic.y = 15;
        fpic.width = 786;
        fpic.height = 658;
        fpic.setBounds(fpic.x, fpic.y, fpic.width, fpic.height);
        var bounds = fpic.getBounds();
        ChooseFurniturePanel.chooseFurniturePanel.addChild(fpic);

        fpic = new createjs.Bitmap("img/book.jpg");
        fpic.name = "书柜";
        fpic.scaleX = 0.1;
        fpic.scaleY = 0.2;
        fpic.width = 316;
        fpic.height = 616;
        fpic.setBounds(fpic.x, fpic.y, fpic.width, fpic.height);
        fpic.x = bounds.width * 0.08 +5;
        fpic.y = 5;
        bounds = fpic.getBounds();
        var tt = fpic.x;
        ChooseFurniturePanel.chooseFurniturePanel.addChild(fpic);

        var fpic = new createjs.Bitmap("img/chair.png");
        fpic.name = "椅子";
        fpic.scaleX = 0.033;
        fpic.scaleY = 0.07;
        fpic.x = (tt + bounds.width)*0.3 +5;
        fpic.y = 15;
        fpic.width = 984;
        fpic.height = 1431;
        fpic.setBounds(fpic.x, fpic.y, fpic.width, fpic.height);
        bounds = fpic.getBounds();
        ChooseFurniturePanel.chooseFurniturePanel.addChild(fpic);

        //对物品栏里的家具注册监听器事件
        var furChilds = ChooseFurniturePanel.chooseFurniturePanel.children;
        for(var i=0;i<furChilds.length;i++)
        {
            furChilds[i].addEventListener("click",p.addFurniture);
        }
        ChooseFurniturePanel.chooseFurniturePanel.update();
    }


    // 实例方法声明
    var p = ChooseFurniturePanel.prototype;

    p.setVisible = function (isVisible) {
        ChooseFurniturePanel.chooseFurniturePanel.visible = isVisible;
        ChooseFurniturePanel.chooseFurniturePanel.update();
    }

    p.isVisible = function () {
        return ChooseFurniturePanel.chooseFurniturePanel.visible;
    }

    p.addFurniture = function (event) {
        p.setVisible(false);
        var furChilds = ChooseFurniturePanel.chooseFurniturePanel.children;
        var panChilds = ChooseFurniturePanel.parent.children;
       //点击当前家具添加到背景图上
        if(event.rawX>=furChilds[0].x && event.rawY>=furChilds[0].y 
            && event.rawX <= furChilds[0].x + furChilds[0].getBounds().width * furChilds[0].scaleX 
            && event.rawY <= furChilds[0].y + furChilds[0].getBounds().height * furChilds[0].scaleY)
        {
            ChooseFurniturePanel.count+=1;
            //如果当前家具超过右边界，弹出提示框
            var furniture = new MyFA.FurnitureView("洗衣机",ChooseFurniturePanel.count,ChooseFurniturePanel.outherWidth,ChooseFurniturePanel.parent);
            if(furniture.valiWidth >= panChilds[0].getBounds().width * panChilds[0].scaleX)
            {
                alert("图片太多！");
            }
            else
            {
                ChooseFurniturePanel.parent.addChild(furniture.fc);
            }
        }
        else if(event.rawX>=furChilds[1].x && event.rawY>=furChilds[1].y 
            && event.rawX <= furChilds[1].x + furChilds[1].getBounds().width * furChilds[1].scaleX 
            && event.rawY <= furChilds[1].y + furChilds[1].getBounds().height * furChilds[1].scaleY)
        {
            ChooseFurniturePanel.count+=1;
            //如果当前家具超过右边界，弹出提示框
            var furniture = new MyFA.FurnitureView("书柜",ChooseFurniturePanel.count,ChooseFurniturePanel.outherWidth,ChooseFurniturePanel.parent);
            if(furniture.valiWidth >= panChilds[0].getBounds().width * panChilds[0].scaleX)
            {
                alert("图片太多！");
            }
            else
            {
                ChooseFurniturePanel.parent.addChild(furniture.fc);
            }
        }
        else if(event.rawX>=furChilds[2].x && event.rawY>=furChilds[2].y 
            && event.rawX <= furChilds[2].x + furChilds[2].getBounds().width * furChilds[2].scaleX 
            && event.rawY <= furChilds[2].y + furChilds[2].getBounds().height * furChilds[2].scaleY)
        {
            ChooseFurniturePanel.count+=1;
            //如果当前家具超过右边界，弹出提示框
            var furniture = new MyFA.FurnitureView("椅子",ChooseFurniturePanel.count,ChooseFurniturePanel.outherWidth,ChooseFurniturePanel.parent);
            if(furniture.valiWidth >= panChilds[0].getBounds().width * panChilds[0].scaleX)
            {
                alert("图片太多！");
            }
            else
            {
                ChooseFurniturePanel.parent.addChild(furniture.fc);
            }
        }
        ChooseFurniturePanel.parent.update();
        //计算右边界
        if(panChilds[0].name == "背景图" && panChilds.length > 1)
        {
            var temWidth = 0;
            for(var i = 1;i < panChilds.length;i++)
            {
                 temWidth += 10 + panChilds[i].getBounds().width * panChilds[i].scaleX;
            }
            ChooseFurniturePanel.outherWidth = temWidth;
        }
    }
    
    MyFA.ChooseFurniturePanel = ChooseFurniturePanel;
})();
