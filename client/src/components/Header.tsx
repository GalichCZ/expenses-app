import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className="text-white flex justify-around fixed w-full h-fit bg-slate-800 items-center py-4">
      <Link to={isLoggedIn ? "/expenses" : "/"} className="mb-0 text-p-pc">
        Expense conrol
      </Link>
      <div className="text-p-pc">
        {isLoggedIn ? (
          <a onClick={authCtx.logout}>Log out</a>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <span> / </span>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
