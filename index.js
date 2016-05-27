/*global require*/
(function (express, babel, q) {
    "use strict";
    var app = express();
    // If more structurized stuff is needed, you can just use express.Router
    // in your favorite module, then use express().use here.
    // the static file can also be handled by doing the same way.
    app.use("/static", express.static("bower_components"));
    app.use("/assets", express.static("assets"));

    // Honestly, I don't like typing "function"
    app.get("/", function (req, res) {
        /*jslint unparam: true*/
        res.render(
            "index.jade",
            {"pageTitle": "Say Hello ReactJS (and express + Jade)"}
        );
    });
    app.get("/react", function (req, res) {
        /*jslint unparam: true*/
        res.set("Content-Type", "application/javascript");
        q.nfcall(
            babel.transformFile,
            "babel/react_asset.jsx"
        ).then(function (result) {
            res.send(result.code);
        }).catch(function (err) {
            throw err;
        });
    });
    app.listen(8888, function () {
        /*global console*/
        console.log("Listening on port 8888");
    });
}(require("express"), require("babel-core"), require("q")));
