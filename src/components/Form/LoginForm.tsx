import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { appTheme } from '../../theme';
import { ThemeContext } from './../../theme/ThemeContext';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter a username and password');
      return;
    }
    
    onSubmit(email, password);
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
      padding: appTheme.spacing.lg,
    },
    title: {
      fontSize: appTheme.typography.fontSize.heading,
      fontWeight: 'bold',
    },
    label: {
      fontSize: appTheme.typography.fontSize.subheading,
      color: theme.onBackgroundColor,
      marginBottom: appTheme.spacing.md,
    },
    input: {
      padding: appTheme.spacing.sm,
      marginBottom: appTheme.spacing.md,
    },
    button: {
      backgroundColor: theme.primaryColor,
      color: theme.onBackgroundColor,
      padding: appTheme.spacing.md,
      borderRadius: appTheme.spacing.sm,
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <div style={styles.title}>
        {t("Login to your account")}
        </div>

      <div>
        <label style={styles.label} htmlFor="email">{t("Email")}</label>
        <input
          type="text"
          id="username"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label style={styles.label} htmlFor="password">{t("Password")}</label>
        <input
          type="password"
          id="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button style={styles.button} type="submit">{t("Login now")}</button>

      <div>{t("Don't Have An Account ?")} <span>{t("Register")}</span></div>
    </form>
  );
};

export default LoginForm;
