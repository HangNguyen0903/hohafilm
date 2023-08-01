import { AxiosError, AxiosStatic, AxiosResponse } from "axios";
import { getCookie } from "../utils/cookie";
import { notification } from "antd";
import { IResponseError } from "../interfaces";

export default function setupAxios(axios: AxiosStatic) {

  axios.interceptors.request.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (config: any) => {
      const token = getCookie("access_token");
      config.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      // Thực hiện xử lý response trả về
      return response;
    },
    (error: AxiosError<IResponseError>) => {
      // Xử lý lỗi response
      if (error.response) {
        // Xử lý các mã lỗi HTTP 4xx và 5xx
        notification.error({
          message: error.response.data.message,
          description: error.response.data.description,
        });
      } else if (error.request) {
        // Xử lý lỗi không có response từ server
        notification.error({
          message: "Lỗi phải hồi",
          description: "Không nhận được phản hồi từ máy chủ. Vui lòng thử lại",
        });
      } else {
        // Xử lý các lỗi khác
        notification.error({
          message: "Lỗi hệ thống",
          description: "Có lỗi xảy ra. Vui lòng thử lại",
        });
      }
      return Promise.reject(error);
    }
  );
}
