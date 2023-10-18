import styled from "styled-components";
export const Wrapper = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 99999999999;
`;
export const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
backdrop-filter: blur(12px);
display: flex;
align-items: center;
justify-content: center;
`;
export const Box = styled.div`
height: 50%;
width: 50%;
background-color: #fff;
border-radius: 14px;
padding: 20px ;
-webkit-box-shadow: -2px 1px 26px 0px rgba(34, 60, 80, 0.47);
-moz-box-shadow: -2px 1px 26px 0px rgba(34, 60, 80, 0.47);
box-shadow: -2px 1px 26px 0px rgba(34, 60, 80, 0.47);
@media only screen and (max-width: 600px) {
    width: 80%;
    height: 40%;
}
`;
export const Title = styled.div`
 font-size: 18px;
 font-weight: 600;
 text-align: center;
 margin: 20px 0;

`;
export const Button = styled.div`
 font-size: 16px;
padding: 8px 30px;
border-radius: 30px;
background-color: green;
transition: 0.5s ease;
width: fit-content;
margin: 20px auto;

&:hover{

}

`;