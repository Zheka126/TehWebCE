import { Form, Input, Select, Checkbox, Button } from 'antd';
import { observer } from 'mobx-react';
import { useState } from 'react';
import './CustomForm.css';

const { Option } = Select;

export const CustomForm = observer(() => {
  const [nick, setNick] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = (values: any) => {
    console.log(values);
    alert(`${nick} ${phone} ${gender}`);
  };

  return (
    <Form
      style={{ width: '30%', margin: '0 auto' }}
      onFinish={onSubmit}
      scrollToFirstError
    >
      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input onChange={(e) => setNick(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' },
        ]}
      >
        <Input onChange={(e) => setPhone(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="Comment"
        label="Comment"
        rules={[{ message: 'Your comment' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender" onChange={(e) => setGender(e)}>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Gay">Gay</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        // rules={[
        //   {
        //     validator: (_, value) =>
        //       value
        //         ? Promise.resolve()
        //         : Promise.reject(new Error('Should accept agreement')),
        //   },
        // ]}
      >
        <Checkbox>
          I have read the{' '}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
});
