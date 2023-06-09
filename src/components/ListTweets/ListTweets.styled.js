import styled from "styled-components";

export const Container = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-items: center;
  justify-content: space-evenly;
  gap: 30px;
`;
