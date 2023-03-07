import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../../components/i18n/SelectLanguage';
import SelectTheme from '../../components/SelectTheme';
import { ThemeContext } from './../../theme/ThemeContext';
const Login = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {/* <SelectLanguage/> */}
      <SelectTheme/>
      
      <div style={{ color: theme.onBackgroundColor }}>{t("Login to your account")}</div>
      <div>{t("Email")}</div>
      <div>{t("Password")}</div>
      <div>{t("Login now")}</div>
      <div>{t("Don't Have An Account ?")} <span>{t("Register")}</span></div>
    </div>
  )
}

export default Login