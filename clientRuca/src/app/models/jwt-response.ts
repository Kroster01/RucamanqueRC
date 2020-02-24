export interface JwtResponseI {
    code: number;
    descripServer: string;
    dataUser: {
        id: number,
        nickName: string,
        accessToken: string,
        expiresIn: string
    }
}
