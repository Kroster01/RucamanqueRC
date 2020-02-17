import { Request, Response } from 'express';
import pool from '../database';

class JugadorController {

    public index (req: Request, res: Response) {
        // pool.query('DESCRIBE jugador');
        res.json({text: 'API Is /jugador'});
    }
}

export const jugadorController = new JugadorController();
