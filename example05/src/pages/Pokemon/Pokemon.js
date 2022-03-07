import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import * as S from "./Pokemon.styles";
import usePokemon from "../../hooks/usePokemon";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { POKE_KEY } from "../../redux/reducers/poke.details.reducer";
import { useNavigate } from "react-router-dom";

export default function Pokemon() {
  const navigate = useNavigate();
  const { pokemons, recarregarLista, removerPokemon } = usePokemon();


  return (
    <Container title="Pokemon">
      <S.Div>
        {pokemons.map((pokemon, index) => (
          <S.Row key={index}>
            <S.ButtonIcon onClick={() => removerPokemon(pokemon.name)}>
              <S.Icon />
            </S.ButtonIcon>

            <S.ButtonIcon /* onClick={() => navigate(`PokeDetails/${pokemon.name}`)} */ >
              <S.Label>
              <Link to={`/details/${pokemon.name}`}><p>{pokemon.name}</p></Link> 
                {/* {pokemon.name} */}
              </S.Label>
            </S.ButtonIcon>
          </S.Row>
        ))}
      </S.Div>

      <S.Footer>
        <Button name="Back" onClick={() => navigate("../home")} />
        <Button name="Recarregar" onClick={() => recarregarLista()} />
      </S.Footer>
    </Container>
  );
}
