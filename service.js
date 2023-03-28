var Service = require('node-windows').Service;

var svc = new Service({
    name: "Node App",
    description: "NodeJS Script as windows service",
    script: "D:\\Programming\\services\\index.js",
});

svc.on("install", function () {
    svc.start();
});

svc.install();