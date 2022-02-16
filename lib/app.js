import express from 'express';
import { port } from 'config';
import { logger, expressLogger, expressErrorLogger } from './logger';

const app = express();

app.use(expressLogger);
require('./middleware/express').default(app);
require('./routes').default(app);
app.use(expressErrorLogger);

app.listen(port, () => {
  logger.info(`Express server listening on port ${port} in ${app.get('env')} mode`);
});

module.exports = app;
