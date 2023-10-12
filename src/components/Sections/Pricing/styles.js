import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
export const Container = styled.div`
  width: 75%;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px){
    width: 90%;
    margin-left: 10%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const HeaderInfo = styled.div`
  margin: 80px 0;
  text-align: center;
  h1{
    
  }
  .subtitle{
    width: 50%;
    margin: auto;
    padding:15px 0;
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 860px) {
      width: 90%;
    }
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
