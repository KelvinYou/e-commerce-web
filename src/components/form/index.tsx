import React, { useState } from 'react';
import styled from 'styled-components';

interface FormProps {
  onSubmit: (data: FormData) => void;
  formType: 'login' | 'register';
}

interface FormData {
  nickname?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  max-width: 20rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const Form: React.FC<FormProps> = ({ onSubmit, formType }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const isRegisterForm = formType === 'register';

  return (
    <FormContainer onSubmit={handleSubmit}>
      {isRegisterForm && (
        <>
          <Input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Nickname"
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </>
      )}
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <Button type="submit">{isRegisterForm ? 'Register' : 'Log In'}</Button>
    </FormContainer>
  );
};

export default Form;
