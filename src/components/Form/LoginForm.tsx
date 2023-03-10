import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { appTheme } from '../../theme';
import { ThemeContext } from './../../theme/ThemeContext';
import { useNavigate } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
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
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Define state for the password input's visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the visibility of the password input
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    console.info("email: " + email);
    console.info("password: " + password);

    if (!email) {
      setEmailError("Email cannot be blank");
    }

    if (!password) {
      setPasswordError('Password cannot be blank');
    }
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
      borderRadius: "10px",
      boxShadow: `0px 0px 3px ${theme.shadowColor}`,
    },
    title: {
      fontSize: appTheme.typography.fontSize.heading,
      color: theme.onBackgroundColor,
      fontWeight: 'regular',
    },
    subtitle: {
      fontSize: '14px',
      color: theme.onBackgroundColor,
      fontWeight: 'regular',
    },
    label: {
      color: theme.onBackgroundColor,
      marginBottom: '10px',
    },
    input: {
      color: theme.onBackgroundColor,
      borderColor: theme.onBackgroundColor,
    },
    button: {
      backgroundColor: theme.primaryColor,
      color: theme.onPrimaryColor,
    },
    footText: {
      color: theme.onBackgroundColor,
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <div style={styles.title}>
        {t("Login")}
      </div>

      <div style={styles.subtitle}>
        {t("Let's build something greate")}
      </div>
      
      <div className="input-container">
        <div style={styles.label}>{t("Email")}</div>
        <OutlinedInput
          type="text"
          id="username"
          style={styles.input}
          fullWidth
          placeholder={t("Enter your email") ?? ""}
          className='input-field'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ color: "red" }}>
          {emailError && <p>{t(emailError)}</p>}
        </div>
        
      </div>
      <div className="input-container">
        <div style={styles.label}>{t("Password")}</div>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          id="password"
          style={styles.input}
          fullWidth
          className='input-field'
          placeholder={t("Enter your password") ?? ""}
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
        <div style={{ color: "red" }}>
          {passwordError && <p>{t(passwordError)}</p>}
        </div>
        
      </div>

      <Button 
        variant='contained'
        className="submit-button"
        type="submit"
        style={styles.button}
      >{t("Login now")}</Button>

      <div className="form-foot" style={styles.footText}>{t("Don't Have An Account ?")} 
        <span 
          className='span-text' 
          onClick={ () => navigate("/") }
        >{t("Register")}</span>
      </div>
    </form>
  );
};

export default LoginForm;
