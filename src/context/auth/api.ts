import { IPayloadLogin, IResponseLogin } from "../../interfaces/auth";
import axios from "axios"

export const register = (payload: IPayloadLogin): Promise<IResponseLogin> =>
    axios.post('/film-types',payload).then((response) => response.data)
  
export const login = (): Promise<IResponseLogin[]> =>
  axios.get('/auth/login').then((response) => response.data)