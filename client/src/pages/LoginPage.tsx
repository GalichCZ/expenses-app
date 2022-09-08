import React, { useContext, useEffect, useState } from "react";
import Block from "../UI/Block";
import Column from "../UI/Column";
import Button from "../UI/Button";
import Section from "../UI/Section";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const API_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGUl79issF1GVQ3ql18sPq--cdJmhiiUI";

const LoginPage = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  useEffect(() => {
    if (isLoggedIn) navigate("/expenses");
  }, [isLoggedIn]);

  const [user, setUser] = useState<object>({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  const login = async () => {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          authCtx.login(data.idToken);
        });
      } else {
        return res.json().then((data) => console.log(data));
      }
    });
  };

  return (
    <Section>
      <h1 className="text-h1-pc text-white">Log in</h1>
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
        <Button onClick={login} styles="mt-6">
          Log in
        </Button>
        <Link to="/signup" className="mt-6">
          Don't have account ? Sign UP !
        </Link>
      </Block>
    </Section>
  );
};

export default LoginPage;
