import { Request, Response } from 'express';
import pool from '../database';

class IndexController {

    public index (req: Request, res: Response){
        // pool.query('DESCRIBE jugador');
        res.json({text: 'API Is /'});
    }
}

export const indexController = new IndexController();
