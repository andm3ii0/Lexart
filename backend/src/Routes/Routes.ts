import { Router } from 'express';
import UserController from '../Controller/UserController';
import MessagesController from '../Controller/MessagesController';

const routes = Router();

routes.post(
    '/user',
    (req, res, next) => new UserController(req, res, next).create(),
);

routes.post(
    '/user/login',
    (req, res, next) => new UserController(req, res, next).login(),
);

routes.get(
    '/user/:user',
    (req, res, next) => new UserController(req, res, next).get(),
);


routes.post(
    '/messages',
    (req, res, next) => new MessagesController(req, res, next).create(),
);

routes.get(
    '/messages/:user',
    (req, res, next) => new MessagesController(req, res, next).get(),
);

export default routes;