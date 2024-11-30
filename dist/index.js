"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const port = process.env.APP_PORT || 3005;
//Estencia com Express
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.listen(port, () => console.log(`Server na URL ${port}`));
//Nova github
