import { Request, Response } from 'express';
import pool from '../database';

class LoginController {

    public async list (req: Request, res: Response): Promise<void> {
        const login = await pool.query('SELECT * FROM usuario');
        res.json(login);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { password } = req.params;
        const login = await pool.query('SELECT * FROM usuario WHERE usu_id = ?', [password]);
        console.log(login.length);
        if (login.length > 0) {
            return res.json(login[0]);
        }
        res.status(404).json({ text: "The usuario doesn't exitsddd" });
    }

    public async login (req: Request, res: Response): Promise<any> {
        const { password } = req.body;
        const { nickName } = req.body;
        let sql = 'SELECT * FROM usuario WHERE USU_NICKNAME = \'' + [nickName] + '\' and USU_PASSWORD = \'' + [password] + '\' and USU_ESTADO = 1';
        console.log(sql);
        const login = await pool.query(sql);
        console.log(login.length);
        if (login.length > 0) {
            return res.status(200).json({ 
                dataUser: {
                    id: login[0].USU_ID,
                    nickName: login[0].USU_NICKNAME,
                    accessToken: "",
                    expiresIn: ""
                },
                code: 200,
                descripServer: "Login Esitoso."
            });
        }
        return res.status(200).json({ 
            dataUser: null,
            code: 401,
            text: "Favor validar su Usuario u contraseñas."
     });
    }

    public async create (req: Request, res: Response): Promise<void> {
        const estado = await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message: "usuario Insertado. " + estado});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE usuario set ? WHERE usu_id = ?', [req.body, id]);
        res.json({ message: "The usuario was Updated" });
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM jugador WHERE usu_id = ?', [id]);
        res.json({ message: "The jugador was deleted" });
    }
}

export const loginController = new LoginController();
