import axios from "axios";
import { IPayloadLogin, IResponseLogin } from "../../interfaces/auth";

export const register = (payload: IPayloadLogin): Promise<IResponseLogin> =>
    axios.post('/auth/register', payload).then((response) => response.data)
  
export const login = (): Promise<IResponseLogin[]> =>
  axios.get('/auth/login').then((response) => response.data)