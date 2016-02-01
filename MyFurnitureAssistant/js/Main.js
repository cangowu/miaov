this.MyFurnitureAssistant = this.MyFurnitureAssistant || {};
// 定义别名(快捷名)：
if (typeof this.MyFA === 'undefined') {
    this.MyFA = this.MyFurnitureAssistant;
}

function init() {
    var main = new MyFA.MainController();
    // main.selectPhoto(); 
	//为按钮绑定点击事件
	var photoButton = document.getElementById("photoButton");
	photoButton.addEventListener('click', main.selectPhoto, false);
	var furnitureButton = document.getElementById("furnitureButton");
	furnitureButton.addEventListener('click', main.swtichFurniturePanel, false);
}

