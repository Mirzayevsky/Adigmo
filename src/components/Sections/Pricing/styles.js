import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
export const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;
  .subtitle{
    padding:15px 0;
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 860px) {
    text-align: center;
  }




`;
export const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
export const TableBox = styled.div`
  width: 31%;
  border-radius: 35px;
  box-shadow:  9px 9px 18px #b5b5b5,
    -9px -9px 18px #ffffff;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;
