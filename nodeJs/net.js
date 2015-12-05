var net = require('net')
var chartServer = net.createServer(),clientList = []
chartServer.on('connection', function(client) {
    client.write('Hi!\n');
    clientList.push(client)
    client.on('data',function(data){
        for(var i=0;i<clientList.length;i+=1){
            clientList[i].write(data)
        }
    });
    //client.end()
}).listen(8080);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');