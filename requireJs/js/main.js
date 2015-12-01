/**
 * Created by Administrator on 2015/11/26.
 */
requirejs.config({
    baseUrl: './js',
    paths: {
        app: 'app',
        index:'index',
        jquery:'jquery/jquery.min',
        normal:'normal'
    }/*,
    shim: {
        normal: {
            init: function() {
                return {
                    aaa: aaa,
                    bbb1: bbb
                }
            }
        }
    }*/
});

requirejs(['app','index','normal'], function(app,index,normal) {
    //app.hello();
    //index.alertName();
    //bbb();
    window.index = index;
});
