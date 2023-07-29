import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { getCookie, setCookie } from "../../utils/cookie";
import './login.css'
import logo from "../../assets/images/logo.png";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

interface Login {
  openModal: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = () => {

  const onFinish = () => {

    console.log(getCookie("access_token"))
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="logo">
        <a href="/">
          <img alt="" src={logo} width={130} />
        </a>
        <div><h2 style={{ color: '#fff' }}>HoHaFilm.com</h2></div>
      </div>

      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>Username</div>
        <Form.Item
          // label="Username"
          name="username"
        // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <div style={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>Password</div>
        <Form.Item
          // label="Password"
          name="password"
        // rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" style={{ justifyContent: 'end' }}>
          <Checkbox><div style={{ color: '#fff' }}>Remember me</div></Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div><a>Điều khoản sử dụng</a> -<a>Chính sách bảo mật</a> </div>
      <div>Don't have an account yet?<a href="sign-up"> Register now</a></div>
      {/* <hr />
      <Row gutter={20}>
        <Col><div><GoogleOutlined />Google</div></Col>
        <Col><div><FacebookOutlined /> Facebooks</div></Col>
      </Row> */}
    </div>
  );
};
export default Login;
