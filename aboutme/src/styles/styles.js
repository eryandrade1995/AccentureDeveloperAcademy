import styled, { css } from "styled-components";


export const MainCard= styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px;
  justify-content: center;
  width: 80%;
  height: 80%;
  border-style: double;
  border-width: 3px;
  border-color: aquamarine;
  border-radius: 24px;
  background-color: lightsteelblue;
`;

export const H2 = styled.h1`
font-size: 25px;
font-style: bold;
text-align: center;
font-family: 'Dongle', sans-serif;

`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;

  padding: 0 300px;
  height: 90px;

  background-color: #9932CC;
  color: #ffffff;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  span {
    font-weight: bold;
  }

`;

export const ButtonPage = styled.button`
margin-top:  0px;
margin-left: 360px;
margin-right: 0px;
padding: 10px 15px;
color: rgb(253, 249, 243);
font-weight: 600;
float: inline-end;
position: sticky;
text-transform: uppercase;
background: #9932CC;
border: none;
border-radius: 3px;
width: 200px;
&:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  &:active {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

export const H1 = styled.h1`
font-family: 'Abril Fatface', cursive;
text-align: center;
font-size: 20px;
text-decoration-style: solid;
font-style: bold;
`;

export const objTxt = styled.h1`
font-size: 15px;
`;

export const Img = styled.img`
border-radius: 60px;
border-style: double;
border-color: aquamarine;
margin-top: 8px;
margin-left: 290px;
margin-bottom: 20px;
margin-right: 20px;
width: 35%;
height: 35%;
`;

export const NoStylePreset = css`
  outline: none;
  border: none;
  background: none;
`;





