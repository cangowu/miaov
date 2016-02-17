(function () {
    /**
     * n:li的name；i：li的icon；d：li的data
     * d里面的n为div的name；d里面的v为文本框的li
     * @type {{n: string, i: string, d: {}[]}[]}
     */
    var data = [
        {"n": "科研统计", "i": "abc", "d": [
            {"n": "新老病人", "v": "1200", "m": "normal.html"},
            {"n": "病理类型", "v": "100", "m": "normal.html"}
        ]},
        {"n": "随访业务", "i": "abc", "d": [
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "随访方式", "v": "300", "m": "normal.html"}
        ]},
        {"n": "发病情况", "i": "abc", "d": [
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "任务进展", "v": "", "m": "normal.html"},
            {"n": "随访方式", "v": "300", "m": "abc.html"}
        ]}
    ];

    var oMain = $("#m"),
        sUl = '';

    sUl += '<ul class="nav">';
    for (var i = 0; i < data.length; i++) {
        sUl += '<li><div class="title">' + data[i].n + '</div>';
        /*        if (i == 0) {
         sUl += '<ul class="sub">';
         } else {
         sUl += '<ul class="sub" style="display: none">';
         }*/
        sUl += '<ul class="sub">';
        var d = data[i].d;
        for (var j = 0; j < d.length; j++) {
            sUl += '<a href="subpage.html?m=' + d[j].m + '&n=' + d[j].n + '"><li>' + d[j].n + '</li></a>';
        }
        sUl += '</ul>';
        sUl += '</li>';
    }
    sUl += '</ul>';

    oMain.append(sUl);

    var oLi = $(".nav>li")

    /*    oLi.on('click', function () {
     $(this).siblings().find('ul').css('display', 'none');
     $(this).find('ul').css('display', 'block');
     });*/

})();

