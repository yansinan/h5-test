//css3-test server

var router = require('easy-router');

var port = 3006;

router.init({debug : true}).setMap('**/*' , '**/*').listen(port);

console.log("http://127.0.0.1:"+port+"/menu.html");

