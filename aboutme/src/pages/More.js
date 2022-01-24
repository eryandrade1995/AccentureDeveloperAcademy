import * as S from '../styles/styles';
import { useNavigate } from "react-router-dom";

function More({ onChangeTheme }) {
    const navigate = useNavigate();
    return (
        <>
            <S.Box>
            <h2>Experiência profissional</h2>
            <S.MainBox>

                <p>
                    <h3>Almoxarife</h3>
                    <h4>Luandre Temporários LTDA</h4>
                    <h4>Controle de estoque, controle de validade, controle de contagem diária,
                         controle de Danfee's, logística reversa, suporte ao recebimento.</h4>
                </p>
                <p>
                    <h3>Suporte de TI e Auxiliar de logística</h3>
                    <h4>Orgafarma LTDA</h4>
                    <h4>Atuando diretamente com logística, trabalhei com estoque,
                        controle de recebimento de mercadorias,
                        controle de Danfee, controle de rotas, sistema DelageRX,
                        acompanhamento a manutenção do sistema, testes de usuário,
                        documentação dos testes diários.</h4>
                </p>
                <p>
                <h3>Prevenção de perdas</h3>
                    <h4>HiperBompreço LTDA</h4>
                    <h4>Prevenção de perdas, CFTV, controle de entrada e saída de mercadorias,
                        S O S Shrink.</h4>
                </p>

            </S.MainBox>
            </S.Box>
            

            <div>
            <S.ChangeThemeBtn onClick={onChangeTheme}>
            <S.ThemeIcon />
            </S.ChangeThemeBtn>
            <S.ButtonPage name="Home" onClick={() => navigate("../home")}> Back </S.ButtonPage>
            </div>
    </>
    )
}

export default More;