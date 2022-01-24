import * as S from '../styles/styles';
import * as W from '../styles/who.styles';
import { useNavigate } from "react-router-dom";



 export default function Home({ onChangeTheme }) {
    const navigate = useNavigate();
    return (
        <div>
            <S.Box>
            <S.H1>Eywelton W. Andrade de Souza</S.H1>
                <W.PhotoBox>
                    <img src="https://avatars.githubusercontent.com/u/75457336?v=4" alt="Avatar foto"></img>
                </W.PhotoBox>
            <S.MainBox>
                    <W.LeftBox>
                    <W.LeftList>
                        <W.Label>Email</W.Label>
                        <S.objTxt>erywelton.2020112078@unicap.br</S.objTxt>

                        <W.Label>Telefone</W.Label>
                        <S.objTxt>(81)994302545</S.objTxt>

                        <W.Label>Idade</W.Label>
                        <S.objTxt>26</S.objTxt>

                        <W.Label>Formação</W.Label>
                        <S.objTxt>Sistemas para Internet - UNICAP - PE</S.objTxt>

                        </W.LeftList>
                    </W.LeftBox>

                    <W.RightBox>
                    <W.RightList>

                        <W.Label>Conhecimentos em Tecnologias</W.Label>
                        <S.objTxt>C# - .Net/ASP .NET</S.objTxt>
                        <S.objTxt>Java - SpringBot</S.objTxt> 
                        <S.objTxt>HTML/CSS</S.objTxt>
                        <S.objTxt>SQLServer</S.objTxt> 
                        <S.objTxt>MySQL</S.objTxt>
                        <S.objTxt>MongoDB</S.objTxt> 
                        <S.objTxt>React/React Native - Expo</S.objTxt>
                        <S.objTxt>Angular</S.objTxt>  

                    </W.RightList>
                    </W.RightBox>

                <W.Divlink>
                    <W.BLinkedin onClick={() => window.open("https://www.linkedin.com/in/erywelton-williams-andrade-de-souza-614736121/", "_blank")}></W.BLinkedin>
                    <W.BGithub onClick={() => window.open("https://github.com/eryandrade1995", "_blank")}></W.BGithub>
                </W.Divlink>

            </S.MainBox>
            </S.Box>
            <div>
            <S.ChangeThemeBtn onClick={onChangeTheme}>
            <S.ThemeIcon />
            </S.ChangeThemeBtn>
            <S.ButtonPage name="More" onClick={() => navigate("../more")}> More </S.ButtonPage>
            </div>

        </div>
    )
}

