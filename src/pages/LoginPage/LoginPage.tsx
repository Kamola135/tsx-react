import { Heading } from "../../components/Typography/Heading";
import * as yup from "yup";
import { LinkText } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Header/Button/Button";
import { Link } from "react-router-dom";
import { Container } from "../../components/UI/Header/Container/Container.style";
import "./LoginPage.scss";
import { StyleLoginPage } from "./LoginPage.style";
import { RegistrationInfo } from "../../components/UI/Header/Registration/RegistrationInfo";
import { Input } from "../../components/UI/Header/Input/Input";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const LoginFormScheme = yup.object({
  userEmail: yup.string().required("Введите ваш email").email("Некорректный email"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен состоять как минимум из 4 символов"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(LoginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
          <Controller 
            name="userEmail" 
            control={control} 
            render={({ field }) => (
              <Input 
                type="text" 
                placeholder="Email"
                errorText={errors.userEmail?.message}
                isError={!!errors.userEmail} 
                {...field} 
              />
            )}
          />
          <Controller 
            name="userPassword" 
            control={control} 
            render={({ field }) => (
              <Input 
                type="password" 
                placeholder="Пароль" 
                errorText={errors.userPassword?.message} 
                isError={!!errors.userPassword} 
                {...field} 
              />
            )}
          />
          <Button isPrimary={true} buttonText="Войти" />
        </form>
        <Link to="/reset-password">
          <LinkText text="Забыли пароль?" />
        </Link>
        <RegistrationInfo />
      </StyleLoginPage>
    </Container>
  );
};
