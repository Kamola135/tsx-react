import { Heading } from "../../components/Typography/Heading";
import * as yup from "yup";
import { Button } from "../../components/UI/Header/Button/Button";
import { Container } from "../../components/UI/Header/Container/Container.style";
import "./RegistrationPage.scss"
import { StyleRegistrationInfo } from "../../components/UI/Header/Registration/RegistrationInfo.style";
import { Input } from "../../components/UI/Header/Input/Input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface IRegistrationForm {
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
}

const RegistrationFormScheme = yup.object({
  userEmail: yup.string().required("Введите ваш email").email("Некорректный email"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен состоять как минимум из 4 символов"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('userPassword')], 'Пароли не совпадают')
    .required('Повторите пароль'),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(RegistrationFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onRegisterSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ email: data.userEmail, password: data.userPassword });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/"); 
  };

  return (
    <Container>
      <StyleRegistrationInfo>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegisterSubmit)} action="#">
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
          <Controller 
            name="confirmPassword" 
            control={control} 
            render={({ field }) => (
              <Input 
                type="password" 
                placeholder="Повторите пароль" 
                errorText={errors.confirmPassword?.message} 
                isError={!!errors.confirmPassword} 
                {...field} 
              />
            )}
          />
          <Button type="submit" isPrimary={true} buttonText="Далее" />
        </form>
      </StyleRegistrationInfo>
    </Container>
  );
};
