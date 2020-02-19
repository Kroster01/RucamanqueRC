export interface JwtResponseI {
    dataUser: {
        id: number,
        nickName: string,
        accessToken: string,
        expiresIn: string
    }
}
