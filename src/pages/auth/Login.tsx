import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import CardBox from '../../components/CardBox';
import Form from '../../components/Form';
// import SelectLanguage from '../../components/i18n/SelectLanguage';
// import SelectTheme from '../../components/SelectTheme';
import { ThemeContext } from './../../theme/ThemeContext';

const Login = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ backgroundColor: "" }}>
      {/* <SelectLanguage/> */}
      {/* <SelectTheme/> */}
      <CardBox children="hi" heading='yo'/>
      <Button onClick={() => { console.info("hi")}}> Hi </Button>
      <div style={{ color: theme.onBackgroundColor }}>{t("Login to your account")}</div>
      <div>{t("Email")}</div>
      <div>{t("Password")}</div>
      <div>{t("Login now")}</div>
      <div>{t("Don't Have An Account ?")} <span>{t("Register")}</span></div>
    </div>
  )
}

export default Login