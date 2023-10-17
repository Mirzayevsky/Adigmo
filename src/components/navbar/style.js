import styled from "styled-components";
export const Wrapper  = styled.div`
 width: 100%;
 height: 80px;
 background-color: #fff;
 border-bottom: 1px solid gray;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Logo  = styled.div`
 width: 120px;
 height: 80px;
 position: relative;
  svg{
    height: 100%;
    width: fit-content;
  }
`;
export const  Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const  LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0;
    @media only screen and (max-width: 600px){
        display: none;
    }
li{
    color: #222;
    list-style: none;
    margin: 0 10px;
}
`;
export const Button  = styled.div`
background-color: gainsboro;
padding: 10px 20px;
`;