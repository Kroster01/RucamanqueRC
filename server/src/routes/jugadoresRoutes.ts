import { Router } from 'express';
import { jugadorController } from '../controllers/jugadorController';

class JugadoresRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', jugadorController.list);
        this.router.get('/', jugadorController.getOne);
        this.router.post('/', jugadorController.create);
        this.router.put('/:id', jugadorController.update);
        this.router.delete('/:id', jugadorController.delete);
    }

}

const jugadoresRoutes = new JugadoresRoutes();
export default jugadoresRoutes.router;
