/**
 * Created by Administrator on 2016/1/22.
 */
function assert(value, desc){
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("result").appendChild(li);
}