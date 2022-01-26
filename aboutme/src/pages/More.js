import * as S from '../styles/styles';
import { useNavigate } from "react-router-dom";
import '../styles/style.button.css';


function More({ onChangeTheme }) {
    const navigate = useNavigate();
    return (
        <>
           
            <S.MainCard>
            <S.DivTitle>
            <S.H1>Eywelton W. Andrade de Souza</S.H1>
 
            </S.DivTitle>
            <S.H2>Experiência Profissional</S.H2>

                <p>
                <S.H2>Almoxarife</S.H2>
                    <h4>Luandre Temporários LTDA</h4>
                    <h4>Controle de estoque, controle de validade, controle de contagem diária,
                         controle de Danfee's, logística reversa, suporte ao recebimento.</h4>
                </p>
                <p>
                <S.H2>Suporte de TI e Auxiliar de logística</S.H2>
                    <h4>Orgafarma LTDA</h4>
                    <h4>Atuando diretamente com logística, trabalhei com estoque,
                        controle de recebimento de mercadorias,
                        controle de Danfee, controle de rotas, sistema DelageRX,
                        acompanhamento a manutenção do sistema, testes de usuário,
                        documentação dos testes diários.</h4>
                </p>
                <p>
                <S.H2>Prevenção de perdas</S.H2>
                    <h4>HiperBompreço LTDA</h4>
                    <h4>Prevenção de perdas, CFTV, controle de entrada e saída de mercadorias,
                        S O S Shrink.</h4>
                </p>

            
            <S.ButtonPage name="Home" onClick={() => navigate("../home")}> Back </S.ButtonPage>
            </S.MainCard>    
    </>
    )
}

export default More;