import express from 'express';
import { processRoutes } from './web/routes';
const app = express();

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  processRoutes(req, res);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});