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

export interface IPayloadRegister {
  username: string,
  email: string,
  name: string,
  password: string,
  phone_number: string,
  birth: string,
  sex: string,
  profile: string
}
export interface IResponseRegister {}

export interface IPayloadLogin {
    username: string;
    password: string
}
export interface IResponseLogin {
    token_type: string,
    access_token: string,
    refresh_token: string
}