import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import ModalRegis from "./Modal";
import "../Login/Login.scss";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {
    const foundToken = JSON.parse(localStorage.getItem("token"));
    if (foundToken) {
      navigate("/profile");
    }
  }, [login, navigate]);

  return (
    <div className="Login">
     <Divider orientation="center">
        <h1>LOGIN</h1>
      </Divider>

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
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
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
            <Checkbox className="check">Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <ModalRegis />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
