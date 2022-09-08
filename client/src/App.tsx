import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import GreetingPage from "./pages/GreetingPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import AuthContext from "./store/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {!authCtx.isLoggedIn && (
            <>
              <Route path="/" element={<GreetingPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/expenses" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="/expenses" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
