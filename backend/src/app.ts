import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import routes from './Routes/Routes';
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(ErrorHandler.handle);

export default app;