"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./web/routes");
const routes_2 = require("./web/routes");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('*', (req, res) => {
    (0, routes_1.processRoutes)(req, res);
});
app.post('*', (req, res) => {
    (0, routes_2.processRoutesPost)(req, res);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//npx tsc
//node dist/app.js
//# sourceMappingURL=app.js.map