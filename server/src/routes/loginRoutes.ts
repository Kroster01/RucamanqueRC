import { Router } from 'express';
import { loginController } from '../controllers/loginController';

class LoginRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', loginController.list);
        this.router.get('/:id', loginController.getOne);
        this.router.post('/', loginController.login);
        this.router.post('/registry', loginController.create);
        this.router.put('/:id', loginController.update);
        this.router.delete('/:id', loginController.delete);
    }

}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;
