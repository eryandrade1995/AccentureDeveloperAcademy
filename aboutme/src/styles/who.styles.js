import styled from "styled-components";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";



export const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  width: 40%;
  height: 20%;
  border-style: double;
  border-width: 3px;
  border-color: aquamarine;
  border-radius: 24px;
  margin-bottom: 40px;

`;

export const GridRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -390px;
  margin-left: 520px;
  margin-right: 20px;
  justify-content: center;
  width: 40%;
  height: 20%;
  border-style: double;
  border-width: 3px;
  border-color: aquamarine;
  border-radius: 24px;
  margin-bottom: 40px;
`;

export const LeftList = styled.ul`
  text-align: left;
  padding-left: -10%;
  align-items: left;

`;

export const RightList = styled.ul`
  text-align: left;
  padding-right: 3%;
  align-items: right;
  
`;

export const Label = styled.label`
  font-size: 20px;

`;

export const LabelTitleR = styled.label`
  font-size: 24px;
  text-transform: uppercase;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-style: bold;
  text-align: center;
`;

export const BGithub = styled(FaGithubAlt)`

  width: 30px;
  max-width: 40px;
  height: auto;
  margin-right: 290px;
  padding: 0px 0px;
  margin-bottom: -50px;
  float: right;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }

  &:active {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

export const BLinkedin = styled(FaLinkedin)`
 
 width: 30px;
  max-width: 40px;
  height: auto;
  border-radius: 24px;
  margin-right: 250px;
  padding: 0px 0px;
  margin-bottom: -50px;
  float: right;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }

  &:active {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;
