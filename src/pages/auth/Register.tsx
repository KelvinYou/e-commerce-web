import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import RegisterForm from '../../components/Form/RegisterForm';
import SelectLanguage from '../../components/i18n/SelectLanguage';
import SelectTheme from '../../components/SelectTheme';
import { appTheme } from '../../theme';
import { ThemeContext } from './../../theme/ThemeContext';

const Register = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const styles = {
    content: {
      backgroundColor: "", 
      height: "100vh",
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    formContainer: {
      width: "90vw",
      maxWidth: "500px",
    }
  }

  return (
    <>
      <SelectLanguage/>
      <SelectTheme/>
      <div style={styles.content}>
        <div style={styles.formContainer}>
          <RegisterForm onSubmit={() => {}}/>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Register;
