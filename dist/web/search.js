"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchPage = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
// Get Search
function getSearchPage(req, res) {
    const __dirname = (0, path_1.dirname)(__filename);
    const filePath = (0, path_1.join)(__dirname, '../resources/html/search.html');
    (0, fs_1.readFile)(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error' + err);
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            try {
                const fileContents = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../resources/html/css/styles.css'), { encoding: 'utf8' });
                res.write('<style>' + fileContents + '</style>');
            }
            catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error' + err);
                return;
            }
            res.end(data);
        }
    });
}
exports.getSearchPage = getSearchPage;
//# sourceMappingURL=search.js.map