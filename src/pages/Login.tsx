import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div>
      Login
      <h1>{t("Welcome")}</h1>
    </div>
  );
};

export default Login;
