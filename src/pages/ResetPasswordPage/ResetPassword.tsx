import React, { useState } from "react";
import { Heading } from "../../components/Typography/Heading";
import { LinkText } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Header/Button/Button";
import "./ResetPassword.scss";

export const ResetPassword: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="ResetPassword">
      <Heading headingText="Забыли пароль?" />
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={handlePhoneChange}
          required
        />
        <Button buttonText="Отправить код" />
      </form>
      <LinkText text="Вернуться к авторизации" />
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          <a className="reg__link google-link" href="#">
            <img src="./img/icons/google.svg" alt="Google" />
          </a>
          <a className="reg__link google-plus-link" href="#">
            <img src="./img/icons/google-plus.svg" alt="Google Plus" />
          </a>
          <a className="reg__link yandex-link" href="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </a>
          <a className="reg__link mail-ru-link" href="#">
            <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
          </a>
        </div>
      </div>
    </div>
  );
};
