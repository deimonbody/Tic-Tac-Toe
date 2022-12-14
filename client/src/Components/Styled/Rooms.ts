import styled from "styled-components";

export const RoomsWraper = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 30px;
  column-gap: 30px;
`;
export const NothingHere = styled.div`
  font-size: 1.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${(props) => props.theme.fonts.bold};
  padding-top: 50px;
`;
