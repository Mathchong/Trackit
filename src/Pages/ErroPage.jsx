import styled from "styled-components";

export default function ErroPage() {
  return (
    <ErrorInfo>
      <h1>Parece que não conseguimos encontra sua página</h1>
      <h2>Por favor retorne ao inicio</h2>
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
