import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/httpHook';
import { Form, Input, Button, Checkbox, message } from 'antd';

export const AuthFrom = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();

  const [form, setForm] = useState({ email: '', password: '' });

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message.info(data.message);
    } catch (error) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
      message.info(data.message);
    } catch (error) {}
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 6 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input id="email" value={form.email} onChange={changeHandler} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          id="password"
          value={form.password}
          onChange={changeHandler}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 6 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 6 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ margin: 5 }}
          onClick={loginHandler}
        >
          Log in
        </Button>
        <Button type="primary" htmlType="submit" onClick={registerHandler}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};
