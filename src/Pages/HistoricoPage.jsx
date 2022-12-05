import styled from "styled-components";

export default function HistoricoPage() {
  return (
    <TextoHistorico>
      <div className="txt">
        <h1>Eu sou a pagina de histórico!</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </div>
    </TextoHistorico>
  );
}

const TextoHistorico = styled.main`
  background-color: #e5e5e5;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .txt {
    margin-top: 98px;
    width: 375px;
  }

  h1 {
    margin-left: 17px;
    font-family: Lexend Deca;
    font-size: 23px;
    color: #126ba5;
  }

  h2 {
    margin-top: 25px;
    margin-left: 17px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    margin-bottom: 28px;
  }
`;
