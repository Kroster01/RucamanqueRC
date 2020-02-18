import { Request, Response } from 'express';
import pool from '../database';

class JugadorController {

    public async list (req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM jugador');
        res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create (req: Request, res: Response): Promise<void> {
        const estado = await pool.query('INSERT INTO jugador set ?', [req.body]);
        res.json({message: "Jugador Insertado. " + estado});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE jugador set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM jugador WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
}

export const jugadorController = new JugadorController();
