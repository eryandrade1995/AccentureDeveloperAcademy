import * as S from '../styles/styles';
import * as W from '../styles/who.styles';
import { useNavigate } from "react-router-dom";
import '../styles/style.button.css';

 export default function Home() {
    const navigate = useNavigate();
    return (
        <>
        
        <S.MainCard>
            <S.DivTitle>
            <S.H1>Eywelton W. Andrade de Souza</S.H1>
            </S.DivTitle>

                <S.Img src="https://avatars.githubusercontent.com/u/75457336?v=4" alt="Avatar foto"></S.Img>
            
            <W.GridLeft>         
                    <W.LeftList>
                        <W.LabelTitleR>Contato</W.LabelTitleR>
                        <p></p>
                        <W.Label>Email</W.Label>
                        <S.objTxt>erywelton.2020112078@unicap.br</S.objTxt>

                        <W.Label>Telefone</W.Label>
                        <S.objTxt>(81)994302545</S.objTxt>

                        <W.Label>Idade</W.Label>
                        <S.objTxt>26</S.objTxt>

                        <W.Label>Formação</W.Label>
                        <S.objTxt>Sistemas para Internet - UNICAP - PE</S.objTxt>

                        </W.LeftList>      
        </W.GridLeft>
       
        <W.GridRight>
                    <W.RightList>

                        <W.LabelTitleR>Conhecimentos</W.LabelTitleR>
                        <p></p>
                        <S.objTxt>C# - .Net/ASP .NET</S.objTxt>
                        <S.objTxt>Java - SpringBoot</S.objTxt>
                        <S.objTxt>Javascript</S.objTxt>  
                        <S.objTxt>HTML/CSS</S.objTxt>
                        <S.objTxt>SQL Server</S.objTxt> 
                        <S.objTxt>MySQL</S.objTxt>
                        <S.objTxt>MongoDB</S.objTxt> 
                        <S.objTxt>React/React Native - Expo</S.objTxt>
                        <S.objTxt>Angular</S.objTxt>
                        <S.objTxt>Django</S.objTxt> 

                    </W.RightList>                  
        </W.GridRight>

                <div id="btn-links">

                    <div>
                    <W.BLinkedin onClick={() => window.open("https://www.linkedin.com/in/erywelton-williams-andrade-de-souza-614736121/", "_blank")}></W.BLinkedin>
                    </div>

                    <div>
                    <W.BGithub onClick={() => window.open("https://github.com/eryandrade1995", "_blank")}></W.BGithub>
                    </div>

                    <div>
                    <S.ButtonPage name="More" onClick={() => navigate("../more")}> More </S.ButtonPage> 
                    </div>

                </div>
        </S.MainCard>
        
        </>
    )
}

