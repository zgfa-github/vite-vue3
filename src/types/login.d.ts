// eslint-disable-next-line @typescript-eslint/ban-types
export interface IResponse<T> {
    code: number | string;
    result: T;
    message: string;
    type: string;
}

export interface ILogin {
    username: string;
    password: string;
}
