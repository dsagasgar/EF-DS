import express from 'express';
import { errorMiddleware } from './error/errorMiddleware.js';
import peruRouter from './router/peruRouter.js';

const app = express();
//use json
app.use(express.json());
//logs
app.use((req, res, next) => {
    const url = req.url;
    res.on('finish', () => {
        console.log(`[*] Nueva peticion ${req.method} a ${url}: ${res.statusCode}`);
    });
    next();
});
//api
app.use("/api", peruRouter);
//manejo de excepciones
app.use(errorMiddleware);

export default app;