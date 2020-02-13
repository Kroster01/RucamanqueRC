import { Router } from 'express';

class IndexRoutes {

    public routes: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.routes.get('/', (req, res) => res.send('Hello User.'));
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.routes;