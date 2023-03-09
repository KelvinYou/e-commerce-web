import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { appTheme } from '../../theme';
import { ThemeContext } from './../../theme/ThemeContext';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './LoginForm.scss';
interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Define state for the password input's visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the visibility of the password input
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.info("email: " + email);
    console.info("password: " + password);

    // if (!email || !password) {
    //   setError('Please enter a username and password');
    //   return;
    // }
    
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
      color: '#282828',
      fontWeight: 'regular',
    },
    subtitle: {
      fontSize: '14px',
      color: '#31394D',
      fontWeight: 'regular',
    },
    label: {
      fontSize: appTheme.typography.fontSize.subheading,
      color: theme.onBackgroundColor,
      marginBottom: appTheme.spacing.md,
    },
    input: {
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
        {t("Login")}
      </div>

      <div style={styles.subtitle}>
        {t("Let's build something greate")}
      </div>
      
      <div>
        <div style={styles.label}>{t("Email")}</div>
        <OutlinedInput
          type="text"
          id="username"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div style={styles.label}>{t("Password")}</div>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      {error && <p>{error}</p>}
      <button style={styles.button} type="submit">{t("Login now")}</button>

      <div>{t("Don't Have An Account ?")} <span>{t("Register")}</span></div>
    </form>
  );
};

export default LoginForm;
