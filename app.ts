import express from 'express';
import { processRoutes as processRoutesGet } from './web/routes';
import { processRoutesPost } from './web/routes';
const app = express();

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  processRoutesGet(req, res);
});

app.post('*', (req, res) => {
  processRoutesPost(req, res);
}
);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
//npx tsc
//node dist/app.js