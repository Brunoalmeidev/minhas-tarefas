import * as S from './style'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome Tarefa</S.Titulo>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Tarefa
