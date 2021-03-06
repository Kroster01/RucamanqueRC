import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import jugadoresRoutes from './routes/jugadoresRoutes';
import loginRoutes from "./routes/loginRoutes";
import keys from './keys';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.port || keys.portServer);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/jugador/', jugadoresRoutes);
        this.app.use('/login/', loginRoutes);
    }
    
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Srver on port: ' + this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();