import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import appRouter from './routes.js';
dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const __dirname = path.resolve();
const dir = path.join(__dirname, './docs/client');
app.use('/', express.static(dir));
appRouter(app);
async function listen() {
    const listener = await app.listen(app.get('port'));
    const { address, port } = listener.address();
    console.log(`Server running on http://${address}:${port}`);
    function close(signal) {
        console.info(`${signal} signal received`);
        console.log('Closing http server');
        listener.close((err) => {
            console.info('Http server closed');
            process.exit(err ? 1 : 0);
        });
    }
    process.on('SIGTERM', () => {
        close('SIGTERM');
    });
    process.on('SIGINT', () => {
        close('SIGINT');
    });
}
listen();
