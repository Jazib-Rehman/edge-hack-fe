import { useEffect, useState } from "react";

import {
  Tabs,
  Col,
  Form,
  Input,
  Typography,
  Select,
  Checkbox,
  Button,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Item } = Form;
function LoginSignup({
  login,
  signup,
  setShowPage,
  type,
  setType,
  company,
  email,
}) {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState("afasfa");

  // const PHONE_REGEX = /^(?:\d{8}(?:\d{2}(?:\d{2})?)?|\(\+?\d{2,3}\)\s?(?:\d{4}[\s*.-]?\d{4}|\d{3}[\s*.-]?\d{3}|\d{2}([\s*.-]?)\d{2}\1\d{2}(?:\1\d{2})?))$/;
  // const validatePhone = (value) => value.length === 11 && PHONE_REGEX.test(value);

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      companyname: "company",
      email: "email",
    });
  }, []);

  const loginFunction = ({ email, password }) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      navigate("/admin")
    } else {
      message.error("Wrong username or password!")
    }

  }

  return (
    <div className="w-full">
      <Col>
        {/* <Tabs activeKey={type} size="large" onChange={setType} centered>
          <Tabs.TabPane className="text-black" key="login" tab="Login" />
          <Tabs.TabPane key="signup" tab="Sign up" />
        </Tabs> */}
        <br />

        {type === "login" && (
          <Form
            className="container"
            onFinish={async (values) => loginFunction(values)}
          >
            <Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "email not valid!",
                },
                {
                  required: true,
                  message: " ",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Item>
            <Item
              name="password"
              rules={[{ required: true, message: " " }, { min: 3 }]}
            >
              <Input.Password placeholder="Password" />
            </Item>
            {/* <div className="remember-me">
              <Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Item>
              <a onClick={() => setShowPage("forgotPassword")}>
                <Text
                  underline
                  style={{
                    color: "#1890FF",
                  }}
                >
                  Forgot password?
                </Text>
              </a>
            </div> */}
            <Button size="large" type="primary" htmlType="submit" className="mt-4 full-width bg-[#4ac18e]">
              Login
            </Button>
          </Form>
        )}
      </Col>
    </div>
  );
}

export default LoginSignup;
