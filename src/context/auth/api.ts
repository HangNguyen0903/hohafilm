import { IPayloadLogin, IResponseLogin } from "../../interfaces/auth";
import axios from "../../libs/axios";

export const register = (payload: IPayloadLogin): Promise<IResponseLogin> =>
  axios.post("/auth/register", payload).then((response) => response.data);

export const login = (): Promise<IResponseLogin[]> =>
  axios.get("/auth/login").then((response) => response.data);
