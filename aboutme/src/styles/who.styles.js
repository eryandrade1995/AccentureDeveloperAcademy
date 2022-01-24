import styled from "styled-components";
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';


export const LeftBox = styled.div`
  flex: 1 1 0;
  width: 50vw;
  height: 100vh;
  padding-left: 3%;
`;

export const RightBox = styled.div`
  flex: 1 1 0;
  width: 50vw;
  height: 100vh;
  padding-right: 3%;
`;

export const PhotoBox = styled.div`
  flex: 1 1 0;
  width: 50vw;
  height: 100vh;
  flex-direction: center;
`;


export const LeftList = styled.ul`
text-align: left;
padding-left: 3%;
`;

export const RightList = styled.ul`
text-align: right;
padding-right: 3%;
`;


export const Label = styled.label`
font-size: 32px;
color: ${(props) => props.theme.secondary};
`;

export const Divlink = styled.div`
display: flex;
flex: 1;
margin: 20px;
flex-direction: column;
`;

export const BGithub = styled(FaGithubAlt)`
margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    color: ${props => props.theme.iconPrimary};
    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
`;

export const BLinkedin = styled(FaLinkedin)`
margin: 10px;
    width: 25px;
    max-width: 180px;
    height: auto;
    color: ${props => props.theme.iconPrimary};
    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
    }    
`;

