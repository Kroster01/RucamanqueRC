import { Request, Response } from 'express';
import pool from '../database';

class JugadorController {

    public async list (req: Request, res: Response): Promise<void> {
        const sql = 'SELECT JUG_ID, JUG_NOMBRE, JUG_TELEFONO, JUG_EMAIL, JUG_RUT, JUG_FECHA_NAC, JUG_IMAGEN, JUG_FECHA_INGRESO, JUG_SEGURO_ACC, JUG_ESTADO_EN_CLUB, JUG_MEDICAMENTOS, JUG_EVALUACION_NUTRI, JUG_ALERGIAS, '
        + 'JUG_OBSERVACIONES, JUG_GRUPO_SANGUINEO, JUG_PUESTO_CANCHA, JUG_CATEGORIA, JUG_PREVISION, JUG_ESTATURA, JUG_PESO, JUG_FECHA_ESTA_PESO, '
        + 'JUG_USU_CREA, JUG_USU_CREA_FECHA, JUG_USU_MOD, JUG_USU_MOD_FECHA '
        + 'FROM jugador AS JUG '
        + 'WHERE JUG.JUG_ESTADO_EN_CLUB = 1;';
        const jugadores = await pool.query(sql);
        res.json(jugadores);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const sql = 'SELECT JUG_ID, JUG_NOMBRE, JUG_TELEFONO, JUG_EMAIL, JUG_RUT, JUG_FECHA_NAC, JUG_IMAGEN, JUG_FECHA_INGRESO, JUG_SEGURO_ACC, JUG_ESTADO_EN_CLUB, JUG_MEDICAMENTOS, JUG_EVALUACION_NUTRI, JUG_ALERGIAS, '
        + 'JUG_OBSERVACIONES, JUG_GRUPO_SANGUINEO, JUG_PUESTO_CANCHA, JUG_CATEGORIA, JUG_PREVISION, JUG_ESTATURA, JUG_PESO, JUG_FECHA_ESTA_PESO, '
        + 'JUG_USU_CREA, JUG_USU_CREA_FECHA, JUG_USU_MOD, JUG_USU_MOD_FECHA '
        + 'FROM jugador AS JUG '
        + 'WHERE JUG.JUG_ESTADO_EN_CLUB = 1 '
        + 'AND JUG.JUG_ID = ?;';
        const jugadores = await pool.query(sql, [id]);
        if (jugadores.length > 0) {
            return res.json(jugadores[0]);
        }
        res.status(404).json({ text: "The jugador doesn't exits" });
    }

    public async create (req: Request, res: Response): Promise<void> {
        const estado = await pool.query('INSERT INTO jugador set ?', [req.body]);
        res.json({message: "Jugador Insertado. " + estado});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const sql = 'UPDATE jugador set ? WHERE jug_id = ?'
        await pool.query(sql, [req.body, id]);
        res.json({ message: "The jugador was Updated" });
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM jugador WHERE jug_id = ?', [id]);
        res.json({ message: "The jugador was deleted" });
    }
}

export const jugadorController = new JugadorController();
