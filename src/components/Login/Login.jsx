import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../context/UserContext/UserState";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const onFinish = (values) => {
        login(values);
    };

    useEffect(() => {
        const foundToken = JSON.parse(localStorage.getItem("token"));
        if (foundToken) {
            navigate("/profile")
        }

    },[login])

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};

export default Login;
