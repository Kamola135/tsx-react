import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ResetPassword } from "./pages/ResetPasswordPage/ResetPassword";
import { RegistrationPage } from "./pages/PegistrationPage/RegistrationPage";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

