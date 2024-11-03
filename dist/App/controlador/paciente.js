"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPaciente = exports.getPaciente = void 0;
const pacientes_1 = __importDefault(require("../Models/pacientes"));
const dbConn_1 = require("../../Database/dbConn");
//Get Paciente
function getPaciente(req, res) {
    const userId = req.url.split('/').pop();
    res.statusCode = 200;
    dbConn_1.sequelize.sync().then(() => {
        return pacientes_1.default.findByPk(userId);
    }).then((data) => {
        if (data) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: `User ID: ${userId} not found` }));
        }
    }).catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Internal Server Error', error: error.message }));
    });
}
exports.getPaciente = getPaciente;
function insertPaciente(req, res) {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        const params = new URLSearchParams(data);
        const paciente = {
            nombre: params.get('nombre'),
            apellido: params.get('apellido'),
            edad: parseInt(params.get('edad'), 10),
            genero: params.get('genero'),
            telefono: params.get('telefono'),
            direccion: params.get('direccion')
        };
        dbConn_1.sequelize.sync().then(() => {
            pacientes_1.default.create(paciente).then((data) => {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            }).catch((error) => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Internal Server Error', error: error.message }));
            });
        }).catch((error) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Internal Server Error', error: error.message }));
        });
    });
}
exports.insertPaciente = insertPaciente;
//# sourceMappingURL=paciente.js.map