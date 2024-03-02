import { Router, Request, Response } from "express";

const route = Router();

route.get('/home', (req: Request, res: Response) => {
    res.status(200).send("Hello World");
});

route.get('/buy', (req: Request, res: Response) => {
    res.status(200).send("Buy World");
});

export default route;