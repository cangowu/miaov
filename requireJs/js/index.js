/**
 * Created by Administrator on 2015/11/26.
 */
define(['jquery'], function($) {
    return {
        name:'111',
        id:'',
        alertName: function() {
            //this.name = $('#name').val();
            this.alertID();
        },
        alertID:function(){
            this.id = $('#id').val();
            alert(this.id);
        }
    }
});