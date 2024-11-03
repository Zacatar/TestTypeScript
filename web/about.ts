import { readFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

function getAboutPage(req, res) {
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, '../resources/html/about.html');
    readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error' + err);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
}

export {
    getAboutPage
};