import Paciente from "../Models/pacientes"
import { sequelize } from '../../Database/dbConn';
//Get Paciente
function getPaciente(req, res) {
    const pacienteId = req.url.split('/').pop();
    res.statusCode = 200;
    sequelize.sync().then(() => {
        return Paciente.findByPk(pacienteId);
    }).then((data) => {
        if (data) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: `Paciente ID: ${pacienteId} not found` }));
        }
    }).catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Internal Server Error', error: error.message }));
    });
}

function insertPaciente (req, res) {
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
        sequelize.sync().then(() => {
            Paciente.create(paciente).then((data) => {
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

export {
    getPaciente, insertPaciente
};

