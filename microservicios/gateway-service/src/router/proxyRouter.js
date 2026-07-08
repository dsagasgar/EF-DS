import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import * as services from '../config/services.js';

const proxyRouter = Router();

proxyRouter.use("/api/peru", createProxyMiddleware({
    target: services.peruService,
    changeOrigin: true,
    pathRewrite: {
        "^/": "/api/peru/"
    }
}));

proxyRouter.use("/api/extranjero", createProxyMiddleware({
    target: services.extranjeroService,
    changeOrigin: true,
    pathRewrite: {
        "^/": "/api/extranjero/"
    }
}));

export default proxyRouter;

