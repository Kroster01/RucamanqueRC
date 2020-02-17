import { Request, Response } from 'express';
import pool from '../database';

class JugadorController {

    public list (req: Request, res: Response) {
        res.json({text: 'Listing jugador'});
    }

    public getOne (req: Request, res: Response) {
        res.json({text: 'This is Jugador: ' + req.params.id });
    }

    public create (req: Request, res: Response) {
        res.json({text: 'Creating jugador'});
    }

    public update (req: Request, res: Response) {
        res.json({text: 'Updating jugador: ' + req.params.id });
    }

    public delete (req: Request, res: Response) {
        res.json({text: 'Deleting jugador: ' + req.params.id });
    }
}

export const jugadorController = new JugadorController();
