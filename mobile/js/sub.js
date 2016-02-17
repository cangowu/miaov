(function () {

    //只用于加载模板，模板对应的js写在模板里面
    var model = MySA.getUrl("m");
    $('#main').load('subpage/' + model);

})();
