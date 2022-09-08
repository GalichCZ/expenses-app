import { createContext, ReactElement, useState } from "react";

interface authCtx {
  token: string | null;
  isLoggedIn: boolean;
  login: (c: string) => void;
  logout: () => void;
}

const AuthContext = createContext<authCtx>({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: any) => {
  const [token, setToken] = useState<string | null>(
    window.localStorage.getItem("token")
  );

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    window.localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    window.localStorage.removeItem("token");
  };

  const contextValue: authCtx = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
