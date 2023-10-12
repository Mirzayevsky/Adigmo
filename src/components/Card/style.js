import styled from "styled-components";
export const Wrapper =styled.div`
  width: fit-content;
  height: fit-content;

  .card {
    margin-left: -1rem;
    margin-right: -1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-bottom: 2rem;
    width: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: #0080ff;
    padding: 1.5rem;
    border-radius: 16px;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff
  }

  .price {
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 700;
    color: #fff
  }

  .desc {
    margin: 10px 0;
    line-height: 1.625;
    color: #fff;
  }

  .lists {
    flex: 1 1 0%;
    color: rgb(232, 232, 232);
    margin: 20px 0;
  }

  .lists .list {
    margin-bottom: 1rem;
    display: flex;
    margin-left: 0.5rem
  }

  .lists .list svg {
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
    color: #fff;
  }

  .action {
    border: none;
    outline: none;
    display: inline-block;
    border-radius: 0.25rem;
    background-color: #fff;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: rgba(17, 24, 39, 1);
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      background-color: #49CB86;
    }
  }
`;