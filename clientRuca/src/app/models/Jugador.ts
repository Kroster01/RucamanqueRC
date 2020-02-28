
export class Jugador {
    jug_id?: number;
    jug_nombre?: string;
    jug_telefono?: string;
    jug_email?: string;
    jug_rut?: string; 
    jug_fecha_nac?: Date;
    jug_imagen?: string;

    jug_fecha_ingreso?: Date;
    jug_seguro_acc?: string;
    jug_estado_en_club?: boolean;
    jug_medicamentos?: string;
    jug_evaluacion_nutri?: string;
    jug_alergias?: string;
    jug_observaciones?: string;
    jug_grupo_sanguineo?: string;
    jug_puesto_cancha?: string;
    jug_categoria?: string;
    jug_prevision?: string;

    jug_estatura?: number;
    jug_peso?: number; 
    jug_fecha_esta_peso?: Date;

    jug_usu_crea?: number;
    jug_usu_fecha_crea?: Date;
    jug_usu_mod?: number;
    jug_usu_fecha_mod?: Date  
}