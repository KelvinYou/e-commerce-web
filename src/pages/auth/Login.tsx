import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/Form/LoginForm';
import SelectLanguage from '../../components/i18n/SelectLanguage';
import SelectTheme from '../../components/SelectTheme';
import { ThemeContext } from './../../theme/ThemeContext';

const Login = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);


  return (
    <div style={{ backgroundColor: "" }}>
      <SelectLanguage/>
      <SelectTheme/>
      <LoginForm onSubmit={() => {}}/>
      <div>{t("Don't Have An Account ?")} <span>{t("Register")}</span></div>
    </div>
  )
}

export default Login