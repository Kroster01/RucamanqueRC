import { Router } from 'express';
import { jugadorController } from '../controllers/jugadorController';

class JugadoresRoutes {

    public routes: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.routes.get('/', jugadorController.index);
    }

}

const jugadoresRoutes = new JugadoresRoutes();
export default jugadoresRoutes.routes;
