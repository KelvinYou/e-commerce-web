import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/Form/LoginForm';
import SelectLanguage from '../../components/i18n/SelectLanguage';
import SelectTheme from '../../components/SelectTheme';
import { appTheme } from '../../theme';
import { ThemeContext } from './../../theme/ThemeContext';

const Login = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const styles = {
    content: {
      backgroundColor: "grey", 
      height: "100vh",
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    formContainer: {
      width: "90vw",
      maxWidth: "500px",
      borderRadius: "20px",
      boxShadow: `0px 0px 10px ${theme.shadowColor}`,
      padding: appTheme.spacing.md,
    }
  }

  return (
    <>
      <SelectLanguage/>
      <SelectTheme/>
      <div style={styles.content}>
        <div style={styles.formContainer}>
          <LoginForm onSubmit={() => {}}/>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Login
