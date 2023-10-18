import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #fff;
  color: #000 !important;
  transition: 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  @media (max-width: 400px) {
    width: 100%;
  }
 .sidebar-logo{
   height: 45px;
   width: fit-content;
   @media (max-width: 600px) {
    margin-right: 130px;

  }
 }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const SidebarHeader = styled.div`
width: 80%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
  padding: 10px 0;
`;

export const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 15px;
  padding-right: 0;
`;

export const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
    @media only screen and (max-width:600px) {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;