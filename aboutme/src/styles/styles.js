import { BsFillCloudMoonFill } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.primary};
`;

export const MainBox = styled.div`
  height: 95%;
  display: flex;
`;

export const ButtonPage = styled.button`
margin: 10px;
padding: 10px 15px;
color: rgb(253, 249, 243);
font-weight: 600;
text-transform: uppercase;
background: #a000fe;
border: none;
border-radius: 3px;
width: 200px;
cursor: pointer;
`;

export const Footer = styled.div`
display: flex;
justify-content: center;
`;

export const H1 = styled.h1`
font-size: 25px;
`;

export const objTxt = styled.li`
font-size: 25px;   
`;

export const NoStylePreset = css`
  outline: none;
  border: none;
  background: none;
`;

export const ChangeThemeBtn = styled.button`
${NoStylePreset}
transition: all 0.2s ease;

&:hover {
  cursor: pointer;
  transform: translateY(-4px);
}

&:active {
  cursor: pointer;
  transform: translateY(-2px);
}
`;

export const ThemeIcon = styled(BsFillCloudMoonFill)`
    margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
        transform: translateY(-4px);
    }    
`;

