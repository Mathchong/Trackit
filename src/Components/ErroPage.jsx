import styled from "styled-components";

export default function ErroPage() {
  return (
    <ErrorInfo>
      <h1>Eu sou a pagina de Erros!!</h1>
      <h2>BUUUUUUU! Se amedronte</h2>
    </ErrorInfo>
  );
}

const ErrorInfo = styled.main`
  background-color: #e5e5e5;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 70px;
  }
`;
