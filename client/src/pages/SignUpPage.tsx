import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Column from "../UI/Column";
import React, { useState } from "react";
import Section from "../UI/Section";
import Block from "../UI/Block";
import Button from "../UI/Button";

const API_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGUl79issF1GVQ3ql18sPq--cdJmhiiUI";

const SignUpPage: React.FC = () => {
  const [user, setUser] = useState<object>({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  const register = async () => {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => console.log(data));
      } else {
        return res.json().then((data) => console.log(data));
      }
    });
  };

  return (
    <Section>
      <h1 className="text-h1-pc text-white">Sign up !</h1>
      <Block styles="w-1/4 py-8">
        <form className="w-full" action="">
          <Column>
            <Column styles="w-3/4">
              <label htmlFor="">Email</label>
              <Input
                prefix={<UserOutlined />}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </Column>
            <Column styles="mt-6 w-3/4">
              <label htmlFor="">Password</label>
              <Input.Password
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                placeholder="input password"
              />
            </Column>
          </Column>
        </form>
        <Button onClick={register} styles="mt-6">
          Sign Up
        </Button>
      </Block>
    </Section>
  );
};

export default SignUpPage;
