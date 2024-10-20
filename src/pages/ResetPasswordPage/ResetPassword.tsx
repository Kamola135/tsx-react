import React, { useState } from "react";
import { Heading } from "../../components/Typography/Heading"; // Убедитесь, что Heading правильно работает
import { Button } from "../../components/UI/Header/Button/Button";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.scss";

export const ResetPassword: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [smsCode, setSmsCode] = useState<string>("");
  const navigate = useNavigate();

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmsCode(event.target.value);
  };

  const handlePhoneSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Phone Number:", phoneNumber);
    setIsCodeSent(true);
  };

  const handleCodeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("SMS Code:", smsCode);
    navigate("/#"); // Убедитесь, что это правильный маршрут
  };

  return (
    <div className="ResetPassword">
      <h1>Забыли пароль?</h1> {/* Добавил стандартный заголовок */}
      <Heading headingText="Забыли пароль?" /> {/* Убедитесь, что этот компонент рендерит заголовок правильно */}
      {!isCodeSent ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          <Button isPrimary={true} buttonText="Отправить код" />
        </form>
      ) : (
        <form onSubmit={handleCodeSubmit}>
          <input
            type="text"
            placeholder="Введите код из SMS"
            value={smsCode}
            onChange={handleCodeChange}
            required
          />
          <Button isPrimary={true} buttonText="Далее" />
        </form>
      )}
    </div>
  );
};
