import express, { Express, Request, Response } from 'express';
import {datas} from '../../server/src/datas/index'
import cors from 'cors';



const app: Express = express();
app.options('*', cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
const port = 8080;

// Route exemple
app.get('/helloworld', (_req: Request, res: Response) => {
	res.json({ message: 'Hello World !' });
});

// Make a route /users here
// Don't forget to use the user type

app.get('/users', (_req: Request, res: Response) => {
	res.json({ userList: datas})
})

// Bonus:
// - Make a second route /user/id to get one user
// - Make a route to update an user /user/id

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
