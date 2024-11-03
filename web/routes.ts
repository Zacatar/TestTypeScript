import { getHomePage } from './index.js';
import { getAboutPage } from './about.js';
import { getPaciente, insertPaciente } from '../App/controlador/paciente.js';

function processRoutes(req, res) {
    switch (req.url) {
        case '/': {
            getHomePage(req, res);
            break;
        }
        case '/about': {
           getAboutPage(req, res);
            break;
        }
        case '/api': {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Hello World' }));
            break;
        }  
        
        case req.url.match(/^\/api\/paciente\/\d+$/)?.input: {
            res.statusCode = 200;
            getPaciente(req, res);
            break;
        }
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
            break;
    }

}

function processRoutesPost(req, res) {
    switch (req.url) {
        case '/api/paciente': {
            insertPaciente(req, res);
            break;
        }
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
            break;
    }
}

export {
    processRoutes, processRoutesPost
};