import { Router } from 'express';

class JugadoresRoutes {

    public routes: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.routes.get('/', (req, res) => res.send('Hello Jugador.'));
    }

}

const jugadoresRoutes = new JugadoresRoutes();
export default jugadoresRoutes.routes;