import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DownRowWrapper from '../styled/down_row_wrapper';
import StyledButton from '../styled/styled_button';

const Login = ({
  handleFormSubmit,
  username,
  onUsernameChange,
  password,
  onPasswordChange,
}) => {
  return (
    <DownRowWrapper>
      <DownRowWrapper textColor="black">
        <h2 className="custom_header">Identify yourself</h2>
      </DownRowWrapper>
      <DownRowWrapper textColor="black">
        <form onSubmit={handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={onUsernameChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <DownRowWrapper>
            <StyledButton type="submit">Login</StyledButton>
          </DownRowWrapper>
        </form>
      </DownRowWrapper>
    </DownRowWrapper>
  );
};

export { Login };
