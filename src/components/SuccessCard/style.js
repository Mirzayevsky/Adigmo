import styled from "styled-components";
export const Wrapper = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 99999999999;
top: 0;
left: 0;
background-color: #fff;
.ancor{
  color:#0080ff;
}
p{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    width: 84%;
    margin: auto;
    @media only screen and (max-width: 600px) {
    width: 90%;
    text-align: center;
}

}
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
position: relative;
@media only screen and (max-width: 600px) {
    width: 90%;
    margin: auto;
    height: fit-content;
    padding-bottom: 120px;
}
`;
export const Title = styled.div`
 font-size: 24px;
 font-weight: 700;
 text-align: center;
 margin: 20px 0;
 @media only screen and (max-width: 600px) {
 font-size: 18px;

}

`;
export const Icon = styled.div`
 width: 100%;
 margin: 20px auto;
 display: flex;
 justify-content: center;

`;

export const Button = styled.div`
background-color: #0080ff;
  padding: 10px 47px;
  border-radius: 30px;
  border: 0;
  width: fit-content;
  color: #fff;
  margin: 10px auto;
  margin-top: 15px;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 30px ;

  &:hover {
    background-color: #49cb86;
  }

`;