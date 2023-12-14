import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InputWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export const Input = styled.input`
  display: block;
  width: 300px;
  height: 22px;
  padding: 6px 40px;
  background-color: rgb(227, 221, 221);
  border: none;
  outline: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 34px;
  padding: 6px 40px;
  background-color: rgb(227, 221, 221);
  border: none;
  outline: none;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Link = styled(NavLink)`
  display: block;
`;
