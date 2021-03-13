// const { fstat } = require("fs");
// var http = require("http")
// var fs = require("fs")

// console.log(__dirname)

// function serveStaticFile(res, path, contentType, responseCode) {
//     if (!responseCode) responseCode = 200;
//     fs.readFile(__dirname + path, function(err, data) {
//         if (err) {
//             res.writeHead(500, {"Content-Type" : "text/plain"})
//             res.end("500 - Internal error")
//         }
//         else {
//             res.writeHead(500, {"Content-Type" : contentType});
//             res.end(data);
//         }
//     })


// http.createServer(function(req, res) {
//     var path=req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
//     var file = decodeURIComponent(request.url.substr(1));
//     var headers = {};  
//     switch(path){
//         case "":
//            serveStaticFile(res, "/index.html", "text/html");
//             break;
//         case "/about":
//             serveStaticFile(res, "/about.html", "text/html");
//             break;
//         case "End-term/img/gallery/graduation.jpg":
//             serveStaticFile(res, "End-term/img/gallery/graduation.jpg", "study/jpg");
//         case "video.html":
//                 file = "video.html";
//                 headers['Content-Type'] = 'text/html; charset=UTF-8';
//             break;
//         case "/video/memes.mp4":
//             headers['Content-Type'] = 'video/mp4';
//             serveStaticFile(res, "/End-term/video/students/memes.mp4");
//         default: "/error.html"
//             serveStaticFile(res, "/error.html", "text/html", 404);
//             break;
//     }
// }).listen(3000)

// console.log("Serving is running on port 3000.Press CTRL+C to Terminate");
// }
console.log("Its working")