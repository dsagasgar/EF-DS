import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import proxyRouter from './router/proxyRouter.js';

const app = express();

app.use(cors());

//logs
app.use((req, res, next) => {
    const url = req.url;
    res.on('finish', () => {
        console.log(`[*] Nueva peticion ${req.method} a ${url}: ${res.statusCode}`);
    });
    next();
});
//api
app.use("/", proxyRouter);
//manejo de excepciones
app.use(errorMiddleware);

export default app;