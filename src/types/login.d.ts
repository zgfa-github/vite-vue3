// eslint-disable-next-line @typescript-eslint/ban-types
export interface IResponse<P = {}> {
    code: number | string;
    data: P;
    msg: string;
}

export interface ILogin {
    username: string;
    password: string;
}
