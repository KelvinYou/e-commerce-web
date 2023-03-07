import React from 'react';
import { useTranslation } from 'react-i18next';
// import LocaleDropDown from '../../components/i18n/LocaleDropDown';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <LocaleDropDown/> */}
      <div>{t("Login to your account")}</div>
      <div>{t("Email")}</div>
      <div>{t("Password")}</div>
      <div>{t("Login now")}</div>
      <div>{t("Don't Have An Account ?")} <span>{t("Register")}</span></div>
    </div>
  )
}

export default Login