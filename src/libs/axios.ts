import axios from 'axios';
// Đặt cấu hình mặc định lúc tạo ra instance
const instance = axios.create({
  baseURL: 'http://192.168.1.100:8080/'
});

// Sửa đổi cấu hình trị mặc định sau khi tạo ra instance

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;