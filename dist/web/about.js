"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAboutPage = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function getAboutPage(req, res) {
    const __dirname = (0, path_1.dirname)(__filename);
    const filePath = (0, path_1.join)(__dirname, '../resources/html/about.html');
    (0, fs_1.readFile)(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error' + err);
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
}
exports.getAboutPage = getAboutPage;
//# sourceMappingURL=about.js.map