var conf = require('./config.json');
var mchat = require('motechat');

mchat.Init(conf, function(result){
   console.log('init result=%s', JSON.stringify(result)); 
});

var RPCMcService = {
    "echo": function(head, body){
    	console.log("xrpc echo: head=%s", JSON.stringify(head));
        if ( typeof body == 'object')
            sbody = JSON.stringify(body);
        else
            sbody = body;
        console.log("xrpc echo: body=%s", sbody);
        return {"echo":body};
    }
}

mchat.PublishXrpc( RPCMcService, function(result){
    console.log('motechat publish: result=%s', JSON.stringify(result));
});
