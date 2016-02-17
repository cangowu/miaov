this.MyStatisticsAssistant = this.MyStatisticsAssistant || {};
// 定义别名(快捷名)：
if(typeof this.MySA === 'undefined') {
    this.MySA = this.MyStatisticsAssistant;
}

(function(){
    function getUrl(name){
        var href = window.location.href;
        var query = href.split('?')[1];
        var queryC = query.split('&');
        var sRenturn = '';
        for (var i = 0; i < queryC.length; i++) {
            var oQuery = queryC[i].split('=');
            if (oQuery[0] == name) {
                sRenturn = oQuery[1];
                return sRenturn;
            } else {
                return "";
            }
        }
    };
    MySA.getUrl = getUrl;
})();
