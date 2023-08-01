import { Button, Form, Input } from "antd"
import logo from "../../assets/images/logo.png";
import './style.css'
import { useMutation } from "@tanstack/react-query";
import { register } from "../../context/auth/api";
import { IPayloadLogin } from "../../interfaces/auth";
const SignUp = () => {

    const { mutate } = useMutation({
        mutationFn: register,

    });

    const onFinish = (values: unknown) => {
        console.log('values: ', values)
        mutate(values as IPayloadLogin);
    }
    return (
        <div className="sign-up">
            <div className="logo">
                <a href="/">
                    <img alt="" src={logo} width={130} />
                </a>
                <div><h2 style={{ color: '#fff' }}>HoHaFilm.com</h2></div>
            </div>
            <Form
                name="sign-up"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div style={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>Username</div>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <div style={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>Password</div>
                <Form.Item

                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <div style={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>Email</div>
                <Form.Item

                    name="email"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <div style={{ color: '#fff', textAlign: 'left', marginBottom: '10px' }}>Phone number</div>
                <Form.Item

                    name="phone_number"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>)
}
export default SignUp