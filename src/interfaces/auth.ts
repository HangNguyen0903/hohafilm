export interface IAuthState {
    token?: {
        token_type?: string,
        access_token?: string,
        refresh_token?: string
    },
    user?: {
        name?: string,
        email?: string
    }
}

export interface IResponseLogin {
    token_type: string,
    access_token: string,
    refresh_token: string
}