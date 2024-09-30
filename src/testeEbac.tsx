import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontsize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => props.principal ? '#ff0000' : '#0000ff'};
  font-size: ${(props) => props.fontsize || '16px'};
  padding: 8px;
  border-radius: 8px;
  margin-left: 22px;

  &:hover {
    background-color: darkred;
    color: yellow;
  }
`

const BotaoPerigo = styled(Botao)`
  background-color: darkred;
  color: yellow;

  &:hover {
    background-color: yellow;
    color: darkred;
  }
`

function Teste() {
  return (
  <div>
    <Botao>clique aqui</Botao>
    <Botao principal fontsize='32px'>clique aqui</Botao>
    <BotaoPerigo fontsize='56px'>Clique aqui</BotaoPerigo>
  </div>
  )
}

export default Teste
