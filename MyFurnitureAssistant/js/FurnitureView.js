this.MyFurnitureAssistant = this.MyFurnitureAssistant || {};
// 定义别名(快捷名)：
if (typeof this.MyFA === 'undefined') {
    this.MyFA = this.MyFurnitureAssistant;
}
(function () {
    "use strict";

    var selectFurBool = [];
    function FurnitureView(id,count,outherWidth,stage) {
        createjs.Touch.enable(stage);
        this.fc = new createjs.Container();

        if (id == "洗衣机") {
            var fpic = new createjs.Bitmap("img/washMachine.png");
            this.fpic = fpic;
            this.fc.name = "洗衣机";
            fpic.scaleX = 0.06;
            fpic.scaleY = 0.03;
            this.fc.x = (count == 1) ? 10 : outherWidth+10;
            this.fc.y = 10;

        }
        if(id == "椅子") {
            var fpic = new createjs.Bitmap("img/chair.png");
            this.fpic = fpic;
            this.fc.name = "椅子";
            fpic.scaleX = 0.06;
            fpic.scaleY = 0.03;
            this.fc.x = (count == 1) ? 10 : outherWidth+10;
            this.fc.y = 10;
        }
        if (id == "书柜") {
            var fpic = new createjs.Bitmap("img/book.jpg");
            this.fpic = fpic;
            this.fc.name = "书柜";
            fpic.scaleX = 0.2;
            fpic.scaleY = 0.1;
            this.fc.x = (count == 1) ? 10 : outherWidth+10;
            this.fc.y = 10; //event.rawY;
        }
        // 验证宽度
        this.valiWidth = this.fc.x + fpic.getBounds().width * fpic.scaleX;

        this.fc.addChild(fpic);
        var self = this.fc;
        //辅助变量。sx,sy为按下时的位置
        var fmx,fmy,sx,sy;

        selectFurBool[count] = false;
        // 选中与取消选中
        this.fc.addEventListener("pressup",function(event){
            if(Math.abs(event.stageX - sx)<3 && Math.abs(event.stageY -sy)<3)
            {
                if(stage.numChildren > 2)
                {
                    for(var i = 1;i < stage.numChildren;i++)
                    {
                        if(selectFurBool[i]==true && stage.getChildAt(i)!=self)
                        {
                            selectFurBool[i]=false;
                            stage.getChildAt(i).shadow = null;
                            selectFurBool[count] = !selectFurBool[count];
                            break;
                        }
                        if(i==stage.numChildren-1 && i!=count)
                        {
                            selectFurBool[count] = !selectFurBool[count];
                        }
                    }

                }
                else
                    selectFurBool[count] = !selectFurBool[count];
            }
            if(selectFurBool[count])
            {
                self.shadow = new createjs.Shadow("#088628",1,1,4);
            } 
            else
                self.shadow = null;
            self.removeEventListener("pressmove",furnitureMove);
            stage.update();
        },false);
        
        // 记录拖拽落点与坐标的距离
        this.fc.addEventListener("mousedown",function(event){
            sx = event.stageX;
            sy = event.stageY;
            fmx = event.stageX - self.x;
            fmy = event.stageY - self.y;

            //如果当前选中,则可拖拽。否则，不能拖拽
            if(selectFurBool[count])
            {
                //拖拽效果
                self.addEventListener("pressmove",furnitureMove,false);
            }
            else {
                self.removeEventListener("pressmove",furnitureMove,false);
            }
            stage.update();
        },false);
        
        function furnitureMove(event){
            if(event.stageX - fmx < 0)
                self.x = 0;
            else if(event.stageX-fmx + self.getBounds().width > stage.canvas.width)
                self.x = stage.canvas.width - self.getBounds().width;
            else
                self.x = event.stageX - fmx;
            if(event.stageY-fmy < 0)
                self.y = 0;
            else if(event.stageY-fmy + self.getBounds().height > stage.canvas.height)
                self.y = stage.canvas.height - self.getBounds().height;
            else
                self.y = event.stageY - fmy;
            stage.update();
        }
    }
    MyFA.FurnitureView = FurnitureView;
})();
