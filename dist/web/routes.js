"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRoutesPost = exports.processRoutes = void 0;
const index_js_1 = require("./index.js");
const about_js_1 = require("./about.js");
const paciente_js_1 = require("../App/controlador/paciente.js");
function processRoutes(req, res) {
    var _a;
    switch (req.url) {
        case '/': {
            (0, index_js_1.getHomePage)(req, res);
            break;
        }
        case '/about': {
            (0, about_js_1.getAboutPage)(req, res);
            break;
        }
        case '/api': {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Hello World' }));
            break;
        }
        case (_a = req.url.match(/^\/api\/paciente\/\d+$/)) === null || _a === void 0 ? void 0 : _a.input: {
            res.statusCode = 200;
            (0, paciente_js_1.getPaciente)(req, res);
            break;
        }
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
            break;
    }
}
exports.processRoutes = processRoutes;
function processRoutesPost(req, res) {
    switch (req.url) {
        case '/': {
            (0, paciente_js_1.insertPaciente)(req, res);
            break;
        }
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
            break;
    }
}
exports.processRoutesPost = processRoutesPost;
//# sourceMappingURL=routes.js.map